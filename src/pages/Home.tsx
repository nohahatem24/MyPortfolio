/**
 * Main portfolio homepage component
 * Displays Noha Hatem's complete portfolio with all sections
 */

import React from 'react';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import EducationSection from '../components/portfolio/EducationSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import CertificatesSection from '../components/portfolio/CertificatesSection';
import ArtSection from '../components/portfolio/ArtSection';
import ContactSection from '../components/portfolio/ContactSection';
import Navigation from '../components/portfolio/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff3e5] dark:bg-gray-900 transition-colors">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ArtSection />
        <ContactSection />
      </main>
    </div>
  );
}
