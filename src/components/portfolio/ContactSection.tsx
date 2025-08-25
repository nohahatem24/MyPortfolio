/**
 * Contact section component with real functionality and pink/purple theme
 * Provides working contact links and contact form with enhanced UX
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulate loading time for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:nohahatem.nh@gmail.com?subject=${subject}&body=${body}`;
      
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getSubmitButtonContent = () => {
    switch (formStatus) {
      case 'loading':
        return (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
            Sending...
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircle className="h-4 w-4 mr-2" />
            Message Sent!
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle className="h-4 w-4 mr-2" />
            Try Again
          </>
        );
      default:
        return (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        );
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>
        
        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-pink-500 dark:focus:border-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-pink-500 dark:focus:border-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={formStatus === 'loading'}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-pink-500 dark:focus:border-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-pink-500 dark:focus:border-purple-500"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={formStatus === 'loading' || formStatus === 'success'}
                className={`w-full transition-all ${
                  formStatus === 'success' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : formStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
                } text-white shadow-lg`}
              >
                {getSubmitButtonContent()}
              </Button>
            </form>
            
            
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:nohahatem.nh@gmail.com"
                      className="text-pink-600 dark:text-purple-400 hover:text-pink-700 dark:hover:text-purple-300 transition-colors"
                    >
                      nohahatem.nh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <a 
                      href="tel:+201554199143"
                      className="text-pink-600 dark:text-purple-400 hover:text-pink-700 dark:hover:text-purple-300 transition-colors"
                    >
                      +20 1554199143
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <span className="text-gray-600 dark:text-gray-300">Cairo, Egypt</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="mailto:nohahatem.nh@gmail.com"
                  className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-purple-900/50 transition-colors transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </a>
                <a 
                  href="tel:+201554199143"
                  className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-purple-900/50 transition-colors transform hover:scale-110"
                  aria-label="Phone"
                >
                  <Phone className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </a>
                <a 
                  href="https://github.com/nohahatem24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-purple-900/50 transition-colors transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
