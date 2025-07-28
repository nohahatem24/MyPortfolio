/**
 * Image modal component for certificates and art pieces
 * Displays full-size images with details
 */

import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from './button';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  details?: {
    medium?: string;
    year?: string;
    issuer?: string;
    issueDate?: string;
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

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          {details && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-pink-50 dark:bg-purple-900/20 rounded-lg">
              {details.medium && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Medium</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.medium}</div>
                </div>
              )}
              {details.year && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Year</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.year}</div>
                </div>
              )}
              {details.issuer && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Issuer</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.issuer}</div>
                </div>
              )}
              {details.issueDate && (
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Issued</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{details.issueDate}</div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
          </div>

          {/* Action Button */}
          {actionButton && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button 
                onClick={actionButton.onClick}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
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
