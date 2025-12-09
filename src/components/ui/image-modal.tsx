import React, { useEffect } from 'react';
import { X, Calendar, Type } from 'lucide-react';
import { LazyImage } from './LazyImage';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    image: string[]; // Always an array
    details?: {
        medium?: string;
        year?: string;
    };
    imageClassName?: string; // --- 1. ADD THIS NEW PROP ---
}

export function ImageModal({ isOpen, onClose, title, description, image, details, imageClassName }: ImageModalProps) { // --- AND ADD IT HERE ---
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    const hasMultipleImages = image.length > 1;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-5xl max-h-[90vh] shadow-2xl flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
                    <button 
                      onClick={onClose} 
                      className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Close image modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-grow overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                        {/* Left Column: Images */}
                        <div className={`grid ${hasMultipleImages ? 'grid-cols-2' : 'grid-cols-1'} gap-4 items-center`}>
                            {image.map((imgSrc, index) => (
                                <div key={index} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-2">
                                    <LazyImage
                                      src={imgSrc}
                                      alt={`${title} - view ${index + 1}`}
                                      className={`w-full h-full object-contain ${imageClassName || ''}`}
                                      blur={true}
                                      rootMargin="20px"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Details */}
                        <div className="space-y-6">
                            {/* Details Section */}
                            {details && (
                                <div className="bg-pink-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 tracking-wider uppercase">Details</h3>
                                    <div className="flex flex-col space-y-2">
                                        {details.medium && (
                                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                                                <Type className="h-4 w-4 mr-3 text-pink-500 dark:text-purple-400" />
                                                <div>
                                                    <span className="font-semibold">Medium:</span> {details.medium}
                                                </div>
                                            </div>
                                        )}
                                        {details.year && (
                                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                                                <Calendar className="h-4 w-4 mr-3 text-pink-500 dark:text-purple-400" />
                                                <div>
                                                    <span className="font-semibold">Year:</span> {details.year}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Story Section */}
                            {description && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">The Story</h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                        {description}
                                    </p>
                                </div>
                            )}

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
