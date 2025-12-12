"use client";

import { useEffect, useRef } from "react";

const logos = [
  { name: "Business", width: 176, height: 38 },
  { name: "Appplication", width: 171, height: 38 },
  { name: "Startups", width: 161, height: 38 },
  { name: "Logisum", width: 156, height: 38 },
  { name: "Logoipsum", width: 193, height: 38 },
  { name: "Company", width: 196, height: 38 },
  { name: "Logoipsum2", width: 157, height: 38 },
];

export default function TrustedBy() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPosition += speed;
      const firstChild = scrollContainer.firstElementChild as HTMLElement;
      if (firstChild && scrollPosition >= firstChild.offsetWidth + 60) {
        scrollPosition = 0;
        scrollContainer.appendChild(firstChild);
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg md:text-xl">
            Trusted by 150,000+ users worldwide
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex items-center overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-center gap-16 will-change-transform"
              style={{ transform: "translateX(0px)" }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 opacity-50 hover:opacity-80 transition-opacity"
                >
                  <LogoPlaceholder name={logo.name} width={logo.width} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Placeholder component for logos - replace with actual SVG logos
function LogoPlaceholder({ name, width }: { name: string; width: number }) {
  return (
    <div
      className="flex items-center justify-center text-gray-400 font-semibold text-lg tracking-wider"
      style={{ width: `${width}px`, height: "38px" }}
    >
      {name}
    </div>
  );
}
