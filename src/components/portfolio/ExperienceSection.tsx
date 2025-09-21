/**
 * FINAL Reimagined Experience Section - With Bug Fix.
 * Corrects the 'achievements is not defined' error by using the correct variable 'exp.achievements'.
 */

import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  location: string;
  achievements: string[];
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences: ExperienceItem[] = [
    {
      title: 'Product Designer & Creative Technologist',
      period: 'Jan 2025 – Present',
      company: 'Freelance & Personal Projects',
      location: 'Remote',
      achievements: [
        'Led the end-to-end design for conceptual mobile apps, from user research and wireframing to high-fidelity interactive prototypes in Figma.',
        'Utilized AI-powered tools to accelerate the design process and generate innovative visual concepts.',
        'Developed responsive web components using React & Tailwind CSS, ensuring seamless user experience across all devices.',
        'Focused on creating human-centered designs that are both aesthetically pleasing and deeply functional.'
      ]
    },
    {
      title: 'Flutter & Dart Developer',
      period: 'Jul 2024 – Present',
      company: 'Freelance',
      location: 'Remote',
      achievements: [
        'Engineered scalable, cross-platform mobile applications for Android & iOS using the Flutter framework.',
        'Integrated backend services like Firebase for authentication, real-time data, and cloud functions.',
        'Optimized application performance, achieving a 40% improvement in responsiveness and maintaining a 95% crash-free user rate.'
      ]
    },
    {
      title: 'Visual Branding & Graphic Designer',
      period: 'Jul 2021 – Present',
      company: 'Freelance & Co-Founder',
      location: 'Remote',
      achievements: [
        'Co-founded "Shouf Nourak - شوف نورك," a creative small business focused on personal and artistic expression.',
        'Designed over 20 unique brand identity packages, including logos, color palettes, and visual guidelines for startups and individuals.',
        'Achieved a 100% 5-star client satisfaction rating through strong communication and delivering high-quality, user-focused designs.'
      ]
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-24 bg-[#fffaf5] dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my experience in building digital products and creative solutions.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto">
          {/* The vertical line of the timeline */}
          <div className="absolute left-6 sm:left-1/2 w-1 h-full bg-gradient-to-b from-pink-200 to-purple-200 dark:from-pink-800/50 dark:to-purple-800/50 rounded-full -translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-in-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start`}>
                  {/* Icon and Connector for large screens */}
                  <div className="hidden sm:flex w-1/2"></div>
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full absolute left-1/2 -translate-y-4 -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'} transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 shadow-xl backdrop-blur-lg transform hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center sm:hidden mb-4"> {/* Icon for small screens */}
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold mt-1 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-md font-semibold text-pink-600 dark:text-purple-400 mb-4">
                        {exp.company} | {exp.location}
                      </p>
                      
                      {/* --- THE FIX IS HERE --- */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement: string, achIndex: number) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
