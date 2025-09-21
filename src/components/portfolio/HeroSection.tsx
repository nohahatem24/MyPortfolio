/**
 * FINAL Bulletproof Responsive Hero Section - With Visible Mobile Skill Bubbles.
 * The floating skill bubbles are now visible and repositioned on mobile screens for a rich, consistent look across all devices.
 */

import React from 'react';
import { Github, Mail, Phone, Hand } from 'lucide-react'; 
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import HeroImage from '../../assets/images/optimized/noha1.png';

// Animated Background Component (No changes needed here)
const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-[#fffaf5] dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 animate-gradient-xy" />
  </div>
);

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32 lg:text-left">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <p className="mb-4 text-xl font-semibold text-pink-600 dark:text-purple-400 flex items-center justify-center lg:justify-start">
              Hello, I'm Noha Hatem.
              <Hand className="ml-2 h-7 w-7 origin-bottom-right animate-wave" />
            </p>
            
            <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              I Craft Digital Worlds with{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Heart & Code.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 lg:mx-0">
              As a <span className="font-semibold text-gray-800 dark:text-white">Software Engineer</span>, <span className="font-semibold text-gray-800 dark:text-white">Product Designer</span>, and <span className="font-semibold text-gray-800 dark:text-white">Creative Technologist</span>, I transform complex human needs into beautiful and impactful digital experiences. My work is where engineering precision meets artistic soul.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="transform-gpu rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/40"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="transform-gpu rounded-full border-2 border-pink-400 bg-white/50 px-8 py-4 text-lg font-bold text-pink-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 dark:border-purple-500 dark:bg-gray-800/50 dark:text-purple-300 dark:hover:bg-gray-800/80"
              >
                Get In Touch
              </button>
            </div>

            <div className="mt-10 flex justify-center space-x-6 lg:justify-start">
              <a href="https://github.com/nohahatem24" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transform-gpu text-gray-500 transition-all duration-200 hover:scale-125 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <Github className="h-7 w-7" />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nohahatem.nh@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email" 
                className="transform-gpu text-gray-500 transition-all duration-200 hover:scale-125 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
              >
                <Mail className="h-7 w-7" />
              </a>
              <a href="tel:+201554199143" aria-label="Phone" className="transform-gpu text-gray-500 transition-all duration-200 hover:scale-125 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <Phone className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className={`relative flex h-full w-full items-center justify-center transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-60 blur-xl transition duration-1000 animate-pulse-slow"></div>
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white/60 p-2 shadow-2xl backdrop-blur-lg dark:bg-gray-800/60">
                <img
                  src={HeroImage}
                  alt="Noha Hatem - Product Designer & Creative Technologist"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              
              {/* --- CHANGE IS HERE: Skill Bubbles are now responsive --- */}
              <div className="absolute inset-0">
                {/* Bubble 1: Software Engineer */}
                <span className="absolute top-0 left-0 lg:-top-4 lg:left-10 animate-float rounded-full bg-white/70 px-3 py-1 text-xs lg:px-4 lg:py-2 lg:text-sm font-medium text-pink-600 shadow-lg backdrop-blur-md dark:bg-white/10 dark:text-purple-300">
                  Software Engineer
                </span>
                {/* Bubble 2: Creative Tech */}
                <span className="absolute top-1/4 -right-4 lg:-right-10 animate-float [animation-delay:-2s] rounded-full bg-white/70 px-3 py-1 text-xs lg:px-4 lg:py-2 lg:text-sm font-medium text-pink-600 shadow-lg backdrop-blur-md dark:bg-white/10 dark:text-purple-300">
                  Creative Tech
                </span>
                {/* Bubble 3: Art Direction */}
                <span className="absolute bottom-0 right-1/4 lg:-bottom-4 animate-float [animation-delay:-4s] rounded-full bg-white/70 px-3 py-1 text-xs lg:px-4 lg:py-2 lg:text-sm font-medium text-pink-600 shadow-lg backdrop-blur-md dark:bg-white/10 dark:text-purple-300">
                  Art Direction
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
   );
}
