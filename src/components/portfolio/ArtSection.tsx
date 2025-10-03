import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ImageModal } from '../ui/image-modal';
import { X, ArrowRight } from 'lucide-react';

// --- Image Imports ---
import mangoColored from '../../assets/images/DigitalArt/DigitalIllustration/MangoFreshSketchColored.png';
import mangoSketch from '../../assets/images/DigitalArt/DigitalIllustration/MangoFreshSketch.png';
import logo1 from '../../assets/images/DigitalArt/Logos/TheBridgeLogo.png';
import logo2 from '../../assets/images/DigitalArt/Logos/QuranLogo.png';
import logo3 from '../../assets/images/DigitalArt/Logos/ShooufNourakLOGO.png';
import steamBanner from '../../assets/images/DigitalArt/Posters/steamBanner.png';
import poster1 from '../../assets/images/DigitalArt/Posters/Poster1.png';
import poster2 from '../../assets/images/DigitalArt/Posters/Poster2.png';
import poster3 from '../../assets/images/DigitalArt/Posters/Poster3.png';
import poster4 from '../../assets/images/DigitalArt/Posters/Poster4.png';
import poster5 from '../../assets/images/DigitalArt/Posters/Poster5.png';
import invitation1 from '../../assets/images/DigitalArt/Invitations/Invitation1.png';
import invitation2 from '../../assets/images/DigitalArt/Invitations/Invitation2.png';
import invitation3 from '../../assets/images/DigitalArt/Invitations/Invitation3.png';

// --- Data Structure ---
interface ArtPiece {
    id: number;
    title: string;
    story: string;
    mainCategory: 'Digital Art' | 'Paper Art';
    subCategory: string;
    images: string[];
    year: string;
    medium: string;
    width: number;
    height: number;
}

// --- Artwork Data ---
const allArtworks: ArtPiece[] = [
    { id: 1, title: "'Mango Fresh' Mascot", story: "The goal was to create more than a character; it was to build a personality. 'Mango Fresh' was given a dynamic pose and a confident smile to tell a story without words: this isn't just juice, it's pure, bottled energy. The process started with a simple paper sketch and evolved into a vibrant vector mascot ready for branding.", mainCategory: 'Digital Art', subCategory: 'Digital Illustration', images: [mangoColored, mangoSketch], year: "2025", medium: "Mascot Design", width: 1080, height: 1080 },
    { id: 2, title: "The Bridge - Conceptual App Logo", story: "The Bridge is a conceptual mobile app designed to help individuals and couples rebuild communication. It acts as a 'bridge' to reconnect with oneself and one's partner by providing tools for expressing emotions safely, understanding each other's needs, and navigating conflicts constructively. The logo symbolizes this connection and the path to healing.", mainCategory: 'Digital Art', subCategory: 'Logos', images: [logo1], year: "2024", medium: "Logo Design", width: 1200, height: 900 },
    { id: 3, title: "Dar Rabee - Quran Center Logo", story: "A minimalist and modern logo designed for 'Dar Rabee,' a specialized Quranic studies center for women and girls. The design elegantly blends a book icon with the shape of a dome, capturing the essence of spiritual knowledge and creating a welcoming and professional identity.", mainCategory: 'Digital Art', subCategory: 'Logos', images: [logo2], year: "2025", medium: "Logo Design", width: 1080, height: 1080 },
    { id: 4, title: "Shoouf Nourak - Startup Logo", story: "A vibrant and energetic logo created for 'Shoouf Nourak' (See Your Light), a creative small business. The design uses bright, dynamic shapes to represent illumination, vision, and personal expression, reflecting the startup's core mission.", mainCategory: 'Digital Art', subCategory: 'Logos', images: [logo3], year: "2025", medium: "Logo Design", width: 1080, height: 1080 },
    { id: 5, title: "Rabee Academy Flyer", story: "A modern and serene flyer for a Quran academy, using a clean layout, gentle floral elements, and a peaceful color scheme to professionally advertise its remote learning programs for women and girls.", mainCategory: 'Digital Art', subCategory: 'Posters & Flyers', images: [poster1], year: "2025", medium: "Digital Flyer", width: 1080, height: 1920 },
    { id: 6, title: "Dar Rabee Promotional Flyer", story: "An elegant and traditional flyer for a women's Quran center. The design uses a warm, trustworthy color palette and a clear, structured layout to present programs and contact details in an accessible and professional manner.", mainCategory: 'Digital Art', subCategory: 'Posters & Flyers', images: [poster2], year: "2025", medium: "Digital Flyer", width: 1080, height: 1920 },
    { id: 7, title: "Personal Portfolio Header", story: "A creative and personal header designed for my portfolio website. It establishes my dual identity as a Mobile Developer and UI/UX Designer, reflecting a passion for building impactful digital experiences with purpose and heart.", mainCategory: 'Digital Art', subCategory: 'Posters & Flyers', images: [poster3], year: "2025", medium: "Personal Branding", width: 1920, height: 1080 },
    { id: 8, title: "CV Service Social Media Ad", story: "A results-driven social media advertisement for a professional CV writing service. The design is bold and direct, using clear benefit-oriented text, strong visuals, and a prominent QR code to drive immediate customer action and conversions.", mainCategory: 'Digital Art', subCategory: 'Posters & Flyers', images: [poster4], year: "2025", medium: "Digital Poster", width: 1080, height: 1080 },
    { id: 9, title: "Inspirational Social Media Graphic", story: "A calming and spiritually uplifting social media post featuring a Hadith about the Quran. The design employs a soft, watercolor-style background with gentle, flowing lines and elegant Arabic calligraphy to create a peaceful, contemplative, and highly shareable piece of content.", mainCategory: 'Digital Art', subCategory: 'Posters & Flyers', images: [poster5], year: "2025", medium: "Digital Poster", width: 1920, height: 1080 },
    { id: 10, title: "STEAM Educational Banner", story: "A clean and engaging banner illustrating the 'STEAM' (Science, Technology, Engineering, Arts, Mathematics) educational approach. The design uses vibrant 3D icons and a clear, cyclical flow to make the interdisciplinary concept easy to understand and visually appealing.", mainCategory: 'Digital Art', subCategory: 'Posters & Flyers', images: [steamBanner], year: "2025", medium: "Digital Banner", width: 1920, height: 1080 },
    { id: 11, title: "Elegant Engagement Invitation", story: "An elegant and romantic digital invitation for an engagement celebration. The design features a soft, floral watercolor theme, sophisticated typography, and a personalized photo to create a heartfelt and memorable announcement, optimized for mobile viewing.", mainCategory: 'Digital Art', subCategory: 'Invitations', images: [invitation1], year: "2025", medium: "Digital Invitation", width: 1080, height: 1920 },
    { id: 12, title: "Floral Engagement Invitation", story: "A romantic and elegant digital invitation featuring a soft floral theme and sophisticated typography for a memorable announcement. The design is optimized for mobile viewing, ensuring a beautiful presentation on any device.", mainCategory: 'Digital Art', subCategory: 'Invitations', images: [invitation2], year: "2025", medium: "Digital Invitation", width: 1080, height: 1920 },
    { id: 13, title: "Engagement Invitation (With 2 Pictures)", story: "A romantic and elegant digital invitation featuring a soft floral theme and sophisticated typography for a memorable announcement. The design is optimized for mobile viewing, ensuring a beautiful presentation on any device.", mainCategory: 'Digital Art', subCategory: 'Invitations', images: [invitation3], year: "2025", medium: "Digital Invitation", width: 1080, height: 1920 },
];

