/**
 * Enhanced Projects section with infinite galleries and links
 * Showcases portfolio projects with detailed modal views, GitHub and website links
 */

import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Target, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Modal } from '../ui/modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  gallery: string[];
  features: string[];
  challenges: string[];
  results: string[];
  duration: string;
  teamSize: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Wellness App',
      category: 'UI/UX + Flutter',
      description: 'A mindfulness and wellness application designed to help users track their mental health journey.',
      fullDescription: 'A comprehensive wellness application that combines mindfulness practices, mood tracking, and personalized recommendations to help users maintain their mental health. The app features guided meditations, progress tracking, and community support.',
      technologies: ['Flutter', 'Firebase', 'Figma', 'Dart'],
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/6a72cd1e-c030-4c72-885b-f32fb7a6b01a.png',
      gallery: [
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/2248be02-10d0-4cc6-91d7-ce8d1a1349fc.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/d3343149-c3ec-4d12-a426-c6cb2d81bdbc.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/9f22f929-aa81-4f5f-a332-88dae5bac89e.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/4b06bda2-0f3c-4b04-ba2c-b4269385bc88.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/977420be-4f55-4548-964d-d6d55c0369e0.jpg',
        'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/4298635e-c619-413e-8b4d-1be53adf1592.jpg'
      ],
      features: [
        'Guided meditation sessions',
        'Mood tracking and analytics',
        'Personalized wellness recommendations',
        'Community support forums',
        'Progress tracking and goals',
        'Dark mode support'
      ],
      challenges: [
        'Creating an intuitive UX for sensitive mental health data',
        'Implementing real-time data synchronization',
        'Ensuring accessibility for users with different needs'
      ],
      results: [
        '85% user retention rate after 30 days',
        '4.8/5 average app store rating',
        'Featured in Google Play wellness category'
      ],
      duration: '4 months',
      teamSize: '3 people',
      githubUrl: 'https://github.com/nohahatem24/wellness-app',
      websiteUrl: 'https://wellness-app-demo.com'
    },
    {
      title: 'E-Learning Platform',
      category: 'Web Design',
      description: 'A comprehensive learning management system with intuitive navigation and engaging UI.',
      fullDescription: 'A modern e-learning platform designed for universities and educational institutions. The platform supports course management, student progress tracking, interactive content, and real-time collaboration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/d8e2cc02-3c78-4c0c-ac8a-197e27b11d8b.jpg',
      gallery: [
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
      gallery: [
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
      gallery: [
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
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my UI/UX designs, Flutter applications, and creative tech projects that solve real problems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/90 text-gray-900 hover:bg-white transform hover:scale-105 transition-transform"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-pink-50 dark:bg-purple-900/30 text-pink-700 dark:text-purple-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-2 mb-4">
                  {project.githubUrl && (
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.websiteUrl && (
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.websiteUrl, '_blank')}
                      className="border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                  )}
                </div>
                
                <Button 
                  onClick={() => setSelectedProject(project)}
                  variant="outline" 
                  className="w-full border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
            View All Projects
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-8">
            {/* Project Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="md:col-span-2 lg:col-span-2">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {selectedProject.gallery.slice(0, 4).map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Show remaining gallery images */}
            {selectedProject.gallery.length > 4 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedProject.gallery.slice(4).map((img, index) => (
                  <img 
                    key={index + 4}
                    src={img} 
                    alt={`${selectedProject.title} screenshot ${index + 5}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* Project Info */}
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

            {/* Description */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="bg-pink-50 dark:bg-purple-900/30 text-pink-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Features</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 dark:bg-purple-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Results */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Challenges</h4>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Results</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      ✓ {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {selectedProject.websiteUrl && (
                <Button 
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                  onClick={() => window.open(selectedProject.websiteUrl, '_blank')}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Live Demo
                </Button>
              )}
              {selectedProject.githubUrl && (
                <Button 
                  variant="outline"
                  className="border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent"
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
