/**
 * About section component with tool icons and pink/purple theme
 * Displays personal introduction and skills overview with categorized technical skills
 */

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTheme } from '../../hooks/useTheme';
import FirebaseIcon from '../../assets/images/optimized/Firebase_Logo2.svg.png';
import DartIcon from '../../assets/images/optimized/Dart_logo.png';
import ProfileImage from '../../assets/images/optimized/nohaidc.png';
import GitHubIconDark from '../../assets/images/optimized/Github_logo.png';
import ChatGPTIconDark from '../../assets/images/optimized/ChatGPT-logo-white-png-large-size.png';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { isDark } = useTheme();

  const tools = [
    { name: 'Figma', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/12e66a1b-e4ae-464c-9bcd-b97abf06396e.png' },
    { name: 'Flutter', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/b48b0695-b640-435c-8a9d-c96aab7f0552.png' },
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'Canva', icon: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/71cb17ff-0686-4a96-ad5f-690c9e7bb069.png' },
    {
      name: 'GitHub',
      icon: isDark
        ? GitHubIconDark
        : 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/07035955-0b17-45f1-8b97-a4939a8fabbe.png'
    },
    { name: 'Dart', icon: DartIcon },
    {
      name: 'ChatGPT',
      icon: isDark
        ? ChatGPTIconDark
        : 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/1d936e9b-bdb2-40f4-bafb-7790fb717a96.png'
    },
  ];

  const categorizedSkills = {
    'Programming': [
      { name: 'HTML', level: 75 },
      { name: 'CSS', level: 70 },
      { name: 'Java', level: 70 },
      { name: 'C', level: 85 },
      { name: 'Embedded C', level: 70 },
      { name: 'C++', level: 85 },
      { name: 'Python', level: 65 },
      { name: 'Flutter', level: 80 },
      { name: 'Dart', level: 85 },
    ],
    'Design Tools': [
      { name: 'Figma', level: 50 },
      { name: 'Photoshop', level: 75 },
      { name: 'Illustrator', level: 50 },
      { name: 'Canva', level: 90 },
      { name: 'Picsart', level: 95 },
      { name: 'Photoroom', level: 75 },
      { name: 'Pixcelcut', level: 85 },
      { name: 'Snapseed', level: 95 },

    ],
    'AI Tools': [
      { name: 'ChatGPT', level: 95 },
      { name: 'Manus', level: 90 },
      { name: 'Sider AI', level: 90 },
      { name: 'Copilot', level: 95 },
      { name: 'BlackBox AI', level: 75 },
      { name: 'Claude', level: 90 },
      { name: 'Lovable AI', level: 80 },
      { name: 'Midjourney', level: 75 },
      { name: 'Sora', level: 95 },
      { name: 'SeaArt', level: 90 },
    ],
    'Other Tools': [
      { name: 'GitHub', level: 80 },
      { name: 'Firebase', level: 60 },
      { name: 'AutoCAD', level: 85 },
      { name: 'MySQL', level: 70 },
    ]
  };

  const expertise = [
    'Mobile APP Development',
    'Web APP Development',
    'Creative Coding',
    'UI/UX Design',
    'Illustration',
    'Prototyping',
    'User Research',
    'Web Design',
    'Graphic Design',
    'Photoshop',
    'Illustrator',
    'Logo Design',
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Designing with Heart, Coding with Vision.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-full mx-auto space-y-8">
          {/* Intro + CV */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* About Me Card */}
            <div className={`lg:col-span-2 bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hello there! I'm Noha Hatem ࿔*˖˚🎀</h3>
              <div className="relative">
                {/* Profile Image */}
                <div className="float-right ml-6 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={ProfileImage}
                          alt="Noha Hatem"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-32 h-32" style={{ shapeOutside: 'circle(50%)', clipPath: 'circle(50%)' }}></div>
                  </div>
                </div>
                {/* About Me */}
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">

                  <p className="mb-4">
                    I design, code, and create meaningful digital experiences that blend creativity, empathy, and clean code. From mobile apps to web solutions, I love turning ideas into something real, functional, and beautiful.
                  </p>
                  <p className="mb-2 text-lg font-bold text-pink-600 dark:text-purple-400">
                    I wear many hats:
                  </p>
                  <p className="mb-4">
                    UI/UX Designer, Flutter Developer, Graphic Designer, Creative Technologist, and Software Engineer — sometimes you might even call me an Artist! 🖌🎨
                  </p>
                  <p className="mb-4">
                    Beyond screens and code, I express myself through handmade art, drawing, coloring, and creative designs, which gives me a unique perspective on every project I take on.
                  </p>
                  <p className="mb-4">
                    Curious, playful, and always open to learning. I enjoy exploring new ideas, experimenting with colors, and turning imagination into reality.
                  </p>
                  <p className="text-center font-semibold italic text-pink-400 dark:text-purple-400 text-20 mt-4">
                    ⟡⋆₊⊹ Designing with Heart, Coding with Vision! ⊹₊⋆⟡
                  </p>
                </div>

              </div>
            </div>

            {/* CV Box */}
            <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm text-center flex flex-col items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
              <svg className="w-16 h-16 text-pink-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My CV</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Click below to view my complete CV</p>
              <a
                href="https://drive.google.com/file/d/10OUO9ReIalTF6I5j7ehFw8a3hV2CW5ZD/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105"
              >
                View CV
              </a>
            </div>
          </div>

          {/* Expertise + Toolbox */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Expertise */}
            <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={item} className="bg-pink-50 dark:bg-purple-900/30 px-4 py-2 rounded-lg text-center">
                    <span className="text-pink-700 dark:text-purple-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toolbox */}
            <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">My Toolbox</h4>
              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-md">
                      <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
            <h4 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Technical Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category}>
                  <h5 className="text-lg font-semibold text-pink-600 dark:text-purple-400 mb-4">{category}</h5>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-sm text-pink-500 dark:text-purple-300">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
