/**
 * Enhanced Projects section with infinite galleries and links
 * Showcases portfolio projects with detailed modal views, GitHub and website links
 */

import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Target, Globe, Monitor } from 'lucide-react';
import { Button } from '../ui/button';
import { Modal } from '../ui/modal';
import { ImageModal } from '../ui/image-modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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
import DrBasmaMainPicture from '../../assets/images/projects/drbasma/DrBasmaMainPicture.jpg';
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
  features: string[];
  challenges: string[];
  results: string[];
  duration: string;
  teamSize: string;
  githubUrl?: string;
  websiteUrl?: string;
  presentationUrl?: string;
  role?: string;
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageModalData, setImageModalData] = useState<{ images: string[], title: string, description: string } | null>(null);

  const projects: Project[] = [
    {
      title: 'HieroVision - Mobile/Web Application',
      category: 'UI/UX + Flutter + Mobile App + Web App + AI Integration',
      description: 'An AI-powered mobile & web platform that brings ancient Egyptian language and culture to life through interactive learning, hieroglyph translation, and immersive educational tools.',
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
        'Hieroglyph image scanner & translator',
        'Text-to-hieroglyph and hieroglyph-to-text conversion',
        'Landmark explorer with real-time cultural information', 'Booking system for museums and historical tours',
        'Personalized user profiles with activity history',
        'Engaging "Kids Mode" with coloring, games, and interactive stories',
        'AnubAI – custom AI-powered chatbot assistant'
      ],

      challenges: [
        'Designing an intuitive UI/UX for both children and adults',
        'Integrating AI models for image recognition and translation',
        'Ensuring accessibility for users with different needs',
        'Ensuring interactive educational content is engaging and accurate',
        'Synchronizing mobile and web platforms for consistent user experience',
        'Balancing cultural accuracy with gamified and fun learning features'
      ],
      results: [
        'Successfully delivered a fully functional mobile and web platform',
        'Created an immersive learning experience for users of all ages',
        'Enhanced cultural engagement through interactive and AI-driven features',
        'Strengthened UI/UX design skills and AI integration experience',
        'Project became a showcase of blending technology, AI, education, and heritage'
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
        'Homepage with mental health insights and quick access to sessions',
        'Doctor profile with biography, certifications, and patient trust indicators',
        'Appointment booking system with calendar and time slot selection',
        'Flexible session durations and pricing options',
        'Patient reviews and feedback system',
        'MindTrack tool for mood tracking, journaling, and emotional well-being insights',
        'Guided breathing and self-care exercises for relaxation',
        'Responsive UI for both desktop and mobile devices',
        'AI-assisted backend structure for authentication and future scalability'
      ],
      challenges: [
        'Building a professional medical-focused UI/UX with empathy-driven design',
        'Implementing a functional booking system with dynamic slots',
        'Partial backend integration – limited to authentication (username and password)',
        'Database connection for saving patient data and sessions not fully functional',
        'Payment system flows require secure validation and wallet integration',
        'User authentication and authorization system needs further development',
        'Secure payment integration and wallet functionality require further work',
      ],
      results: [
        'Delivered a polished and professional website for a practicing therapist',
        'Implemented a responsive and accessible frontend with React + TailwindCSS',
        'Created a strong portfolio piece showcasing both frontend and backend integration skills',
        'Strengthened UI/UX design skills for medical and mental health platforms',
        'Laid the foundation for future full-stack development and secure healthcare platforms'
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
      technologies: ['Java', 'Java Swing', 'OOP (Object-Oriented Programming)', 'MySQL (Database Planned)', 'NetBeans IDE'],
      image: LiteFinanceProjectMainPic,

      features: [
        'Secure user login and account authentication',
        'Interactive dashboard showing account balance and details',
        'Support for multiple accounts with different account types',
        'Transaction history tracking with date and type filters',
        'Money transfer between accounts with real-time balance updates',
        'Digital account card display with account number and expiry',
        'Branch locator and information display',
        'User profile, privacy, and notification settings',
        'Responsive desktop design with clean UI layouts'
      ],
      challenges: [
        'Designing a clean and professional UI using Java Swing components',
        'Managing state and data flow within a desktop environment',
        'Planning scalable database integration for account and transaction data',
        'Ensuring usability and security in a finance-focused desktop app',
        'Coordinating teamwork and distributing tasks across a 3-person team'
      ],
      results: [
        'Successfully developed a functional and professional desktop banking app',
        'Created a polished and user-friendly design tailored for finance users',
        'Applied Java OOP principles in a real-world desktop application project',
        'Strengthened teamwork skills through collaboration on a software project',
        'Delivered a strong portfolio piece showcasing desktop app development skills'
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
    {
      title: 'Eco Tracker',
      category: 'Web App',
      description: 'A dashboard that helps users monitor and reduce their environmental impact through daily habits.',
      fullDescription: 'An environmental impact tracking application that helps users understand and reduce their carbon footprint through daily habit tracking, personalized recommendations, and community challenges.',
      technologies: ['React', 'Chart.js', 'Express.js', 'MongoDB'],
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/79cf072e-15f1-4115-9e79-7f8d6eb12037.jpg',
      webGallery: [
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/e4278bef-f340-485a-b2da-f23b438e41e4.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/3bf7da9e-0e0f-4d1f-997b-6e687b0be09b.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/6dc16ba4-cfaa-496a-8fff-c5fa8b6f6dcb.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/59550143-c117-47e2-8d96-a41f6bf9797f.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/7256bdc6-6e20-4672-9061-f5dd8c8ad320.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/cdee776c-7981-4a42-8794-5376610ae859.jpg'
      ],
      features: [
        'Carbon footprint calculation',
        'Daily habit tracking',
        'Environmental impact visualization',
        'Community challenges',
        'Personalized eco-tips',
        'Progress sharing'
      ],
      challenges: [
        'Accurately calculating carbon footprints',
        'Creating engaging data visualizations',
        'Building a motivating user experience'
      ],
      results: [
        '2000+ active users tracking habits',
        'Average 30% reduction in carbon footprint',
        'Winner of local sustainability hackathon'
      ],

      duration: '5 months',
      teamSize: '4 people',
      githubUrl: 'https://github.com/nohahatem24/eco-tracker',
      websiteUrl: 'https://eco-tracker-demo.com'
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my UI/UX designs, Flutter applications, and creative tech projects that solve real problems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section with Category */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {/* Hover Overlay with View Details */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/90 text-gray-900 hover:bg-white transform hover:scale-105 transition-transform"
                  >
                    View Details
                  </Button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      onClick={() => setSelectedProject(project)}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      onClick={() => setSelectedProject(project)}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Full Details Button */}
                <Button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90"
                >
                  View Full Details
                </Button>

                {/* Links Section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-1" /> Code
                    </Button>
                  )}
                  {project.websiteUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.websiteUrl, '_blank')}
                      className="border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                    >
                      <Globe className="h-4 w-4 mr-1" /> Live
                    </Button>
                  )}
                  {project.presentationUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.presentationUrl, '_blank')}
                      className="border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                    >
                      <Monitor className="h-4 w-4 mr-1" /> Presentation
                    </Button>
                  )}
                </div>

                {/* Gallery Buttons */}
                {project.mobileGallery && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mb-2 w-full border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20"
                    onClick={() => setImageModalData({ images: project.mobileGallery!, title: project.title + ' (Mobile)', description: 'Mobile Screenshots' })}
                  >
                    View Mobile Screens
                  </Button>
                )}
                {project.webGallery && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20"
                    onClick={() => setImageModalData({ images: project.webGallery!, title: project.title + ' (Website)', description: 'Website Screenshots' })}
                  >
                    View Website Screens
                  </Button>
                )}
              </div>
            </div>

          ))}
        </div>


        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">Back to Top</Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
            {/* Main Project Image */}
            <div className="w-full flex justify-center">
              <div className="max-w-full max-h-[80vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>



            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-pink-600 dark:text-purple-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Duration</div>
                  <div className="text-gray-600 dark:text-gray-300">{selectedProject.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-pink-600 dark:text-purple-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Team Size</div>
                  <div className="text-gray-600 dark:text-gray-300">{selectedProject.teamSize}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-pink-600 dark:text-purple-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Category</div>
                  <div className="text-gray-600 dark:text-gray-300">{selectedProject.category}</div>
                </div>
              </div>
            </div>


            {/* Project Overview */}
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">Project Overview</div>
              <div className="text-gray-600 dark:text-gray-300 text-justify" dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} />
            </div>

            {/* Full Technologies Used*/}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-4 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-50 dark:bg-purple-900/30 text-pink-700 dark:text-purple-300 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            <div>
              <h4 className="text-lg font-semibold text-pink-500 dark:text-purple-400 mt-4 mb-2">Features</h4>
              <ul className="list-disc list-outside pl-6 text-gray-600 dark:text-gray-300 text-justify">
                {selectedProject.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-pink-500 dark:text-purple-400 mt-4 mb-2">Challenges</h4>
              <ul className="list-disc list-outside pl-6 text-gray-600 dark:text-gray-300 text-justify">
                {selectedProject.challenges.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-pink-500 dark:text-purple-400 mt-4 mb-2">Results</h4>
              <ul className="list-disc list-outside pl-6 text-gray-600 dark:text-gray-300 text-justify">
                {selectedProject.results.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            {selectedProject.role && (
              <div>
                <h4 className="text-lg font-semibold text-pink-500 dark:text-purple-400 mt-4 mb-2">My Role</h4>
                <div className="list-disc list-outside pl-6 text-gray-600 dark:text-gray-300 text-justify" dangerouslySetInnerHTML={{ __html: selectedProject.role }} />
              </div>
            )}



          </div>
        )}
      </Modal>

      {/* Image Modal */}
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