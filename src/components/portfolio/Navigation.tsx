/**
 * Fixed navigation component with pink/purple theme
 * Provides smooth scrolling navigation between portfolio sections with dark mode toggle
 */

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    
    { id: 'projects', label: 'Projects' },
    { id: 'art', label: 'Art' }, // Add this line
    { id: 'certificates', label: 'Certificates' },
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
        { height: 'auto', opacity: 1, pointerEvents: 'auto', duration: 0.32, ease: 'power2.out' }
      );
    } else {
      gsap.killTweensOf(el);
      gsap.to(el, { height: 0, opacity: 0, pointerEvents: 'none', duration: 0.22, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-pink-200 dark:border-purple-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Noha
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
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
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-[#fffaf5] dark:bg-gray-900 transition-colors overflow-hidden ${
          isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-pink-200 dark:border-purple-700">
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
