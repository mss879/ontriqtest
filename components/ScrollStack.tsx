'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardInitialTops = useRef<number[]>([]);
  const rafId = useRef<number | null>(null);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const updateCards = useCallback(() => {
    if (!cardsRef.current.length || !containerRef.current) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTop = containerRect.top + scrollTop;
    
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardInitialTop = cardInitialTops.current[i];
      const cardAbsoluteTop = containerTop + cardInitialTop;
      
      // When card should start sticking
      const stickyStart = cardAbsoluteTop - stackPositionPx;
      // When card should stop sticking (when next card arrives or end)
      const nextCardStart = i < cardsRef.current.length - 1 
        ? containerTop + cardInitialTops.current[i + 1] - stackPositionPx - itemStackDistance
        : containerTop + containerRef.current!.scrollHeight;

      // Calculate scale progress
      const scaleStart = stickyStart;
      const scaleEnd = stickyStart + (stackPositionPx - scaleEndPositionPx);
      let scaleProgress = 0;
      if (scrollTop >= scaleStart && scrollTop <= scaleEnd) {
        scaleProgress = (scrollTop - scaleStart) / (scaleEnd - scaleStart);
      } else if (scrollTop > scaleEnd) {
        scaleProgress = 1;
      }

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Calculate blur
      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = containerTop + cardInitialTops.current[j];
          const jStickyStart = jCardTop - stackPositionPx;
          if (scrollTop >= jStickyStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      // Calculate translateY for sticky effect
      let translateY = 0;
      const isSticky = scrollTop >= stickyStart;

      if (isSticky) {
        // Card should stick
        translateY = scrollTop - cardAbsoluteTop + stackPositionPx + (itemStackDistance * i);
      }

      // Apply transforms
      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blur > 0 ? `blur(${blur}px)` : 'none';

      card.style.transform = transform;
      card.style.filter = filter;

      // Callback when stack is complete
      if (i === cardsRef.current.length - 1 && isSticky && !stackCompletedRef.current) {
        stackCompletedRef.current = true;
        onStackComplete?.();
      }
    });
  }, [stackPosition, scaleEndPosition, itemStackDistance, baseScale, itemScale, rotationAmount, blurAmount, onStackComplete, parsePercentage]);

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(updateCards);
  }, [updateCards]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Get all cards within this container
    const cards = Array.from(containerRef.current.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    // Store initial positions relative to container
    cardInitialTops.current = cards.map(card => card.offsetTop);

    // Apply initial styles
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.position = 'relative';
      card.style.zIndex = `${i + 1}`;
    });

    // Recalculate positions after margin is applied
    cardInitialTops.current = cards.map(card => card.offsetTop);

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial update
    updateCards();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      stackCompletedRef.current = false;
    };
  }, [itemDistance, handleScroll, updateCards]);

  return (
    <div
      className={`relative w-full ${className}`.trim()}
      ref={containerRef}
    >
      <div className="scroll-stack-inner px-4 md:px-20">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;

