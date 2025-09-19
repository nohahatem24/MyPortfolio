/**
 * Image modal component for certificates and art pieces
 * Displays full-size images with details
 */

import React, { useState } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string | string[];
  title: string;
  description: string;
  details?: {
    medium?: string;
    year?: string;
    issuer?: string;
    issueDate?: string;
    duration?: string;
  };
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export function ImageModal({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  description, 
  details, 
  actionButton 
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

    const nextImage = () => {
  setCurrentIndex((prev) => (prev + 1) % image.length);
};

const prevImage = () => {
  setCurrentIndex((prev) => (prev - 1 + image.length) % image.length);
};


  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="p-2 h-auto border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full flex justify-center items-center bg-gray-100 dark:bg-gray-700">
          <img
            src={image[currentIndex]}
            alt={title}
            className="w-full max-h-[70vh] object-contain rounded-lg transition-all duration-500"
          />

          {image.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {details && (
            <div className="grid grid-cols-3 p-4 bg-pink-50 dark:bg-purple-900/20 rounded-lg">
              {details.issuer && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Issued By</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.issuer}</div>
                </div>
              )}
              {details.issueDate && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Issue Date</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.issueDate}</div>
                </div>
              )}
              {details.duration && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Duration</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.duration}</div>
                </div>
              )}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
            <div
              className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {actionButton && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                onClick={actionButton.onClick}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {actionButton.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