// --- Category Definitions ---
const mainCategories: ('Digital Art' | 'Paper Art')[] = ['Digital Art', 'Paper Art'];
const subCategories = {
    'Digital Art': ['All', 'Digital Illustration', 'Logos', 'Invitations', 'Posters & Flyers'],
    'Paper Art': ['All', 'Pencil Portrait', 'Watercolor', 'Mandala', 'Sketching', 'Hand Lettering', 'Pastel Colors', 'Art3D', 'CartoonPortrait', 'Handmade', 'OilColors', 'Others', 'PencilColors', 'PixelArt', 'QuickSketches']
};

// --- ArtCard Component ---
const ArtCard = ({ art, onClick }: { art: ArtPiece, onClick: () => void }) => {
    const showTwoImages = art.subCategory === 'Digital Illustration' && art.images.length > 1;

    return (
        <div
            className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            onClick={onClick}
        >
            <div className="relative flex-grow overflow-hidden">
                {showTwoImages ? (
                    <div className="flex h-full">
                        <img src={art.images[1]} alt={`${art.title} sketch`} className="w-1/2 h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <img src={art.images[0]} alt={art.title} className="w-1/2 h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                ) : (
                    <img
                        src={art.images[0]}
                        alt={art.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg flex items-center">
                        View Details <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                </div>
            </div>

            <div className="flex-shrink-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white truncate" title={art.title}>
                    {art.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {art.medium}
                </p>
            </div>
        </div>
    );
};


// --- Main ArtSection Component ---
export default function ArtSection() {
    const { ref, isVisible } = useScrollAnimation();
    const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
    const [activeMainCategory, setActiveMainCategory] = useState<'Digital Art' | 'Paper Art'>('Digital Art');
    const [activeSubCategory, setActiveSubCategory] = useState<string>('All');

    const handleMainCategoryChange = (category: 'Digital Art' | 'Paper Art') => {
        setActiveMainCategory(category);
        setActiveSubCategory('All');
    };

    const filteredArtworks = useMemo(() => {
        const mainFiltered = allArtworks.filter(art => art.mainCategory === activeMainCategory);
        if (activeSubCategory === 'All') return mainFiltered;
        return mainFiltered.filter(art => art.subCategory === activeSubCategory);
    }, [activeMainCategory, activeSubCategory]);

    return (
        <section id="art" ref={ref} className="py-20 md:py-28 bg-[#fffaf5] dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-12 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">My Gallery</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">A canvas for my thoughts, where every pixel tells a story.</p>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex justify-center gap-4 mb-6">
                    {mainCategories.map(cat => (
                        <button key={cat} onClick={() => handleMainCategoryChange(cat)} className={`px-5 py-2 text-base font-bold rounded-lg transition-all ${activeMainCategory === cat ? 'bg-pink-600 text-white scale-105 shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {subCategories[activeMainCategory].map(subCat => (
                        <button key={subCat} onClick={() => setActiveSubCategory(subCat)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all border-2 ${activeSubCategory === subCat ? 'bg-pink-500 text-white border-pink-500' : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-pink-500 hover:text-pink-500'}`}>
                            {subCat}
                        </button>
                    ))}
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {filteredArtworks.map(art => (
                        <ArtCard key={art.id} art={art} onClick={() => setSelectedArt(art)} />
                    ))}
                </div>
            </div>

            {selectedArt && (
                <ImageModal
                    isOpen={!!selectedArt}
                    onClose={() => setSelectedArt(null)}
                    title={selectedArt.title}
                    description={selectedArt.story}
                    image={selectedArt.images}
                    details={{ medium: selectedArt.medium, year: selectedArt.year }}
                />
            )}
        </section>
    );
}
