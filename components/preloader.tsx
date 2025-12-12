'use client';

import { useState, useEffect } from 'react';

const words = ["Establish", "Empower", "Excel", "Business Setup to Workforce Management", "Ontriq"];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if already visited in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Mark as visited
    sessionStorage.setItem('hasVisited', 'true');
    
    let timeoutId: NodeJS.Timeout;

    const runAnimation = () => {
      const durations = [700, 700, 700, 1600]; 
      let step = 0;

      const next = () => {
        if (step >= durations.length) return;
        
        timeoutId = setTimeout(() => {
          setCurrentWord((prev) => prev + 1);
          step++;
          next();
        }, durations[step]);
      };

      next();
    };

    runAnimation();

    const handleLoad = () => {
      const minTime = 3700 + 600;
      
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }, minTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${isExiting ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 transition-opacity duration-1000 ${
            isExiting ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Subtle moving gradient accent */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full transition-all duration-1000 ${
            isExiting ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center transition-all duration-700 ${
        isExiting ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
      }`}>
        
        {/* Word Display */}
        <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden">
          {mounted && (
            currentWord < words.length - 1 ? (
              <div key={currentWord} className="relative">
                {/* Main Word */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight animate-[wordFade_0.6s_ease-out_forwards]">
                  {words[currentWord]}
                </h1>
                {/* Accent dot */}
                <span className="absolute -right-4 top-0 w-2 h-2 rounded-full bg-gray-900 animate-[dotPulse_0.6s_ease-out_forwards]" />
              </div>
            ) : (
              <div className="animate-[logoFade_0.8s_ease-out_forwards] opacity-0">
                <img src="/ontriq logo1.png" alt="Ontriq" className="h-32 md:h-40 w-auto object-contain" />
              </div>
            )
          )}
        </div>

        {/* Progress Dots */}
        <div className="mt-12 flex items-center gap-2">
          {words.map((_, i) => (
            <div 
              key={i}
              className={`rounded-full transition-all duration-500 ease-out ${
                i === currentWord 
                  ? 'w-8 h-2 bg-gray-900' 
                  : i < currentWord 
                    ? 'w-2 h-2 bg-gray-600' 
                    : 'w-2 h-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Tagline */}
       
      </div>

      {/* Exit Overlay */}
      <div 
        className={`absolute inset-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] origin-bottom ${
          isExiting ? 'translate-y-0' : 'translate-y-full'
        }`}
      />

      <style jsx>{`
        @keyframes wordFade {
          0% { 
            opacity: 0;
            transform: translateY(30px);
            filter: blur(8px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        @keyframes dotPulse {
          0% { 
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes logoFade {
          0% { 
            opacity: 0;
            transform: scale(0.9);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
