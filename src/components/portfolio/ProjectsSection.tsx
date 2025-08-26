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
      category: 'UI/UX + Flutter + React.js',
      description: 'An AI-powered mobile & web platform that brings ancient Egyptian language and culture to life through interactive learning, hieroglyph translation, and immersive educational tools.',
      fullDescription: 'HieroVision is an innovative, AI-driven platform that bridges the gap between modern technology and ancient Egyptian culture. Designed as both a mobile and web application, HieroVision allows users of all ages to explore, learn, and interact with the language, history, and heritage of ancient Egypt in a highly engaging way.',
      technologies: ['Flutter', 'SQLite', 'Figma', 'Dart', 'Canva', 'React.js', 'Node.js', 'RESTful API', 'Flask', 'Python', 'TensorFlow', 'SqueezeNet', 'OpenCV'],
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
      title: 'E-Learning Platform',
      category: 'Web Design',
      description: 'A comprehensive learning management system with intuitive navigation and engaging UI.',
      fullDescription: 'A modern e-learning platform designed for universities and educational institutions. The platform supports course management, student progress tracking, interactive content, and real-time collaboration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/d8e2cc02-3c78-4c0c-ac8a-197e27b11d8b.jpg',
      webGallery: [
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/7bb35020-3861-46d3-9155-f1d68f438b8b.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/6ae860f0-244b-4e9d-b8e9-7039457e4f9a.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/0e9cc5a8-b83c-4c2a-b9fe-61a71f26dde3.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/c4e0d73e-7fbb-4610-bb06-4d74e03392b1.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/f42436f2-df9d-4e4c-8d3d-9450e5695b71.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/674da1be-49df-40fa-96f4-9f02c469095e.jpg'
      ],
      features: [
        'Interactive course content',
        'Real-time video conferencing',
        'Assignment submission system',
        'Grade tracking and analytics',
        'Discussion forums',
        'Mobile-responsive design'
      ],
      challenges: [
        'Handling large file uploads efficiently',
        'Implementing scalable video streaming',
        'Creating accessible interfaces for diverse users'
      ],
      results: [
        '60% increase in student engagement',
        'Reduced course completion time by 25%',
        'Adopted by 5 educational institutions'
      ],
      duration: '6 months',
      teamSize: '5 people',
      websiteUrl: 'https://elearning-platform-demo.com'
    },
    {
      title: 'Recipe Finder',
      category: 'Mobile App',
      description: 'A Flutter app that helps users discover recipes based on ingredients they already have.',
      fullDescription: 'An intelligent recipe discovery app that uses AI to suggest recipes based on available ingredients, dietary preferences, and cooking skill level. Features include meal planning, shopping lists, and nutritional information.',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Spoonacular API'],
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/e1d1e944-d3d0-4695-bce0-bb57381b5934.jpg',
      webGallery: [
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/d5454560-7452-4209-baca-be3a9e1474b1.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/2fa20331-bb39-4765-87a7-866f6ca9b8df.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/757c6139-56f1-42eb-b19e-bd34424d68f3.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/518d093f-99d4-4068-8013-fc3c56c269e5.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/3174fee3-33b1-4b3f-a01e-ae7f1dfc0bec.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/ae6b59ae-cf23-47bf-8522-3ea84aeaa2d1.jpg'
      ],
      features: [
        'AI-powered recipe suggestions',
        'Ingredient-based search',
        'Meal planning calendar',
        'Shopping list generation',
        'Nutritional information',
        'Recipe reviews and ratings'
      ],
      challenges: [
        'Implementing accurate ingredient recognition',
        'Optimizing app performance with large recipe databases',
        'Creating an intuitive recipe filtering system'
      ],
      results: [
        '10K+ downloads in first month',
        '4.6/5 app store rating',
        'Featured in App Store food & drink category'
      ],
      duration: '3 months',
      teamSize: '2 people',
      githubUrl: 'https://github.com/nohahatem24/recipe-finder'
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
          <div className="space-y-6">
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