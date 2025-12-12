'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

import StaggeredMenu, { StaggeredMenuHandle } from './staggered-menu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { 
    label: 'About', 
    ariaLabel: 'Learn about us', 
    link: '/about'
  },
  { 
    label: 'Services', 
    ariaLabel: 'View our services', 
    link: '#',
    children: [
      { label: 'BGV Services', ariaLabel: 'BGV Services', link: '/services/bgv' },
      { label: 'HR Services', ariaLabel: 'HR Services', link: '/services/hr' },
      { label: 'Recruitment', ariaLabel: 'Recruitment', link: '/services/recruitment' },
      { label: 'Payroll', ariaLabel: 'Payroll', link: '/services/payroll' },
      { label: 'Company Formation', ariaLabel: 'Company Formation', link: '/services/company-formation' },
    ]
  },
  {
    label: 'Technology',
    ariaLabel: 'Technology',
    link: '/technology'
  },
  { label: 'BGV Process', ariaLabel: 'View our process', link: '/process' },
  { label: 'Industries', ariaLabel: 'View industries', link: '/industries' },
  { label: 'FAQ', ariaLabel: 'View FAQ', link: '/faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://instagram.com' }
];

export default function Navbar() {
  const menuRef = useRef<StaggeredMenuHandle>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    // Only trigger if clicking on the container itself, not the menu button
    if ((e.target as HTMLElement).closest('.sm-toggle')) return;
    menuRef.current?.open();
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-50 flex w-full items-center transition-all duration-300 ${
      isScrolled 
        ? 'top-4 px-6 md:px-12 lg:px-16' 
        : 'top-6 px-6 md:px-12 lg:px-16'
    }`}>
      <div className={`flex w-full items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'rounded-2xl border border-gray-200 bg-white/95 shadow-lg backdrop-blur-md px-6 py-3' 
          : ''
      }`}>
        <div className="flex items-center">
          <Link 
            href="/" 
            className={`flex items-center px-2 pb-1 overflow-hidden ${
              isContactPage 
                ? '' 
                : isScrolled
                ? ''
                : 'rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
            }`}
            aria-label="Ontriq - Go to homepage"
          >
            <Image
              src="/ontriq logo1.png"
              alt="Ontriq Logo"
              width={150}
              height={64}
              className="h-16 w-auto object-contain -mt-1"
              priority
            />
          </Link>
        </div>



        <nav 
          ref={navRef}
          className={`inline-flex items-center px-4 py-2 cursor-pointer ${
            isContactPage 
              ? '' 
              : isScrolled
              ? ''
              : 'rounded-xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
          }`}
          onClick={handleContainerClick}
          aria-label="Main navigation"
        >
          <StaggeredMenu
            ref={menuRef}
            navContainerRef={navRef}
            items={menuItems}
            socialItems={socialItems}
            colors={['#FF8918', '#0098F3']}
            accentColor="#FF8918"
            menuButtonColor="#000"
            openMenuButtonColor="#000"
            className="z-[10000] w-full"
          />
        </nav>
      </div>
    </div>
  );
}
