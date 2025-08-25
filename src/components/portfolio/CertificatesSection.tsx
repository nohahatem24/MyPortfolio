/**
 * Certificates section component with modal overlays and pink/purple theme
 * Displays professional certifications with detailed modal views
 */

import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageModal } from '../ui/image-modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface Certificate {
  title: string;
  description: string;
  issuer: string;
  issueDate: string;
  image: string;
  certificateUrl?: string;
}

export default function CertificatesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: 'Google UX Design Professional Certificate',
      description: 'Comprehensive training in user experience design principles, research methods, and prototyping. This course covered the entire UX design process from user research to final prototypes, including accessibility considerations and design systems.',
      issuer: 'Google',
      issueDate: '2023',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/fb87a8b8-394d-4f91-8162-3ecae9ab4d60.jpeg'
    },
    {
      title: 'Flutter Development Bootcamp',
      description: 'Intensive training in building cross-platform mobile applications using Flutter and Dart. Covered state management, API integration, custom widgets, and publishing apps to both iOS and Android app stores.',
      issuer: 'Flutter Academy',
      issueDate: '2022',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/619a07c3-8533-456a-b1e0-1f288b8a9c23.jpg'
    },
    {
      title: 'Firebase for Mobile Development',
      description: 'Advanced techniques for integrating Firebase services including Authentication, Firestore, Realtime Database, Cloud Storage, and Cloud Functions into mobile applications for scalable backend solutions.',
      issuer: 'Google Firebase',
      issueDate: '2022',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/992ec374-e2d0-4be1-87d1-fdd53c00b05d.jpg'
    },
    {
      title: 'Figma Advanced Prototyping',
      description: 'Creating complex, interactive prototypes and design systems in Figma. Learned advanced animation techniques, component variants, auto-layout, and collaborative design workflows.',
      issuer: 'Figma Academy',
      issueDate: '2023',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/60d1eadd-155f-46b8-8690-5586e9591939.jpg'
    },
    {
      title: 'Digital Illustration Masterclass',
      description: 'Advanced techniques for creating expressive digital illustrations and artwork using industry-standard tools. Covered digital painting, vector graphics, color theory, and composition principles.',
      issuer: 'Digital Arts Institute',
      issueDate: '2021',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/535d79b9-0cbe-4d78-b193-0465f27089b3.jpg'
    },
    {
      title: 'AI for Designers Workshop',
      description: 'Leveraging artificial intelligence tools to enhance the creative design process. Explored AI-powered design tools, automated workflows, and ethical considerations in AI-assisted design.',
      issuer: 'Design+AI',
      issueDate: '2023',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/d7ed71fd-079d-445c-a1c9-7d62e4af477c.jpg'
    }
  ];

  return (
    <section 
      id="certificates" 
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my professional certifications, awards, and educational accomplishments.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm group flex flex-col ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${200 + index * 100}ms` 
              }}
            >
              <div className="flex items-start space-x-4 mb-4 flex-1">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full flex-shrink-0">
                  <Award className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-pink-600 dark:text-purple-400 font-semibold text-sm">{cert.issuer}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{cert.issueDate}</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setSelectedCertificate(cert)}
                variant="outline" 
                className="w-full mt-4 border-pink-300 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-50 dark:hover:bg-purple-900/20 bg-transparent transform hover:scale-105 transition-transform"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <ImageModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        image={selectedCertificate?.image || ''}
        title={selectedCertificate?.title || ''}
        description={selectedCertificate?.description || ''}
        details={{
          issuer: selectedCertificate?.issuer,
          issueDate: selectedCertificate?.issueDate
        }}
        actionButton={selectedCertificate?.certificateUrl ? {
          label: 'View Original Certificate',
          onClick: () => window.open(selectedCertificate.certificateUrl, '_blank')
        } : undefined}
      />
    </section>
  );
}
