/**
 * Education section component with pink/purple theme and scroll animations
 * Displays academic background and achievements
 */

import React from 'react';
import { GraduationCap, Calendar, Award, Languages } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="education" 
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education Card */}
          <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-1000 delay-200 hover:shadow-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-pink-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Engineering
                </h3>
                <h4 className="text-xl font-semibold text-pink-600 dark:text-purple-400 mb-3">
                  Communication and Information Technology Department
                </h4>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Helwan University, 2020 - 2025</span>
                </div>
                <div className="flex items-start space-x-2 mb-4">
                  <Award className="h-5 w-5 text-pink-500 dark:text-purple-400 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">
                    With Grade A+ in the graduation project.
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Focused on software engineering, UI/UX, and mobile development.
                </p>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-1000 delay-400 hover:shadow-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Languages className="h-8 w-8 text-pink-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Languages
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Row - Arabic and English */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">Arabic</span>
                      <span className="text-sm text-pink-600 dark:text-purple-400 font-medium">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000 delay-600" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">English</span>
                      <span className="text-sm text-pink-600 dark:text-purple-400 font-medium">Fluent</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000 delay-700" style={{width: '90%'}}></div>
                    </div>
                  </div>

                  {/* Second Row - French and Italian */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">French</span>
                      <span className="text-sm text-pink-600 dark:text-purple-400 font-medium">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000 delay-800" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">Italian</span>
                      <span className="text-sm text-pink-600 dark:text-purple-400 font-medium">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000 delay-900" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
