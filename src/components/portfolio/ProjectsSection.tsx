/**
 * Enhanced Projects section with infinite galleries and links
 * Showcases portfolio projects with detailed modal views, GitHub and website links
 */



import React, { useState } from 'react';
import {
  ExternalLink, Github, Calendar, Users, Target, Globe, Monitor, X, ArrowRight, Layers,
  BrainCircuit, ShieldCheck, Languages, Lock, BarChart, Landmark, Users2, CreditCard, MapPin, Settings, Smartphone
} from 'lucide-react';
import { Button } from '../ui/button';
import { Modal } from '../ui/modal';
import { ImageModal } from '../ui/image-modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { motion, easeOut } from "framer-motion";

//LiteFinance Bank Project - Main Picture
import LiteFinanceProjectMainPic from '../../assets/images/projects/litefinance/LiteFinance.png';

//Main HieroVision Picture
import HieroVisionProjectMainPic from '../../assets/images/projects/hierovision/mainpic.png';
//HieroVision Mobile Pictures
import HieroVisionProjectMobile1 from '../../assets/images/projects/hierovision/mobile1.png';
import HieroVisionProjectMobile2 from '../../assets/images/projects/hierovision/mobile2.png';
import HieroVisionProjectMobile3 from '../../assets/images/projects/hierovision/mobile3.png';
import HieroVisionProjectMobile4 from '../../assets/images/projects/hierovision/mobile4.png';
import HieroVisionProjectMobile5 from '../../assets/images/projects/hierovision/mobile5.png';
import HieroVisionProjectMobile6 from '../../assets/images/projects/hierovision/mobile6.png';
import HieroVisionProjectMobile7 from '../../assets/images/projects/hierovision/mobile7.png';
import HieroVisionProjectMobile8 from '../../assets/images/projects/hierovision/mobile8.png';
import HieroVisionProjectMobile9 from '../../assets/images/projects/hierovision/mobile9.png';
import HieroVisionProjectMobile10 from '../../assets/images/projects/hierovision/mobile10.png';
import HieroVisionProjectMobile11 from '../../assets/images/projects/hierovision/mobile11.png';
import HieroVisionProjectMobile12 from '../../assets/images/projects/hierovision/mobile12.png';
import HieroVisionProjectMobile13 from '../../assets/images/projects/hierovision/mobile13.png';
import HieroVisionProjectMobile14 from '../../assets/images/projects/hierovision/mobile14.png';
import HieroVisionProjectMobile15 from '../../assets/images/projects/hierovision/mobile15.png';
import HieroVisionProjectMobile16 from '../../assets/images/projects/hierovision/mobile16.png';
import HieroVisionProjectMobile17 from '../../assets/images/projects/hierovision/mobile17.png';
import HieroVisionProjectMobile18 from '../../assets/images/projects/hierovision/mobile18.png';
import HieroVisionProjectMobile19 from '../../assets/images/projects/hierovision/mobile19.png';
import HieroVisionProjectMobile20 from '../../assets/images/projects/hierovision/mobile20.png';
import HieroVisionProjectMobile21 from '../../assets/images/projects/hierovision/mobile21.png';
import HieroVisionProjectMobile22 from '../../assets/images/projects/hierovision/mobile22.png';
//HieroVision Kids Pictures
import HieroVisionProjectMobileKids1 from '../../assets/images/projects/hierovision/mobilekids1.png';
import HieroVisionProjectMobileKids2 from '../../assets/images/projects/hierovision/mobilekids2.png';
import HieroVisionProjectMobileKids3 from '../../assets/images/projects/hierovision/mobilekids3.png';
import HieroVisionProjectMobileKids4 from '../../assets/images/projects/hierovision/mobilekids4.png';
import HieroVisionProjectMobileKids5 from '../../assets/images/projects/hierovision/mobilekids5.png';
//HieroVision Website Pictures
import HieroVisionProjectWeb1 from '../../assets/images/projects/hierovision/web1.png';
import HieroVisionProjectWeb2 from '../../assets/images/projects/hierovision/web2.png';
import HieroVisionProjectWeb3 from '../../assets/images/projects/hierovision/web3.png';
import HieroVisionProjectWeb4 from '../../assets/images/projects/hierovision/web4.png';
import HieroVisionProjectWeb5 from '../../assets/images/projects/hierovision/web5.png';
import HieroVisionProjectWeb6 from '../../assets/images/projects/hierovision/web6.png';
import HieroVisionProjectWeb7 from '../../assets/images/projects/hierovision/web7.png';
import HieroVisionProjectWeb8 from '../../assets/images/projects/hierovision/web8.png';
import HieroVisionProjectWeb9 from '../../assets/images/projects/hierovision/web9.png';
import HieroVisionProjectWeb10 from '../../assets/images/projects/hierovision/web10.png';
import HieroVisionProjectWeb11 from '../../assets/images/projects/hierovision/web11.png';
import HieroVisionProjectWeb12 from '../../assets/images/projects/hierovision/web12.png';

