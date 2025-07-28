/**
 * About section component with tool icons and pink/purple theme
 * Displays personal introduction and skills overview with tool icons
 */

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const tools = [
    { name: 'Figma', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/4950c0c9-57be-4111-9b58-9bea6f0869e7.jpg' },
    { name: 'Flutter', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/25a5bf86-9ba5-42dc-8ce5-962a8b45fca9.jpg' },
    { name: 'Firebase', icon: 'https://sider.ai/autoimage/firebase icon' },
    { name: 'Canva', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/9e82b2b5-7a03-4820-8f9a-2b0100c70a25.jpg' },
    { name: 'GitHub', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/b56ce816-5933-4b49-9663-7e53ea0f67eb.jpg' },
    { name: 'ChatGPT', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/40d38792-122d-4bfb-9558-34d81062b53a.jpg' }
  ];

  const expertise = [
    'UI/UX Design',
    'Mobile Development', 
    'Illustration',
    'Prototyping',
    'User Research',
    'Creative Coding'
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hello there! I'm Noha Hatem</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate UI/UX designer and Flutter developer with a deep love for creating 
                meaningful digital experiences. My journey in the tech world is fueled by creativity, 
                empathy, and a desire to solve real problems through thoughtful design and clean code.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond the digital realm, I express myself through various art forms and handmade 
                creations. This blend of technical expertise and artistic sensibility allows me to 
                bring a unique perspective to every project I undertake.
              </p>
            </div>
          </div>
          
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">My Toolbox</h4>
              <div className="grid grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div 
                    key={tool.name} 
                    className={`text-center transition-all duration-500 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`} 
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-md">
                      <img 
                        src={tool.icon} 
                        alt={tool.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div 
                    key={item} 
                    className={`bg-pink-50 dark:bg-purple-900/30 px-4 py-2 rounded-lg text-center transition-all duration-500 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 50}ms` }}
                  >
                    <span className="text-pink-700 dark:text-purple-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
