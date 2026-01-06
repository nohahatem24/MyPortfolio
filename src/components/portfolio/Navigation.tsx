/**
 * Fixed navigation component with pink/purple theme
 * Provides smooth scrolling navigation between portfolio sections with dark mode toggle
 */
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import logo from '../../assets/images/nh-logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'art', label: 'Art' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  // animate open/close with GSAP
  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;

    // respect user reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.display = isOpen ? 'block' : 'none';
      return;
    }

    if (isOpen) {
      gsap.killTweensOf(el);
      gsap.fromTo(
        el,
        { height: 0, opacity: 0, pointerEvents: 'none' },
        {
          height: 'auto',
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.32,
          ease: 'power2.out'
        }
      );
    } else {
      gsap.killTweensOf(el);
      gsap.to(el, {
        height: 0,
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.22,
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500 rounded-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Go to top"
          >
            <img
              src={logo}
              alt="Noha Logo"
              className="h-10 w-auto sm:h-12 object-contain"
              loading="eager"
              decoding="async"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-pink-700 dark:text-purple-400 border-b-2 border-pink-500 dark:border-purple-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-purple-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
      >
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                  activeSection === item.id
                    ? 'text-pink-700 dark:text-purple-400 bg-pink-100 dark:bg-purple-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}