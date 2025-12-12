import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Shapes } from 'lucide-react';
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

    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:noha.hatem.alsayed@gmail.com?subject=${subject}&body=${body}`;

      setFormStatus('success');
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        {/* Contact Info Box */}
        <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 shadow-lg backdrop-blur-sm max-w-4xl mx-auto w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Email */}
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=noha.hatem.alsayed@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-purple-400 hover:text-pink-700 dark:hover:text-purple-300 transition-colors"
                  >
                    noha.hatem.alsayed@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Github className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                  <a
                    href="https://github.com/nohahatem24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-purple-400 hover:text-pink-700 dark:hover:text-purple-300 transition-colors"
                  >
                    nohahatem24
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/noha-hatem-26286621a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-purple-400 hover:text-pink-700 dark:hover:text-purple-300 transition-colors"
                  >
                    Noha Hatem
                  </a>
                </div>
              </div>

              {/* Behance */}
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="bg-pink-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Shapes className="h-6 w-6 text-pink-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Behance</h4>
                  <a
                    href="https://behance.net/nohahatem24/appreciated"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 dark:text-purple-400 hover:text-pink-700 dark:hover:text-purple-300 transition-colors"
                  >
                    nohahatem24
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
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

              {/* Location */}
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
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
        </div>
      </div>
    </section>
  );
}
