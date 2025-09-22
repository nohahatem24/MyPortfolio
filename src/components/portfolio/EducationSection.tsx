/**
 * Education section component with pink/purple theme and scroll animations
 * Displays academic background and achievements
 */

import React from 'react';
import { GraduationCap, Calendar, Award, Languages, Clock } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// --- NEW: EducationCard Child Component ---
const EducationCard = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center shadow-md">
            <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-pink-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Bachelor of Engineering
          </h3>
          <h4 className="text-md sm:text-lg font-semibold text-pink-600 dark:text-purple-400 mb-3">
            Communication & Information Systems
          </h4>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Helwan University, 2020 - 2025</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" />
              <span>Graduation Project Grade: A+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- NEW: LanguageItem Child Component ---
const LanguageItem = ({ name, level, percentage, delay }: { name: string, level: string, percentage: string, delay: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-md font-semibold text-gray-900 dark:text-white">{name}</span>
        <span className="text-xs text-pink-600 dark:text-purple-400 font-medium">{level}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: isVisible ? percentage : '0%', transitionDelay: `${delay}ms` }}
        ></div>
      </div>
    </div>
  );
};

// --- NEW: LanguagesCard Child Component ---
const LanguagesCard = ({ isVisible }: { isVisible: boolean }) => {
  const languages = [
    { name: 'Arabic', level: 'Native', percentage: '100%', delay: 600 },
    { name: 'English', level: 'Fluent', percentage: '90%', delay: 700 },
    { name: 'French', level: 'Intermediate', percentage: '45%', delay: 800 },
    { name: 'Italian', level: 'Intermediate', percentage: '45%', delay: 900 },
  ];

  return (
    <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center shadow-md">
            <Languages className="h-6 w-6 sm:h-7 sm:w-7 text-pink-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {languages.map((lang) => (
              <LanguageItem key={lang.name} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-16 md:py-24 bg-[#fffaf5] dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Education & Languages
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic foundation and linguistic capabilities.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          <EducationCard isVisible={isVisible} />
          <LanguagesCard isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}