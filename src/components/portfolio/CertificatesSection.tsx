import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Clock, X } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import CertifivateHackerRankFrontEndReact from '../../assets/images/FrontendDeveloperReactCertificate.png'
import CertificateAICE from '../../assets/images/CertificateAICE.png';
import CertificateMCSA1 from '../../assets/images/CertificateMCSA1.png';
import CertificateMCSA2 from '../../assets/images/CertificateMCSA2.png';
import CertificateEgyptAir from '../../assets/images/CertificateEgyptAirFlightSimulation.png';
import CertificateEmbedded from '../../assets/images/CertificateEmbedded.png';
import CertificatePython from '../../assets/images/CertificatePython.png';
import CetrificateAccounting from '../../assets/images/CertificateAccounting.png';


interface Certificate {
  title: string;
  description: string;
  issuer: string;
  issueDate: string;
  duration?: string;
  images: string[];
  certificateUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: "Frontend Developer (React)",
    description:
    "Successfully passed the HackerRank certification test for Frontend Developer (React).",
    issuer: "HackerRank",
    issueDate: "December 21, 2025",
    duration: "1 hour test",
    images: [CertifivateHackerRankFrontEndReact],
  },
  {
    title: "AICE | AI Career Essentials",
    description:
      "Completed an intensive program focused on building future-ready skills in Artificial Intelligence and career development. The course combined hands-on training with leading AI tools (ChatGPT, Claude, Gemini, Copilot, Firefly, Udio, Wix AI, and others) while emphasizing <strong>practical application in real-world scenarios.",
    issuer: "ALX Africa",
    issueDate: "September 24, 2024",
    duration: "6 weeks",
    images: [CertificateAICE],
  },
  {
    title: "Embedded Systems",
    description:
      "Professional, hands-on diploma focused on embedded systems design based on AVR, development, and testing, recommended by national universities and industry leaders. The program combined theoretical knowledge with extensive practical labs and concluded with a graduation project evaluated by an industry committee.",
    issuer: "IMT Institute",
    issueDate: "September 11, 2024",
    duration: "7 months",
    images: [CertificateEmbedded],
  },
  {
    title: "MCSA Programming",
    description:
      "An intensive, hands-on training program covering core Microsoft server technologies, system administration, and enterprise network management. The course combined theory with practical application through real-world labs and project assessments.",
    issuer: "Engovation (Certified by Egyptian Engineers Syndicate)",
    issueDate: "September 1, 2024",
    duration: "8 weeks",
    images: [CertificateMCSA1, CertificateMCSA2],
  },
  {
    title: "Python Programming",
    description:
      "Successfully completed a practical introduction to Python programming through MaharaTech, the e-learning platform of the Information Technology Institute (ITI). The course provided a solid foundation in core programming concepts, focusing on <strong>writing clean, efficient code and applying logical problem-solving techniques.",
    issuer: "MaharaTech | ITI",
    issueDate: "May 27, 2024",
    duration: "1 hour, 38 minutes | Self-paced",
    images: [CertificatePython],
  },
  {
    title: "Financial Accounting: Foundations",
    description:
      "Successfully completed a foundational course in financial accounting that provided both theoretical knowledge and practical applications of accounting principles.",
    issuer: "University of Illinois at Urbana-Champaign | Coursera",
    issueDate: "Nov 25, 2022",
    duration: "4 weeks",
    images: [CetrificateAccounting],
  },
  {
    title: "EgyptAir Flight Simulation",
    description:
      "A specialized training program focused on the engineering and technical systems behind flight simulation and aviation operations. The course emphasized both electrical and communication systems within simulators, bridging aviation technology with engineering applications.",
    issuer: "EgyptAir Training Academy",
    issueDate: "July 28, 2022",
    duration: "4 weeks",
    images: [CertificateEgyptAir],
  },
];

const CertificateCard: React.FC<{
  certificate: Certificate;
  onClick: () => void;
}> = ({ certificate, onClick }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as unknown as any } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
        <img
          src={certificate.images[0]}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 truncate group-hover:text-pink-600 dark:group-hover:text-purple-400 transition-colors">
          {certificate.title}
        </h3>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">{certificate.issuer}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span>{certificate.issueDate}</span>
          </div>
          {certificate.duration && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1.5" />
              <span>{certificate.duration}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificateModal = ({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex items-start justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center">
            <Award className="h-6 w-6 text-pink-500 dark:text-purple-400 mr-3" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {certificate.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {certificate.issuer}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="w-full">
            {certificate.images.map((img, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <img
                  src={img}
                  alt={`${certificate.title} - Page ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="p-6 space-y-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Calendar className="h-4 w-4 mr-2 text-pink-500 dark:text-purple-500" />
                <strong>Issued:</strong>
                <span className="ml-1.5">{certificate.issueDate}</span>
              </div>
              {certificate.duration && (
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Clock className="h-4 w-4 mr-2 text-pink-500 dark:text-purple-500" />
                  <strong>Duration:</strong>
                  <span className="ml-1.5">{certificate.duration}</span>
                </div>
              )}
            </div>

            <div
              className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: certificate.description }}
            />

            {certificate.certificateUrl && (
              <div className="pt-4">
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Original Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CertificatesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="certificates"
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
            Certificates & Learning Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my commitment to continuous growth and professional development.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              certificate={cert}
              onClick={() => setSelectedCertificate(cert)}
            />
          ))}
        </motion.div>
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