//--------------------------------------------------------------------------------------------------
//Dr Basma Mental Care Project - Main Picture
import DrBasmaMainPicture from '../../assets/images/projects/drbasma/DrBasmaMainPicture.png';
//Dr Basma Mental Care Project Pictures - Light Mode
import DrBasmaLight1 from '../../assets/images/projects/drbasma/light1.png';
import DrBasmaLight2 from '../../assets/images/projects/drbasma/light2.png';
import DrBasmaLight3 from '../../assets/images/projects/drbasma/light3.png';
import DrBasmaLight4 from '../../assets/images/projects/drbasma/light4.png';
import DrBasmaLight5 from '../../assets/images/projects/drbasma/light5.png';
import DrBasmaLight6 from '../../assets/images/projects/drbasma/light6.png';
import DrBasmaLight7 from '../../assets/images/projects/drbasma/light7.png';
import DrBasmaLight8 from '../../assets/images/projects/drbasma/light8.png';
import DrBasmaLight9 from '../../assets/images/projects/drbasma/light9.png';
import DrBasmaLight10 from '../../assets/images/projects/drbasma/light10.png';
import DrBasmaLight11 from '../../assets/images/projects/drbasma/light11.png';
import DrBasmaLight12 from '../../assets/images/projects/drbasma/light12.png';
import DrBasmaLight13 from '../../assets/images/projects/drbasma/light13.png';
import DrBasmaLight14 from '../../assets/images/projects/drbasma/light14.png';
import DrBasmaLight15 from '../../assets/images/projects/drbasma/light15.png';
import DrBasmaLight16 from '../../assets/images/projects/drbasma/light16.png';
import DrBasmaLight17 from '../../assets/images/projects/drbasma/light17.png';
import DrBasmaLight18 from '../../assets/images/projects/drbasma/light18.png';
import DrBasmaLight19 from '../../assets/images/projects/drbasma/light19.png';
import DrBasmaLight20 from '../../assets/images/projects/drbasma/light20.png';
import DrBasmaLight21 from '../../assets/images/projects/drbasma/light21.png';
import DrBasmaLight22 from '../../assets/images/projects/drbasma/light22.png';
import DrBasmaLight23 from '../../assets/images/projects/drbasma/light23.png';
import DrBasmaLight24 from '../../assets/images/projects/drbasma/light24.png';
import DrBasmaLight25 from '../../assets/images/projects/drbasma/light25.png';
//Dr Basma Mental Care Project Pictures - Dark Mode
import DrBasmaDark1 from '../../assets/images/projects/drbasma/dark1.png';
import DrBasmaDark2 from '../../assets/images/projects/drbasma/dark2.png';
import DrBasmaDark3 from '../../assets/images/projects/drbasma/dark3.png';
import DrBasmaDark4 from '../../assets/images/projects/drbasma/dark4.png';
import DrBasmaDark5 from '../../assets/images/projects/drbasma/dark5.png';
import DrBasmaDark6 from '../../assets/images/projects/drbasma/dark6.png';
import DrBasmaDark7 from '../../assets/images/projects/drbasma/dark7.png';
import DrBasmaDark8 from '../../assets/images/projects/drbasma/dark8.png';
import DrBasmaDark9 from '../../assets/images/projects/drbasma/dark9.png';
import DrBasmaDark10 from '../../assets/images/projects/drbasma/dark10.png';
import DrBasmaDark11 from '../../assets/images/projects/drbasma/dark11.png';
import DrBasmaDark12 from '../../assets/images/projects/drbasma/dark12.png';
import DrBasmaDark13 from '../../assets/images/projects/drbasma/dark13.png';
import DrBasmaDark14 from '../../assets/images/projects/drbasma/dark14.png';
import DrBasmaDark15 from '../../assets/images/projects/drbasma/dark15.png';
import DrBasmaDark16 from '../../assets/images/projects/drbasma/dark16.png';
import DrBasmaDark17 from '../../assets/images/projects/drbasma/dark17.png';
import DrBasmaDark18 from '../../assets/images/projects/drbasma/dark18.png';
import DrBasmaDark19 from '../../assets/images/projects/drbasma/dark19.png';
import DrBasmaDark20 from '../../assets/images/projects/drbasma/dark20.png';
import DrBasmaDark21 from '../../assets/images/projects/drbasma/dark21.png';
import DrBasmaDark22 from '../../assets/images/projects/drbasma/dark22.png';
import DrBasmaDark23 from '../../assets/images/projects/drbasma/dark23.png';
import DrBasmaDark24 from '../../assets/images/projects/drbasma/dark24.png';
import DrBasmaDark25 from '../../assets/images/projects/drbasma/dark25.png';






interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  mobileGallery?: string[];
  webGallery?: string[];
  features: { title: string; icon: React.ElementType }[];
  challenges: string[];
  results: string[];
  duration: string;
  teamSize: string;
  githubUrl?: string;
  apkUrl?: string;
  websiteUrl?: string;
  presentationUrl?: string;
  role?: string;
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageModalData, setImageModalData] = useState<{
    images: string[];
    title: string;
    description: string;
  } | null>(null);

  const projects: Project[] = [
    {
      title: 'HieroVision',
      category: 'AI-Powered Ed-Tech Platform',
      description: 'An immersive mobile & web app bringing ancient Egyptian culture to life with AI-driven translation and interactive learning.',
      fullDescription: 'HieroVision is an innovative, AI-driven platform that bridges the gap between modern technology and ancient Egyptian culture. Designed as both a mobile and web application, HieroVision allows users of all ages to explore, learn, and interact with the language, history, and heritage of ancient Egypt in a highly engaging way.',
      technologies: ['Flutter', 'Figma', 'FlutterFlow', 'SQLite', 'Dart', 'Canva', 'React.js', 'Node.js', 'RESTful API', 'Flask', 'Python', 'TensorFlow', 'SqueezeNet', 'OpenCV'],
      image: HieroVisionProjectMainPic,
      mobileGallery: [
        //Mobile Pictuers
        HieroVisionProjectMobile1,
        HieroVisionProjectMobile20,
        HieroVisionProjectMobile21,
        HieroVisionProjectMobile7,
        HieroVisionProjectMobile5,
        HieroVisionProjectMobile2,
        HieroVisionProjectMobile3,
        HieroVisionProjectMobile4,
        HieroVisionProjectMobile6,
        HieroVisionProjectMobile8,
        HieroVisionProjectMobile10,
        HieroVisionProjectMobile9,
        HieroVisionProjectMobile14,
        HieroVisionProjectMobile11,
        HieroVisionProjectMobile12,
        HieroVisionProjectMobile13,
        HieroVisionProjectMobile18,
        HieroVisionProjectMobile15,
        HieroVisionProjectMobile16,
        HieroVisionProjectMobile17,
        HieroVisionProjectMobile19,
        HieroVisionProjectMobile22,
        HieroVisionProjectMobileKids1,
        HieroVisionProjectMobileKids2,
        HieroVisionProjectMobileKids3,
        HieroVisionProjectMobileKids4,
        HieroVisionProjectMobileKids5
      ],
      //Website Pictures
      webGallery: [
        HieroVisionProjectWeb1,
        HieroVisionProjectWeb5,
        HieroVisionProjectWeb6,
        HieroVisionProjectWeb3,
        HieroVisionProjectWeb2,
        HieroVisionProjectWeb4,
        HieroVisionProjectWeb12,
        HieroVisionProjectWeb10,
        HieroVisionProjectWeb11,
        HieroVisionProjectWeb8,
        HieroVisionProjectWeb7,
        HieroVisionProjectWeb9,
      ],
      features: [
        { title: 'Hieroglyph Image Scanner & Translator', icon: BrainCircuit },
        { title: 'Text-to-Hieroglyph & Vice Versa Conversion', icon: Languages },
        { title: 'Interactive Landmark Explorer with Real-time Info', icon: MapPin },
        { title: 'Museum & Historical Tours Booking System', icon: Calendar },
        { title: 'Personalized User Profiles & Activity History', icon: Users },
        { title: 'Engaging "Kids Mode" with Games & Stories', icon: Users2 }, // Using a different 'Users' icon for variety
        { title: 'AnubAI – Custom AI-Powered Chatbot Assistant', icon: Monitor },
      ],
      challenges: [
        'Designing a dual UI/UX for both children and academic users.',
        'Integrating complex AI models for real-time image recognition.',
        'Ensuring cultural accuracy while creating an engaging, gamified experience.',
      ],
      results: [
        'Delivered a fully functional, dual-platform application that received an A+ grade.',
        'Created a highly immersive learning tool praised for its innovation and educational value.',
        'Proved the viability of blending advanced AI with cultural heritage preservation.',
      ],
      role:
        `
      <strong class="block mb-2 ml-4">Mobile & Web Development</strong>
      <ul class="list-disc ml-10 mb-4 text-justify">
        <li>Led the development of the mobile application using Flutter.</li>
        <li>Designed the UI/UX for both mobile and web platforms, ensuring a smooth, intuitive, and visually engaging experience.</li>
        <li>Ensured the platform remained modern, accessible, and fun for all users.</li>
      </ul>

      <strong class="block mb-2 ml-4">AI Integration</strong>
      <ul class="list-disc ml-10 mb-4 text-justify">
        <li>Integrated AI tools to enhance content creation, translation, and interactive features.</li>
        <li>Implemented features that made learning more immersive and personalized.</li>
      </ul>

      <strong class="block mb-2 ml-4">Presentation & Visual Design</strong>
      <ul class="list-disc ml-10 text-justify">
        <li>Fully designed and created the entire project presentation.</li>
        <li>Generated all necessary images and videos using AI tools like Sora Extension and SeaArt.</li>
        <li>Customized the theme to make the project unique and professional.</li>
      </ul>
    `,

      duration: '7 months',
      teamSize: '4 people',
      githubUrl: 'https://github.com/nohahatem24/Final-HieroVision-Graduation-Full-Project.git',
      apkUrl: 'https://drive.google.com/file/d/1FfX8CG-apIgtesMyiNCtTQip9AznZ4RY/view?usp=drive_link',
      presentationUrl: 'https://www.canva.com/design/DAGxEkwj3qw/i45eLbOtjaOb9u5lPhJtPg/view?utm_content=DAGxEkwj3qw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcdfea1da54',

    },
    {
      title: 'Dr. Basma Mental Care – Mental Health Platform',
      category: 'UI/UX + Web Development + AI-Assisted Backend',
      description: 'A mental health platform that enables patients to book online therapy sessions, access self-care tools, and track their mental well-being in a secure and user-friendly way.',
      fullDescription: 'Dr. Basma Mental Care is a mental health and therapy platform designed for booking personalized online sessions, tracking mental health progress, and providing self-care tools. This platform was built to offer a secure, user-friendly, and bilingual experience (English & Arabic) for patients seeking mental health support.',
      technologies: ['Canva', 'Photoroom', 'React.js', 'Vite', 'TailwindCSS', 'Node.js (Partial Backend)', 'AI-Assisted Development', 'Express.js', 'RESTful API', 'Supbase (Authentication & Database)', 'Lovable.dev (Deployment)'],
      image: DrBasmaMainPicture,
      //Website Gallery
      webGallery: [
        DrBasmaLight1,
        DrBasmaDark1,
        DrBasmaLight2,
        DrBasmaDark2,
        DrBasmaLight3,
        DrBasmaDark3,
        DrBasmaLight4,
        DrBasmaDark4,
        DrBasmaLight5,
        DrBasmaDark5,
        DrBasmaLight6,
        DrBasmaDark6,
        DrBasmaLight7,
        DrBasmaDark7,
        DrBasmaLight8,
        DrBasmaDark8,
        DrBasmaLight9,
        DrBasmaDark9,
        DrBasmaLight10,
        DrBasmaDark10,
        DrBasmaLight11,
        DrBasmaDark11,
        DrBasmaLight12,
        DrBasmaDark12,
        DrBasmaLight13,
        DrBasmaDark13,
        DrBasmaLight14,
        DrBasmaDark14,
        DrBasmaLight15,
        DrBasmaDark15,
        DrBasmaLight16,
        DrBasmaDark16,
        DrBasmaLight17,
        DrBasmaDark17,
        DrBasmaLight18,
        DrBasmaDark18,
        DrBasmaLight19,
        DrBasmaDark19,
        DrBasmaLight20,
        DrBasmaDark20,
        DrBasmaLight21,
        DrBasmaDark21,
        DrBasmaLight22,
        DrBasmaDark22,
        DrBasmaLight23,
        DrBasmaDark23,
        DrBasmaLight24,
        DrBasmaDark24,
        DrBasmaLight25,
        DrBasmaDark25
      ],
      features: [
        { title: 'Secure Session Booking', icon: Calendar },
        { title: 'Empathetic UI/UX Design', icon: Users },
        { title: 'Bilingual (Ar/En ) Interface', icon: Languages },
        { title: '"MindTrack" Wellness Tool', icon: ShieldCheck },
      ],
      challenges: [
        'Building a UI that conveys trust, safety, and professionalism for a sensitive topic.',
        'Structuring a scalable backend for future features like payments and secure messaging.',
        'Ensuring the design was calming and accessible for users in distress.',
      ],
      results: [
        'Launched a professional, responsive website that strengthened the therapist\'s digital presence.',
        'Designed and implemented a complete design system focused on empathy and clarity.',
        'Built a strong foundation for a full-stack mental health application.',
      ],
      role: `
  <strong class="block mb-2 ml-4">Frontend Development</strong>
  <ul class="list-disc ml-10 mb-4 text-justify">
    <li>Developed the complete frontend using React.js, Vite, and TailwindCSS.</li>
    <li>Ensured a clean, accessible, and professional UI aligned with mental health branding.</li>
    <li>Built responsive layouts for both desktop and mobile experiences.</li>
  </ul>

  <strong class="block mb-2 ml-4">Backend Setup</strong>
  <ul class="list-disc ml-10 mb-4 text-justify">
    <li>Implemented basic user authentication (username and password storage).</li>
    <li>Structured backend APIs for future booking, review, and payment management.</li>
    <li>Used AI-assisted tools to accelerate backend development and testing.</li>
  </ul>

  <strong class="block mb-2 ml-4">UI/UX & Website Design</strong>
  <ul class="list-disc ml-10 text-justify">
    <li>Designed the full website layout and flow with a focus on empathy and trustworthiness for mental health users.</li>
    <li>Created wireframes and prototypes in Figma before implementing with TailwindCSS.</li>
    <li>Built a professional, modern, and bilingual-friendly (English & Arabic) website design.</li>
    <li>Focused on user-friendly navigation and call-to-actions tailored for patients and therapists.</li>
  </ul>
`,
      duration: '2 months',
      teamSize: 'Solo Project',
      websiteUrl: 'https://lovable.dev/projects/92a1247e-da3a-45be-a0e8-3a3098f0bf37',
      githubUrl: 'https://github.com/nohahatem24/dr-basma-mentalcare.git',
    },
    {
      title: 'LiteFinance Bank – Desktop Banking Application',
      category: 'UI/UX + Java + Desktop App Development',
      description: 'A desktop banking application built to manage user accounts, securely track transactions, and provide reliable financial operations with a modern, intuitive UI.',
      fullDescription: 'LiteFinance Bank is a desktop-based banking application developed in Java, aimed at providing users with a secure, efficient, and user-friendly way to manage their financial accounts. The system includes features such as account creation, balance management, money transfers, and transaction history tracking. With a professional interface and practical features, the application serves as a foundation for exploring digital banking solutions in a desktop environment.',
      technologies: ['Java', 'Java Swing', 'OOP (Object-Oriented Programming)', 'MySQL', 'NetBeans IDE'],
      image: LiteFinanceProjectMainPic,

      features: [
        { title: 'Secure User Authentication', icon: Lock },
        { title: 'Interactive Dashboard', icon: BarChart },
        { title: 'Multi-Account Support', icon: Layers },
        { title: 'Transaction History Tracking', icon: Calendar },
        { title: 'Real-time Money Transfer', icon: ArrowRight },
        { title: 'Digital Account Card Display', icon: CreditCard },
        { title: 'Branch Locator', icon: MapPin },
        { title: 'User Profile & Settings', icon: Settings },
      ],
      challenges: [
        'Designing a clean and professional UI using the limitations of Java Swing.',
        'Managing application state and data flow within a desktop environment.',
        'Ensuring usability and security in a finance-focused application.',
        'Coordinating teamwork and distributing tasks across a 3-person team.',
      ],
      results: [
        'Successfully developed a functional and professional desktop banking app.',
        'Applied Java OOP principles in a real-world desktop application project.',
        'Strengthened teamwork and project management skills.',
        'Delivered a strong portfolio piece showcasing desktop app development.',
      ],
      role: `
  <strong class="block mb-2 ml-4">UI/UX & Design</strong>
  <ul class="list-disc ml-10 mb-4 text-justify">
    <li>Designed the complete user interface using Java Swing components.</li>
    <li>Ensured the application had a clean, professional, and finance-oriented look.</li>
    <li>Focused on creating user-friendly navigation and clear layouts.</li>
  </ul>

  <strong class="block mb-2 ml-4">Desktop Development</strong>
  <ul class="list-disc ml-10 mb-4 text-justify">
    <li>Implemented interactive dashboard and account features in Java.</li>
    <li>Collaborated with teammates to structure the application logic and data flow.</li>
    <li>Applied OOP concepts for modular and maintainable code.</li>
  </ul>
  `,
      duration: '3 weeks',
      teamSize: '3 people',
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 bg-[#fffaf5] dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my work, from AI-powered platforms to human-centered design systems.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              setSelectedProject={setSelectedProject} 
              setImageModalData={setImageModalData}
            />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {imageModalData && (
        <ImageModal
          isOpen={!!imageModalData}
          onClose={() => setImageModalData(null)}
          image={imageModalData.images}
          title={imageModalData.title}
          description={imageModalData.description}
        />
      )}
    </section>
  );
}

const ProjectCard = ({ 
  project, 
  setSelectedProject,
  setImageModalData 
}: { 
  project: Project, 
  setSelectedProject: (p: Project) => void,
  setImageModalData: (data: { images: string[], title: string, description: string } | null) => void 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform-gpu transition-all duration-300 hover:shadow-2xl hover:scale-105 aspect-[4/3]"
      onClick={() => setSelectedProject(project)}
    >
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="mb-2 inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
          {project.category}
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-white/80 text-sm lg:text-base">{project.description}</p>
        
        <div className="mt-4 flex gap-2">
          {project.mobileGallery && project.mobileGallery.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageModalData({
                  images: project.mobileGallery!,
                  title: `${project.title} - Mobile Views`,
                  description: 'Mobile application interface and features'
                });
              }}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm transition-all"
            >
              <Smartphone className="w-4 h-4" />
              Mobile Gallery
            </button>
          )}
          
          {project.webGallery && project.webGallery.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageModalData({
                  images: project.webGallery!,
                  title: `${project.title} - Web Views`,
                  description: 'Website interface and features'
                });
              }}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm transition-all"
            >
              <Globe className="w-4 h-4" />
              Web Gallery
            </button>
          )}
        </div>

        <div className="mt-4 opacity-0 group-hover:opacity-100 transform-gpu group-hover:translate-y-0 translate-y-4 transition-all duration-300">
          <span className="font-semibold text-white flex items-center">
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
// --- ProjectModal Component (No changes needed, it's already perfect) ---
const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick} // Add this click handler
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto">
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-md" />
              <div>
                <h3 className="text-xl font-bold text-pink-600 dark:text-purple-400 mb-2">Project Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.fullDescription}</p>
              </div>
              {project.role && (
                <div>
                  <h3 className="text-xl font-bold text-pink-600 dark:text-purple-400 mb-2">My Role</h3>
                  <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: project.role }} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Project Info</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="font-semibold text-gray-600 dark:text-gray-400">Duration:</span> <span className="text-gray-800 dark:text-white">{project.duration}</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-gray-600 dark:text-gray-400">Team:</span> <span className="text-gray-800 dark:text-white">{project.teamSize}</span></div>
                  <div className="flex justify-between"><span className="font-semibold text-gray-600 dark:text-gray-400 right-0">Category:</span> <span className="text-gray-800 dark:text-white">{project.category}</span></div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Key Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <feature.icon className="h-5 w-5 text-pink-500 dark:text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature.title}</span>
                    </li>
                  ))}           </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Project Links</h4>
                <div className="space-y-2">
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:underline"><Github className="mr-2 h-4 w-4" /> View on GitHub</a>}
                  {project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:underline"><Globe className="mr-2 h-4 w-4" /> View Live Site</a>}
                  {project.presentationUrl && <a href={project.presentationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:underline"><Monitor className="mr-2 h-4 w-4" /> View Presentation</a>}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-pink-100 dark:bg-purple-900/30 text-pink-700 dark:text-purple-300 px-2 py-1 rounded text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};