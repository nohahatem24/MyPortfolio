/**
 * Fully Responsive and Visually Appealing About Section.
 * Features mobile-first design, interactive hover effects, and enhanced visual hierarchy.
 * Designed to be a stunning showcase for a Product Designer & Creative Technologist.
 */

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTheme } from '../../hooks/useTheme';
import ProfileImage from '../../assets/images/optimized/nohaidc.png';
import { 
  FileText, 
  Palette, 
  Code, 
  Wrench, 
  PenTool, 
  Sparkles, 
  Bot, 
  GitBranch,
  Users,
  Map
} from 'lucide-react';
import { 
  SiFigma, 
  SiFlutter, 
  SiFirebase, 
  SiGithub, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiCanva,

  SiOpenai, 
  SiDart, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact 
} from 'react-icons/si';

// It's better to use a library like 'react-icons' for SVGs to keep the code clean.
// Example: import { FaRocket, FaToolbox } from 'react-icons/fa';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { isDark } = useTheme();

  const expertise = [
    'Software Engineering', 'Frontend Development', 'Product Strategy & Vision', 'UI/UX Design', 'Creative Technology',
    'Interactive Prototyping', 'User Research & Empathy', 'Mobile App Design', 'Web Design', 'Web Development',
    'Graphic Design & Branding', 'AI-Powered Design', 'Flutter Development', 'Cross-Platform Apps'
  ];

  // First, let's add an interface for the toolbox items
  interface ToolboxItem {
    category: string;
    icon: React.ElementType;
    tools: {
      name: string;
      icon: React.ElementType;
    }[];
  }

  // Then modify the toolbox constant definition
  const toolbox: ToolboxItem[] = [
    {
      category: 'Product Design',
      icon: PenTool,
      tools: [
        { name: 'Figma', icon: SiFigma },
        { name: 'User Personas', icon: Users },
        { name: 'Journey Mapping', icon: Map }
      ]
    },
    {
      category: 'Creative & Visual',
      icon: Palette,
      tools: [
        { name: 'Photoshop', icon: SiAdobephotoshop },
        { name: 'Illustrator', icon: SiAdobeillustrator },
        { name: 'Canva', icon: SiCanva },
        
        { name: 'AI Design', icon: Sparkles }
      ]
    },
    {
      category: 'Development',
      icon: Code,
      tools: [
        { name: 'Flutter', icon: SiFlutter },
        { name: 'Dart', icon: SiDart },
        { name: 'HTML/CSS', icon: SiHtml5 },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact }
      ]
    },
    {
      category: 'General Tools',
      icon: Wrench,
      tools: [
        { name: 'GitHub', icon: SiGithub },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'AI Tools', icon: SiOpenai },
        { name: 'Version Control', icon: GitBranch }
      ]
    }
  ];


  const cvLinks = {
    productDesigner: 'https://drive.google.com/file/d/19XCAqAmdZmovfFGBASAQeNBDpRRH4rJl/view', // Replace with your actual link
    general: 'https://drive.google.com/file/d/193w9Zm_cjFrtnc0eZ2s3fuB8mBGpFD6I/view' // Replace with your actual link
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 bg-[#fffaf5] dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            A Product Designer with an Engineer's mind and an Artist's heart.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Intro + CV */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* About Me Card */}
            <div className={`lg:col-span-2 bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-lg transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                Hello there! I'm Noha <span className="ml-2 text-2xl">࿔*˖˚🎀</span>
              </h3>
              <div className="sm:flex">
                {/* Profile Image - better placement for responsiveness */}
                <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6 float-none sm:float-left">
                  <div className="relative w-32 h-32 mx-auto sm:mx-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                        <img
                          src={ProfileImage}
                          alt="Noha Hatem"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* About Me Text */}
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  <p className="mb-4">
                    I'm a Software Engineer with the heart of a Product Designer. My passion is crafting digital experiences that are not only functional and beautiful but also deeply human and impactful. 
                  </p>
                  <p className="mb-4">
                    My engineering background isn't just a line on my resume; it's the foundation that allows me to turn ambitious visions into elegant, user-centric solutions. I don't just create mockups—I write the code that brings them to life.
                  </p>
                  <p className="mb-2 text-lg font-bold text-pink-600 dark:text-purple-400">
                    My Philosophy:
                  </p>
                  <p className="mb-4">
                    I believe technology should feel like magic. My work is driven by empathy, a love for visual storytelling, and a deep curiosity for how emerging technologies like AI can be used to solve real-world problems. I'm on a mission to build products that feel intuitive, look beautiful, and genuinely enhance our lives.
                  </p>
                </div>
              </div>
            </div>

            {/* --- UPDATED CV Box --- */}
            <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl backdrop-blur-lg text-center flex flex-col items-center justify-center transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <FileText className="w-12 h-12 text-pink-500 dark:text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Résumés</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Choose the version that best fits your needs.
              </p>
              <div className="w-full space-y-4">
                {/* Product Designer CV Button */}
                <a
                  href={cvLinks.productDesigner} // Replace with your actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Product Designer CV
                </a>
                {/* General CV Button */}
                <a
                  href={cvLinks.general} // Replace with your actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/80 dark:bg-gray-700/80 border-2 border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-300 font-bold rounded-full hover:bg-white dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Code className="w-5 h-5 mr-2" />
                  General/Tech CV
                </a>
              </div>
            </div>
          </div>


          {/* Expertise Section */}
          <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl backdrop-blur-lg transition-all duration-1000 ease-in-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Areas of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {expertise.map((item ) => (
                <div key={item} className="bg-pink-50 dark:bg-purple-900/30 px-4 py-2 rounded-full text-center shadow-sm transform hover:-translate-y-1 transition-all duration-200">
                  <span className="text-pink-700 dark:text-purple-300 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Toolbox Section */}
          <div className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl backdrop-blur-lg transition-all duration-1000 ease-in-out delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">My Toolbox</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {toolbox.map((categoryItem) => (
                <div key={categoryItem.category} className="transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl font-semibold text-pink-600 dark:text-purple-400 mb-4 border-b-2 border-pink-200 dark:border-purple-700 pb-2 flex items-center">
                    <categoryItem.icon className="w-5 h-5 mr-3" />
                    {categoryItem.category}
                  </h4>
                  <ul className="space-y-3 mt-4">
                    {categoryItem.tools.map((tool) => (
                      <li key={tool.name} className="text-gray-700 dark:text-gray-300 flex items-center group">
                        <tool.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-pink-500 dark:group-hover:text-purple-400 transition-colors" />
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}