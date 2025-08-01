/**
 * Experience section component with pink/purple theme and scroll animations
 * Displays professional work experience and achievements
 */

import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  location: string;
  achievements: string[];
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: ExperienceItem[] = [
    {
      title: 'UI/UX Designer & Front-End Web Developer',
      period: 'Jan 2025 – Present',
      company: 'Freelance',
      location: 'Remote',
      achievements: [
        'Delivered multilingual, responsive websites using HTML, CSS, JavaScript, and React',
        'Implemented real-time features including maps, bookings, and chatbots',
        'Enhanced performance, reducing page load time by 35% and bounce rates by 20%',
        'Used Figma, wireframes, prototypes, and design systems to deliver accessible UIs'
      ]
    },
    {
      title: 'Flutter Developer – Mobile Applications',
      period: 'Jul 2024 – Present',
      company: 'Freelance',
      location: 'Remote',
      achievements: [
        'Developed scalable, cross-platform apps for Android/iOS using Flutter & Dart',
        'Integrated Firebase Authentication, Realtime Database, and SQLite',
        'Improved app responsiveness by 40% and achieved 95% crash-free usage'
      ]
    },
    {
      title: 'Visual Branding & Logo Designer',
      period: 'Jul 2021 – Present',
      company: 'Freelance',
      location: 'Remote',
      achievements: [
        'Designed 20+ ATS-optimized CVs and cover letters across multiple industries',
        'Created custom logo designs and branding packages for startups',
        'Maintained 100% 5-star rating and 70%+ client return rate',
        'Co-founded "Shouf Nourak شوف نورك" creative small business'
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey building digital experiences and creative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${200 + index * 100}ms` 
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
