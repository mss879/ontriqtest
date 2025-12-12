'use client';

import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
  children?: StaggeredMenuItem[];
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  navContainerRef?: React.RefObject<HTMLElement>;
}

export interface StaggeredMenuHandle {
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const StaggeredMenu = React.forwardRef<StaggeredMenuHandle, StaggeredMenuProps>(({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  menuButtonColor = '#000',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = '#5227FF',
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  navContainerRef
}, ref) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItems(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(['Menu']);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [mounted, menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: 'power2.out', ['--sm-num-opacity' as any]: 1, stagger: { each: 0.08, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === 'left' ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });

        const numberEls = Array.from(
          panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });

        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const plusH = plusHRef.current;
    const plusV = plusVRef.current;
    const icon = iconRef.current;
    if (!plusH || !plusV || !icon) return;

    spinTweenRef.current?.kill();

    if (opening) {
      spinTweenRef.current = gsap.timeline()
        .to(plusH, { rotate: 45, duration: 0.3, ease: 'power2.out' })
        .to(plusV, { rotate: -45, duration: 0.3, ease: 'power2.out' }, '<');
    } else {
      // Ensure we animate back to exactly 0 rotation
      spinTweenRef.current = gsap.timeline()
        .to(plusH, { rotate: 0, clearProps: 'transform', duration: 0.3, ease: 'power2.out' })
        .to(plusV, { rotate: 0, clearProps: 'transform', duration: 0.3, ease: 'power2.out' }, '<');
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, { color: targetColor, delay: 0.18, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback((opening: boolean) => {
    // Text animation removed to keep "Menu" text
  }, []);

  const openMenu = useCallback(() => {
    // Cancel any in-flight animations and open cleanly
    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    busyRef.current = false;

    if (openRef.current) return;
    openRef.current = true;
    setOpen(true);

    onMenuOpen?.();
    playOpen();
    animateIcon(true);
    animateColor(true);
    animateText(true);
  }, [onMenuOpen, playOpen, animateIcon, animateColor, animateText]);

  const toggleMenu = useCallback(() => {
    if (openRef.current) {
      // close
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    } else {
      openMenu();
    }
  }, [openMenu, onMenuClose, playClose, animateIcon, animateColor, animateText]);

  const closeMenu = useCallback(() => {
    // Kill ALL animations immediately
    openTlRef.current?.kill();
    openTlRef.current = null;
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
    spinTweenRef.current?.kill();
    colorTweenRef.current?.kill();
    busyRef.current = false;

    // Force state to closed
    openRef.current = false;
    setOpen(false);
    
    // Reset icon to menu state (two horizontal lines)
    if (plusHRef.current) gsap.set(plusHRef.current, { rotate: 0, clearProps: 'transform' });
    if (plusVRef.current) gsap.set(plusVRef.current, { rotate: 0, clearProps: 'transform' });
    
    // Reset panel position offscreen
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (panel) {
      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([...layers, panel], { xPercent: offscreen });
    }
    
    onMenuClose?.();
  }, [position, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Don't close if clicking on the panel itself
      if (panelRef.current && panelRef.current.contains(target)) return;
      // Don't close if clicking on the nav container (it has its own toggle handler)
      if (navContainerRef?.current && navContainerRef.current.contains(target)) return;
      // Don't close if clicking on the toggle button
      if (toggleBtnRef.current && toggleBtnRef.current.contains(target)) return;
      
      closeMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu, navContainerRef]);

  // Expose controls via ref
  React.useImperativeHandle(ref, () => ({
    toggle: toggleMenu,
    open: openMenu,
    close: closeMenu
  }), [toggleMenu, openMenu, closeMenu]);

  const handleButtonClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling to container
    openMenu();
  }, [openMenu]);

  return (
    <>
      <button
        ref={toggleBtnRef}
        className={`sm-toggle relative inline-flex items-center gap-2 bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible pointer-events-auto py-0.5 w-full ${className || ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={handleButtonClick}
        type="button"
      >
        <span ref={textInnerRef} className="text-xl font-semibold uppercase tracking-tighter leading-none block">Menu</span>
        
        <span ref={iconRef} className="relative w-[18px] h-[10px] flex flex-col items-center justify-between will-change-transform">
          <span
            ref={plusHRef}
            className="block w-full h-[2px] bg-current will-change-transform"
          />
          <span
            ref={plusVRef}
            className="block w-full h-[2px] bg-current will-change-transform"
          />
        </span>
      </button>

      {mounted && createPortal(
        <div className={`sm-scope ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div
            className={'staggered-menu-wrapper fixed inset-0 z-[9999]'}
            style={accentColor ? ({ ['--sm-accent' as any]: accentColor } as React.CSSProperties) : undefined}
            data-position={position}
            data-open={open || undefined}
          >
            <div
              ref={preLayersRef}
              className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
              aria-hidden="true"
            >
              {(() => {
                const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
                let arr = [...raw];
                if (arr.length >= 3) {
                  const mid = Math.floor(arr.length / 2);
                  arr.splice(mid, 1);
                }
                return arr.map((c, i) => (
                  <div
                    key={i}
                    className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                    style={{ background: c }}
                  />
                ));
              })()}
            </div>

            <aside
              id="staggered-menu-panel"
              ref={panelRef}
              className="staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[12px]"
              style={{ WebkitBackdropFilter: 'blur(12px)' }}
              aria-hidden={!open}
            >
              <button
                className="sm-close-btn absolute top-8 right-8 p-2 z-50 bg-transparent border-none cursor-pointer pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  closeMenu();
                }}
                aria-label="Close menu"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="sm-panel-inner flex-1 flex flex-col gap-5">
                <ul
                  className="sm-panel-list list-none m-0 p-0 flex flex-col gap-10"
                  role="list"
                  data-numbering={displayItemNumbering || undefined}
                >
                  {items && items.length ? (
                    items.map((it, idx) => (
                      <React.Fragment key={it.label + idx}>
                        <li className="sm-panel-itemWrap relative overflow-hidden leading-none flex items-center">
                          <a
                            className="sm-panel-item relative text-black font-semibold text-[3.5rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline"
                            href={it.children ? '#' : it.link}
                            onClick={(e) => {
                              if (it.children) {
                                e.preventDefault();
                                toggleExpand(it.label, e);
                              }
                            }}
                            aria-label={it.ariaLabel}
                            data-index={idx + 1}
                          >
                            <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                              {it.label}
                            </span>
                          </a>
                          {it.children && (
                            <button
                              onClick={(e) => toggleExpand(it.label, e)}
                              className="ml-3 p-1 rounded-full hover:bg-gray-100 focus:outline-none transition-colors"
                              aria-label={expandedItems.includes(it.label) ? "Collapse submenu" : "Expand submenu"}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-200 ${expandedItems.includes(it.label) ? 'rotate-180' : ''}`}
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </button>
                          )}
                        </li>
                        {it.children && expandedItems.includes(it.label) && it.children.map((child, cIdx) => (
                          <li className="sm-submenu-itemWrap relative overflow-hidden leading-normal ml-6 py-1" key={child.label + cIdx}>
                            <a
                              className="sm-submenu-item relative font-medium text-[1.125rem] cursor-pointer leading-normal tracking-normal normal-case transition-[background,color] duration-150 ease-linear inline-block no-underline text-gray-500 hover:text-black"
                              href={child.link}
                              aria-label={child.ariaLabel}
                              style={{ fontSize: '1.125rem', textTransform: 'none', fontWeight: 500 }}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </React.Fragment>
                    ))
                  ) : (
                    <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                      <span className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                        <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                          No items
                        </span>
                      </span>
                    </li>
                  )}
                </ul>

                {displaySocials && socialItems && socialItems.length > 0 && (
                  <div className="sm-socials mt-auto pt-8 flex flex-col gap-3" aria-label="Social links">
                    <h3 className="sm-socials-title m-0 text-base font-medium [color:var(--sm-accent,#ff0000)]">Socials</h3>
                    <ul
                      className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                      role="list"
                    >
                      {socialItems.map((s, i) => (
                        <li key={s.label + i} className="sm-socials-item">
                          <a
                            href={s.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>

          <style>{`
    .sm-scope .staggered-menu-wrapper { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; pointer-events: none; }
    .sm-scope .sm-close-btn { color: #000; transition: color 0.3s ease; cursor: pointer; }
    .sm-scope .sm-close-btn:hover { color: var(--sm-accent, #ff0000); }
    .sm-scope .staggered-menu-wrapper[data-open] { pointer-events: auto; }
    .sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: #e9e9ef; font-weight: 500; line-height: 1; overflow: visible; }
    .sm-scope .sm-toggle:focus-visible { outline: 2px solid #ffffffaa; outline-offset: 4px; border-radius: 4px; }
    .sm-scope .sm-line:last-of-type { margin-top: 6px; }
    .sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
    .sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
    .sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
    .sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
    .sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
    .sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
    .sm-scope .sm-line { display: none !important; }
    .sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(260px, 38vw, 420px); height: 100%; background: white; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; padding: 4em 2em 1.5em 2em; overflow-y: auto; z-index: 10; border-top-left-radius: 48px; border-bottom-left-radius: 48px; border-left: 12px solid #000; box-shadow: -25px 0 60px -10px rgba(0, 0, 0, 0.3); }
    .sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0; border-top-right-radius: 48px; border-bottom-right-radius: 48px; border-left: none; border-right: 12px solid #000; box-shadow: 25px 0 60px -10px rgba(0, 0, 0, 0.3); }
    .sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(260px, 38vw, 420px); pointer-events: none; z-index: 5; border-top-left-radius: 48px; border-bottom-left-radius: 48px; overflow: hidden; }
    .sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0; border-top-right-radius: 48px; border-bottom-right-radius: 48px; }
    .sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
    .sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
    .sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
    .sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
    .sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
    .sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
    .sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
    .sm-scope .sm-socials-list .sm-socials-link:hover,
    .sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
    .sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #ff0000); outline-offset: 3px; }
    .sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #111; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
    .sm-scope .sm-socials-link:hover { color: var(--sm-accent, #ff0000); }
    .sm-scope .sm-panel-title { margin: 0; font-size: 1rem; font-weight: 600; color: #fff; text-transform: uppercase; }
    .sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.5rem; }
    .sm-scope .sm-panel-item { position: relative; color: #000; font-weight: 600; font-size: 2.5rem; cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: background 0.25s, color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
    .sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
    .sm-scope .sm-panel-item:hover { color: var(--sm-accent, #ff0000); }
    .sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
    .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0; right: 1.8em; font-size: 1rem; font-weight: 400; color: var(--sm-accent, #ff0000); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
    .sm-scope .staggered-menu-panel::-webkit-scrollbar { display: none; }
    .sm-scope .staggered-menu-panel { -ms-overflow-style: none; scrollbar-width: none; }
    @media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; border-radius: 0; border: none; } .sm-scope .sm-prelayers { width: 100%; border-radius: 0; } }
    @media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; border-radius: 0; border: none; } .sm-scope .sm-prelayers { width: 100%; border-radius: 0; } }
          `}</style>
        </div>,
        document.body
      )}
    </>
  );
});

StaggeredMenu.displayName = 'StaggeredMenu';

export default StaggeredMenu;
