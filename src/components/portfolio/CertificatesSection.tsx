import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageModal } from '../ui/image-modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
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

export default function CertificatesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: 'AI Career Essentials (AICE)',
      description: `
        <p>Completed an intensive program focused on building future-ready skills in <strong>Artificial Intelligence and career development</strong>. 
        The course combined hands-on training with leading AI tools 
        (ChatGPT, Claude, Gemini, Copilot, Firefly, Udio, Wix AI, and others) while emphasizing <strong>practical application in real-world scenarios</strong>.</p>

        <p style="margin-top: 16px; font-weight: 600;">Key Highlights:</p>
        <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
          <li>Gained proficiency in AI-powered productivity, creativity, and problem-solving.</li>
          <li>Developed strong <strong>prompt engineering</strong> skills for optimizing AI tool usage.</li>
          <li>Applied AI in <strong>content creation, research, design, and workflow automation</strong>.</li>
          <li>Enhanced professional readiness: <strong>CV optimization, personal branding, and job search strategies</strong> using AI.</li>
          <li>Designed to suit both technical and non-technical learners, fostering innovation, adaptability, and entrepreneurial thinking.</li>
        </ul>

        <p style="margin-top: 16px; font-weight: 600;">Outcome:</p>
        <p> Developed essential skills in leveraging <strong>AI tools and strategies</strong> to enhance productivity, creativity, and professional growth. Strengthened adaptability, problem-solving, and innovation capabilities, building a solid foundation to thrive in an <strong>AI-driven workplace.</strong></p>
      `,
      issuer: 'ALX Africa',
      issueDate: 'September 24, 2024',
      duration: '6 weeks',
      images: [CertificateAICE]
    },
    {
      title: 'Embedded Systems Diploma (AVR)',
      description: `
  <p>A professional, hands-on diploma focused on <strong>embedded systems design, development, and testing</strong>, recommended by national universities and industry leaders. The program combined <strong>theoretical knowledge with extensive practical labs</strong> and concluded with a <strong>graduation project</strong> evaluated by an industry committee.</p>

  <p style="margin-top: 16px; font-weight: 600;">Key Learning Areas:</p>
  <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
    <li><strong>C Programming for Embedded Systems:</strong> Data structures, pointers, memory management, algorithms, and preprocessing.</li>
    <li><strong>Embedded Systems Concepts:</strong> Processor architectures, memory types, system architecture, and microcontroller suppliers.</li>
    <li><strong>Interfacing & Drivers Development:</strong> Digital and analog I/O, timers, interrupts, ADC/DAC, sensors, actuators, LCDs, motors, and communication protocols (UART, SPI, I2C).</li>
    <li><strong>Real-Time Operating Systems (RTOS):</strong> Scheduling techniques, inter-task communication, and porting FreeRTOS on AVR.</li>
    <li><strong>Testing & Validation:</strong> Unit, integration, and validation testing with white-box and black-box techniques.</li>
    <li><strong>Tooling & Development Flow:</strong> Linker scripts, startup code, bootloaders, makefiles, and automation scripting.</li>
    <li><strong>Automotive Bus Technology:</strong> CAN and LIN protocol fundamentals.</li>
    <li><strong>Soft Skills:</strong> CV writing, interviewing, presentation, and professional communication.</li>
  </ul>

  <p style="margin-top: 16px; font-weight: 600;">Outcome:</p>
  <p>Gained strong expertise in <strong>embedded system development, hardware-software integration, and real-time OS implementation</strong>, supported by practical project experience and professional readiness for careers in <strong>embedded systems, IoT, and automotive engineering</strong>.</p>
`,
      issuer: 'IMT School',
      issueDate: 'September 11, 2024',
      duration: '24 weeks - (168 Hours | 6 months)',
      images: [CertificateEmbedded]
    },
    {
      title: 'Microsoft Certified Systems Administrator (MCSA) Training',
      description: `
        <p>An intensive, hands-on training program covering <strong>core Microsoft server technologies, system administration, and enterprise network management</strong>. The course combined theory with practical application through real-world labs and project assessments.</p>

        <p style="margin-top: 16px;">
          <strong>Grade:</strong> Excellent
        </p>

        <p style="margin-top: 16px; font-weight: 600;">Key Learning Areas:</p>
        <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
          <li><strong>Networking Fundamentals:</strong> OSI layers, subnetting, IPv6</li>
          <li><strong>Virtualization & OS Setup:</strong> VMware labs, Windows 10 & Windows Server 2016 installation and configuration</li>
          <li><strong>Active Directory Administration:</strong> Domain setup, user/group management, permissions, quotas, and folder management</li>
          <li><strong>File Sharing & Group Policy:</strong> GPO creation, enforcement, caching, and folder redirection</li>
          <li><strong>Network Services Management:</strong> DNS, DHCP (including user classes), WDS, and WSUS configuration</li>
          <li><strong>Security & Maintenance:</strong> Patch management, program installation, backup, and recovery strategies</li>
        </ul>

        <p style="margin-top: 16px; font-weight: 600;">Hands-on Projects & Assignments:</p>
        <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
          <li>Built and administered an <strong>Active Directory environment</strong> with users, groups, and home folders</li>
          <li>Configured <strong>GPOs, permissions, and quotas</strong> to enforce security policies</li>
          <li>Deployed and managed <strong>DNS, DHCP, WDS, and WSUS servers</strong></li>
          <li>Troubleshot server and network issues in simulated enterprise setups</li>
          <li><strong>Capstone Project:</strong> Full end-to-end enterprise system setup, management, and evaluation</li>
        </ul>

        <p style="margin-top: 16px; font-weight: 600;">Outcome:</p> 
        <p> Graduated with an <strong>Excellent Grade</strong>, gaining strong proficiency in 
        <strong>Windows Server system administration, network services, and enterprise IT infrastructure management</strong> — well-prepared for real-world roles in 
        <strong>IT support, systems administration, and network management</strong>.</p>
      `,
      issuer: 'Engovation (Certified by Egyptian Engineers Syndicate)',
      issueDate: 'September 2, 2024',
      duration: '8 weeks - (60 Hours)',
      images: [CertificateMCSA1, CertificateMCSA2]
    },
    {
      title: 'Python Programming Basics',
      description: `
  <p style="margin-top: 16px; font-weight: 600;">Description</p>
  <p>Successfully completed a practical introduction to <strong>Python programming</strong> through MaharaTech, the e-learning platform of the Information Technology Institute (ITI). The course provided a solid foundation in <strong>core programming concepts</strong>, focusing on <strong>writing clean, efficient code</strong> and <strong>applying logical problem-solving techniques.</strong></p>

  <p style="margin-top: 16px; font-weight: 600;">Key Learnings:</p>
  <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
    <li>Gained proficiency in Python syntax, variables, and data types</li>
    <li>Applied control structures such as conditional statements and loops</li>
    <li>Built and used functions for modular programming</li>
    <li>Worked with fundamental data structures including lists, tuples, and dictionaries</li>
    <li>Developed simple, functional Python scripts as a basis for further applications</li>
  </ul>

  <p style="margin-top: 16px; font-weight: 600;">Outcome:</p>
  <p>Acquired the essential skills to begin <strong>developing Python programs</strong> and laid the groundwork for advancing into areas such as <strong>automation, data analysis, and software development.</strong></p>
`,
      issuer: 'MaharaTech - Information Technology Institute (ITI)',
      issueDate: 'May 27, 2024',
      duration: '1 hour 38 minutes | Self-Paced',
      images: [CertificatePython]
    },
    {
      title: 'Financial Accounting: Foundations',
      description: `
  <p style="margin-top: 16px; font-weight: 600;">Description</p>
  <p>Successfully completed a <strong>foundational course in financial accounting</strong> that provided both <strong>theoretical knowledge</strong> and <strong>practical applications of accounting principles.</strong> 
  
  <p style="margin-top: 16px; font-weight: 600;">The course covered:</p>
  <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
    <li>Understanding the role and users of accounting information in capital markets</li>
    <li>Recording and coding financial transactions and preparing the three main financial statements: <strong>Balance Sheet, Income Statement, and Cash Flow Statement</strong></li>
    <li>Applying <strong>accrual accounting</strong> and core accounting concepts such as conservatism and matching principles</li>
    <li>Analyzing <strong>revenue recognition</strong> criteria and its impact on financial statements</li>
    <li>Accounting for <strong>short-term assets</strong>, including accounts receivables and inventories, with emphasis on valuation and managerial decision-making</li>
  </ul>

  <p style="margin-top: 16px; font-weight: 600;">Key Skills Gained:</p>
  <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
    <li>Financial Statement Preparation <strong>(Balance Sheet, Income Statement, Cash Flow)</strong></li>
    <li>Generally Accepted Accounting Principles <strong>(GAAP)</strong></li>
    <li>Accrual Accounting & Revenue Recognition</li>
    <li>Accounts Receivable & Inventory Management</li>
    <li>Financial Information Analysis</li>
  </ul>

  <p style="margin-top: 16px; font-weight: 600;">Outcome:</p>
  <p>This course <strong>strengthened my ability to interpret</strong> and <strong>prepare financial data</strong>, equipping me with <strong>practical accounting skills</strong> relevant for <strong>business decision-making, reporting, and financial analysis.</strong></p>
`,
      issuer: 'University of Illinois at Urbana-Champaign – Coursera',
      issueDate: 'November 25, 2022',
      duration: '4 weeks - (12 Hours)',
      images: [CetrificateAccounting]
    },
    {
      title: 'Flight Simulation Traning',
      description: `
  <p>A specialized training program focused on the <strong>engineering and technical systems behind flight simulation and aviation operations</strong>. The course emphasized both <strong>electrical and communication systems</strong> within simulators, bridging aviation technology with engineering applications.</p>

  <p style="margin-top: 16px;">
    <strong>Grade:</strong> Excellent
  </p>

  <p style="margin-top: 16px; font-weight: 600;">Key Learning Areas:</p>
  <ul style="margin-left: 32px; list-style-type: disc; font-size: 0.9rem;">
    <li><strong>Avionics & Communication Systems:</strong> Understanding aircraft communication networks, navigation aids, and control signal flows.</li>
    <li><strong>Electrical & Power Systems:</strong> Exposure to simulator electrical infrastructure, backup power systems, and energy reliability in aviation technology.</li>
    <li><strong>Simulation Technology:</strong> Hands-on practice with advanced flight simulators, focusing on system calibration, performance, and fault detection.</li>
    <li><strong>Systems Integration:</strong> Linking mechanical, electrical, and software components for seamless flight simulation operations.</li>
    <li><strong>Safety & Reliability Engineering:</strong> Applying engineering principles to ensure stable and secure simulator operations under different scenarios.</li>
    <li><strong>Problem-Solving & Technical Decision-Making:</strong> Strengthened analytical skills through troubleshooting and system optimization tasks.</li>
  </ul>

  <p style="margin-top: 16px; font-weight: 600;">Outcome:</p>
  <p>Gained <strong>practical expertise in aviation-related communication, electrical, and power systems</strong>, while building a strong foundation in <strong>simulation technology, systems integration, and technical troubleshooting</strong>. This training enhanced both <strong>engineering proficiency</strong> and adaptability for roles involving <strong>aviation systems, simulation engineering, and advanced technical operations</strong>.</p>
`
      ,
      issuer: 'EgyptAir Training Academy',
      issueDate: 'July 29, 2022',
      duration: '4 weeks',
      images: [CertificateEgyptAir]
    },
    // Add more certificates as needed
  ];

  return (
    <section
      id="certificates"
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my professional certifications, awards, and educational accomplishments.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm group flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start space-x-4 mb-4 flex-1">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full flex-shrink-0">
                  <Award className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                    {cert.description.replace(/<[^>]+>/g, '')}
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <p className="font-semibold text-pink-600 dark:text-purple-400">{cert.issuer}</p>
                    <p className="text-gray-500 dark:text-gray-400">{cert.issueDate}</p>
                    {cert.duration && (
                      <p className="text-gray-500 dark:text-gray-400">{cert.duration}</p>
                    )}
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
      {selectedCertificate && (
        <ImageModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          image={selectedCertificate.images}
          title={selectedCertificate.title}
          description={selectedCertificate.description}
          details={{
            issuer: selectedCertificate.issuer,
            issueDate: selectedCertificate.issueDate,
            duration: selectedCertificate.duration
          }}
          actionButton={
            selectedCertificate.certificateUrl
              ? {
                label: 'View Original Certificate',
                onClick: () => window.open(selectedCertificate.certificateUrl!, '_blank')
              }
              : undefined
          }
        />
      )}
    </section>
  );
}
