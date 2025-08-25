/**
 * Hero section component with pink/purple theme and functional links
 * Main introduction section with professional photo and call-to-action buttons
 */

import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import HeroImage from '../../assets/images/optimized/noha1.png';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-16 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Noha Hatem
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Creating digital experiences with purpose, impact, and heart.
            </p>
            
            <div className={`flex flex-row justify-center lg:justify-start gap-4 text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="bg-white/60 dark:bg-gray-800/60 px-3 py-2 rounded-full shadow-sm backdrop-blur-sm shrink-0">UI/UX Designer</span>
              <span className="bg-white/60 dark:bg-gray-800/60 px-3 py-2 rounded-full shadow-sm backdrop-blur-sm shrink-0">Flutter Developer</span>
              <span className="bg-white/60 dark:bg-gray-800/60 px-3 py-2 rounded-full shadow-sm backdrop-blur-sm shrink-0">Graphic Designer</span>
              <span className="bg-white/60 dark:bg-gray-800/60 px-3 py-2 rounded-full shadow-sm backdrop-blur-sm shrink-0">Creative Technologist</span>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-transform shadow-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 dark:hover:bg-purple-900/20 dark:border-purple-500 dark:text-purple-400 px-8 py-3 text-lg bg-transparent transform hover:scale-105 transition-transform"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className={`flex justify-center lg:justify-start space-x-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a 
                href="mailto:nohahatem.nh@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+201554199143" 
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/nohahatem24" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Professional Photo Placeholder */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm flex items-center justify-center">
                  {/* My image */}
                  <img 
                    src={HeroImage}
                    alt="Noha Hatem - UI/UX Designer & Flutter Developer"
                    className="w-full h-full rounded-full object-cover"
                  />
                  {/* Alternative: Remove the img tag above and uncomment below for placeholder */}
                  {/* <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-pink-600 dark:text-purple-400">NH</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Your Professional Photo</p>
                  </div> */}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
