/**
 * FINAL - Fully Responsive and Visually Appealing About Section.
 * Features the CORRECT, AGREED-UPON "Skill Cloud" for Areas of Expertise with staggered animations.
 */

import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useTheme } from "../../hooks/useTheme";
import ProfileImage from "../../assets/images/optimized/nohaidc.png";
import { motion, easeOut } from "framer-motion";

import {
  FileText, Palette, Code, Wrench, PenTool, Sparkles, GitBranch, Users, Map,
} from "lucide-react";
import {
  SiFigma, SiFlutter, SiFirebase, SiGithub, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiOpenai, SiDart, SiHtml5, SiCss3, SiJavascript, SiReact, SiVite, SiTypescript, SiTailwindcss, SiAstro, SiVuedotjs,
} from "react-icons/si";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { isDark } = useTheme();

  // --- القائمة الصحيحة والمحدثة التي اتفقنا عليها ---
  const expertiseItems = [
    "Product Strategy & Vision",
    "End-to-End UI/UX Design",
    "Human-Centered Design",
    "Creative Concept Development",
    "Full-Stack Web Development",
    "Cross-Platform Mobile Apps",
    "Interactive Frontend",
    "AI-Powered Workflow",
    "Rapid Prototyping",
    "Agile & Client Collaboration",
    "Version Control (Git)",
  
  ];

  const toolbox: {
    category: string;
    icon: React.ElementType;
    tools: { name: string; icon: React.ElementType; }[];
  }[] = [
    {
      category: "Development",
      icon: Code,
      tools: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart },
        { name: "HTML/CSS", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Vite", icon: SiVite },
        { name: "Astro", icon: SiAstro },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "JavaScript", icon: SiJavascript },
      ],
    },
    {
      category: "Product Design",
      icon: PenTool,
      tools: [
        { name: "Figma", icon: SiFigma },
        { name: "User Personas", icon: Users },
        { name: "Journey Mapping", icon: Map },
      ],
    },
    {
      category: "Creative & Visual",
      icon: Palette,
      tools: [
        { name: "Photoshop", icon: SiAdobephotoshop },
        { name: "Illustrator", icon: SiAdobeillustrator },
        { name: "Canva", icon: SiCanva },
        { name: "AI Design", icon: Sparkles },
      ],
    },
    {
      category: "General Tools",
      icon: Wrench,
      tools: [
        { name: "GitHub", icon: SiGithub },
        { name: "Firebase", icon: SiFirebase },
        { name: "AI Tools", icon: SiOpenai },
        { name: "Version Control", icon: GitBranch },
      ],
    },
  ];

  const cvLinks = {
      general:
      "https://drive.google.com/file/d/1y91cLZZuUekZ_mpbvfPcPy2uzCZL-oin/view",
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 bg-[#fffaf5] dark:bg-gray-900 transition-colors duration-500"
    >
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            A Product Builder with an Engineer's mind and an Artist's heart.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Intro + CV */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                Hello there! I'm Noha{" "}
                <span className="ml-2 text-2xl">࿔*˖˚🎀</span>
              </h3>
              <div className="sm:flex">
                <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6 float-none sm:float-left">
                  <div className="relative w-32 h-32 mx-auto sm:mx-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                        <img
                          src={ProfileImage}
                          alt="Noha Hatem"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  <p className="mb-4">
                    I'm a Software Developer with the heart of a Product
                    Designer. My passion is crafting digital experiences that
                    are not only functional and beautiful but also deeply human
                    and impactful.
                  </p>
                  <p className="mb-4">
                    My engineering background isn't just a line on my resume;
                    it's the foundation that allows me to turn ambitious visions
                    into elegant, user-centric solutions. I don't just create
                    mockups—I write the code that brings them to life.
                  </p>
                  <p className="mb-2 text-lg font-bold text-pink-600 dark:text-purple-400">
                    My Philosophy:
                  </p>
                  <p className="mb-4">
                    I believe technology should feel like magic. My work is
                    driven by empathy, a love for visual storytelling, and a
                    deep curiosity for how emerging technologies like AI can be
                    used to solve real-world problems. I'm on a mission to build
                    products that feel intuitive, look beautiful, and genuinely
                    enhance our lives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl backdrop-blur-lg text-center flex flex-col items-center justify-center">
              <FileText className="w-12 h-12 text-pink-500 dark:text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Résumé
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Download my general / technical résumé.
              </p>
              <div className="w-full">
                <a
                  href={cvLinks.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* --- FINAL ELEGANT Expertise Section with CORRECTED items --- */}
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl backdrop-blur-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Areas of Expertise
            </h3>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-4"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {expertiseItems.map((item ) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className="bg-pink-50 dark:bg-purple-900/30 px-4 py-2 rounded-full text-center shadow-sm transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-pink-700 dark:text-purple-300 font-medium text-sm sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* My Toolbox Section */}
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-xl backdrop-blur-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              My Toolbox
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {toolbox.map((categoryItem) => (
                <div
                  key={categoryItem.category}
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                  <h4 className="text-xl font-semibold text-pink-600 dark:text-purple-400 mb-4 border-b-2 border-pink-200 dark:border-purple-700 pb-2 flex items-center">
                    <categoryItem.icon className="w-5 h-5 mr-3" />
                    {categoryItem.category}
                  </h4>
                  <ul className="space-y-3 mt-4">
                    {categoryItem.tools.map((tool) => (
                      <li
                        key={tool.name}
                        className="text-gray-700 dark:text-gray-300 flex items-center group"
                      >
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
      </motion.div>
    </section>
  );
}
