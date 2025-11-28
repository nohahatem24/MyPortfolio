import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ImageModal } from '../ui/image-modal';
import { ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

// Digital Image Imports (No changes needed) ---
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

import infographic1 from '../../assets/images/DigitalArt/Infographics/infographics1.png';

// --- Paper Image Imports ---
// Art3D
import Art3D1 from "../../assets/images/PaperArt/Art3D/Art3D1.png";
import Art3D2 from "../../assets/images/PaperArt/Art3D/Art3D2.png";
import Art3D3 from "../../assets/images/PaperArt/Art3D/Art3D3.png";
import Art3D4 from "../../assets/images/PaperArt/Art3D/Art3D4.png";
import Art3D5 from "../../assets/images/PaperArt/Art3D/Art3D5.png";
import Art3D6 from "../../assets/images/PaperArt/Art3D/Art3D6.png";

// Cartoon Portrait
import Cartoon1 from "../../assets/images/PaperArt/CartoonPortrait/cartoon1.png";
import Cartoon2 from "../../assets/images/PaperArt/CartoonPortrait/cartoon2.png";
import Cartoon3 from "../../assets/images/PaperArt/CartoonPortrait/cartoon3.png";
import Cartoon4 from "../../assets/images/PaperArt/CartoonPortrait/cartoon4.png";

// Handmade
import PhoneCover from "../../assets/images/PaperArt/Handmade/PhoneCover.jpeg";
import SewingArt from "../../assets/images/PaperArt/Handmade/SewingArt.jpg";

// Handwriting
import Writing1 from "../../assets/images/PaperArt/Handwriting/writing1.png";
import Writing2 from "../../assets/images/PaperArt/Handwriting/writing2.png";
import Writing3 from "../../assets/images/PaperArt/Handwriting/writing3.png";
import Writing4 from "../../assets/images/PaperArt/Handwriting/writing4.png";
import Writing5 from "../../assets/images/PaperArt/Handwriting/writing5.png";

// Mandela
import Mandela1 from "../../assets/images/PaperArt/Mandela/mandela1.png";
import Mandela2 from "../../assets/images/PaperArt/Mandela/mandela2.png";
import Mandela3 from "../../assets/images/PaperArt/Mandela/mandela3.png";
import Mandela4 from "../../assets/images/PaperArt/Mandela/mandela4.png";
import Mandela5 from "../../assets/images/PaperArt/Mandela/mandela5.png";
import Mandela6 from "../../assets/images/PaperArt/Mandela/mandela6.png";
import Mandela7 from "../../assets/images/PaperArt/Mandela/mandela7.png";

// Oil Colors
import Oil1 from "../../assets/images/PaperArt/OilColors/oil1.png";
import Oil2 from "../../assets/images/PaperArt/OilColors/oil2.png";

// Pastel Colors
import Pastel1 from "../../assets/images/PaperArt/PastelColors/pastel1.png";
import Pastel2 from "../../assets/images/PaperArt/PastelColors/pastel2.png";

// Pencil Colors
import PencelColors1 from "../../assets/images/PaperArt/PencilColors/pencelcolors1.png";
import PencelColors2 from "../../assets/images/PaperArt/PencilColors/pencelcolors2.png";
import PencelColors3 from "../../assets/images/PaperArt/PencilColors/pencelcolors3.png";
import PencelColors4 from "../../assets/images/PaperArt/PencilColors/pencelcolors4.png";
import PencelColors5 from "../../assets/images/PaperArt/PencilColors/pencelcolors5.png";

// Pencil Portrait
import Portrait1 from "../../assets/images/PaperArt/PencilPortrait/portrait1.png";
import Portrait2 from "../../assets/images/PaperArt/PencilPortrait/portrait2.png";
import Portrait3 from "../../assets/images/PaperArt/PencilPortrait/portrait3.png";
import Portrait4 from "../../assets/images/PaperArt/PencilPortrait/portrait4.png";
import Portrait5 from "../../assets/images/PaperArt/PencilPortrait/portrait5.png";

// Pixel Art
import Pixel1 from "../../assets/images/PaperArt/PixelArt/pixel1.png";
import Pixel2 from "../../assets/images/PaperArt/PixelArt/pixel2.png";

// Quick Sketches
import MangoFreshSketch from "../../assets/images/PaperArt/QuickSketches/MangoFreshSketch.png";
import Sketch1 from "../../assets/images/PaperArt/QuickSketches/Sketch1.png";
import Sketch2 from "../../assets/images/PaperArt/QuickSketches/Sketch2.png";
import Sketch3 from "../../assets/images/PaperArt/QuickSketches/Sketch3.png";
import Sketch4 from "../../assets/images/PaperArt/QuickSketches/Sketch4.png";
import Sketch5 from "../../assets/images/PaperArt/QuickSketches/Sketch5.png";
import Sketch6 from "../../assets/images/PaperArt/QuickSketches/Sketch6.png";
import Sketch7 from "../../assets/images/PaperArt/QuickSketches/Sketch7.png";

// Water Colors
import Water1 from "../../assets/images/PaperArt/WaterColors/water1.png";
import Water2 from "../../assets/images/PaperArt/WaterColors/water2.png";
import Water3 from "../../assets/images/PaperArt/WaterColors/water3.png";
import Water4 from "../../assets/images/PaperArt/WaterColors/water4.png";
import Water5 from "../../assets/images/PaperArt/WaterColors/water5.png";
import Water6 from "../../assets/images/PaperArt/WaterColors/water6.png";
import Water7 from "../../assets/images/PaperArt/WaterColors/water7.png";
import Water8 from "../../assets/images/PaperArt/WaterColors/water8.png";


// --- Data Structure (No changes needed) ---
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

// --- Artwork Data (No changes needed) ---
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
    
    // --- Paper Artworks ---
    // Pencil Portrait
    { id: 14, title: "Portrait of a Taylor Swift", story: "A detailed graphite portrait focusing on capturing the subject's expression and the texture of his hair. The use of light and shadow creates a strong, realistic sense of depth.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait1], year: "2023", medium: "Graphite Pencil on Paper", width: 900, height: 1200 },
    { id: 15, title: "The Pensive Gaze", story: "A close-up portrait study, emphasizing the eyes and the subtle emotion in the subject's face. The soft blending technique gives the skin a smooth, lifelike quality.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait2], year: "2023", medium: "Graphite Pencil on Paper", width: 900, height: 1200 },
    { id: 16, title: "Child's Portrait", story: "A charming portrait of a child, capturing their innocence and curiosity. The soft lines and gentle shading are used to convey the delicate nature of the subject.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait4], year: "2023", medium: "Graphite Pencil on Paper", width: 900, height: 1200 },
    { id: 17, title: "Elderly Man's Portrait", story: "A character study focusing on the texture and lines of an elderly man's face, conveying wisdom and life experience. The detail in the wrinkles and beard adds depth to the portrait.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait5], year: "2023", medium: "Graphite Pencil on Paper", width: 900, height: 1200 },
    { id: 18, title: "Portrait of Anime Woman", story: "A delicate pencil portrait with a focus on the subject's flowing hair and gentle features. The contrast between the dark hair and the light skin highlights the form.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait3], year: "2023", medium: "Graphite Pencil on Paper", width: 900, height: 1200 },

    // Watercolor
    { id: 19, title: "Abstract Floral", story: "A vibrant abstract piece using watercolor washes to create a sense of movement and organic form. The colors blend and bleed into each other, suggesting a bouquet of flowers.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water1], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 20, title: "Seascape Sunset", story: "A tranquil watercolor painting of a sunset over the ocean. The soft, blended colors capture the peaceful transition of light and the reflection on the water.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water2], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 21, title: "Galaxy Path", story: "A loose, impressionistic watercolor of a path winding through a forest. The light filtering through the trees is captured with bright, dappled colors.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water3], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 22, title: "Cityscape Rain", story: "A moody watercolor of a city street on a rainy day. The reflections on the wet pavement and the blurred lights create a romantic, atmospheric scene.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water4], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 23, title: "Mountain Vista", story: "A majestic watercolor of a mountain range, using cool blues and purples for the distant peaks and warmer greens for the foreground. The layering of washes creates depth.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water5], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 24, title: "Still Life: Fruit Bowl", story: "A traditional still life rendered in watercolor, focusing on the texture and color of various fruits. The transparency of the medium is used to create delicate highlights.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water6], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 25, title: "Bird on a Branch", story: "A detailed study of a small bird perched on a branch, contrasted with a loose, abstract background. The focus is on the bird's vibrant plumage.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water7], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    { id: 26, title: "Abstract Swirls", story: "A dynamic, abstract piece characterized by swirling lines and vibrant, contrasting colors. The wet-on-wet technique creates soft, unpredictable edges.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water8], year: "2022", medium: "Watercolor on Paper", width: 900, height: 1200 },
    // Mandala
    { id: 27, title: "Cosmic Bloom Mandala", story: "An intricate mandala design inspired by celestial patterns and blooming flowers. The fine lines and symmetrical structure create a meditative and harmonious visual experience.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela1], year: "2024", medium: "Ink on Paper", width: 900, height: 900 },
    { id: 28, title: "Geometric Harmony Mandala", story: "A black and white mandala focusing on complex geometric patterns and radial symmetry. The contrast and precision of the lines draw the viewer into the center.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela2], year: "2024", medium: "Ink on Paper", width: 900, height: 900 },
    { id: 29, title: "Floral Lace Mandala", story: "A delicate mandala that resembles intricate lace, with floral elements woven into the geometric structure. The design is both detailed and airy.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela3], year: "2024", medium: "Ink on Paper", width: 900, height: 900 },
    { id: 30, title: "The Eye of the Universe Mandala", story: "A powerful, centralized mandala with an 'eye' motif at its core, surrounded by radiating layers of patterns. It suggests themes of vision and universal consciousness.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela4], year: "2024", medium: "Ink on Paper", width: 900, height: 900 },
    { id: 31, title: "Layered Depth Mandala", story: "A mandala that uses varying line weights and shading to create an illusion of three-dimensional layers and depth, making the pattern seem to pop off the page.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela5], year: "2024", medium: "Ink on Paper", width: 900, height: 900 },
    { id: 32, title: "Colored Gem Mandala", story: "A mandala that incorporates color to highlight different sections of the pattern, giving it the appearance of a faceted gemstone or stained glass.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela6], year: "2024", medium: "Ink and Colored Pencil on Paper", width: 900, height: 900 },
    { id: 33, title: "Intricate Star Mandala", story: "A complex mandala built around a star shape, with each point leading to a new, detailed pattern. The overall effect is one of dazzling complexity and order.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela7], year: "2024", medium: "Ink on Paper", width: 900, height: 900 },
    // Sketching
    { id: 34, title: "Mango Fresh Sketch", story: "The initial pencil sketch for the 'Mango Fresh' mascot, showing the raw energy and pose before the digital coloring process. It highlights the foundational drawing skills.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [MangoFreshSketch], year: "2025", medium: "Pencil on Paper", width: 900, height: 1200 },
    { id: 35, title: "Architectural Study", story: "A quick sketch focusing on perspective and form, capturing the essence of a building with minimal lines and shading.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch1], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    { id: 36, title: "Hand Study", story: "A challenging study of the human hand in a complex pose, focusing on anatomy, proportion, and the interplay of light and shadow on the skin.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch2], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    { id: 37, title: "Still Life: Teacup", story: "A simple, elegant sketch of a teacup, focusing on the curves and reflections of the ceramic material. It's a study in capturing volume with minimal detail.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch3], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    { id: 38, title: "Portrait Sketch", story: "A rapid, expressive portrait sketch, capturing the subject's likeness and mood with loose, energetic lines.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch4], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    { id: 39, title: "Animal Sketch: Cat", story: "A quick, charming sketch of a cat, focusing on its posture and the texture of its fur. The sketch captures the animal's natural grace.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch5], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    { id: 40, title: "Nature Sketch: Tree", story: "A detailed study of a tree, focusing on the bark texture and the branching structure. It's an exercise in capturing the complexity of natural forms.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch6], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    { id: 41, title: "Figure Study: Pose", story: "A quick gesture drawing of a human figure, focusing on capturing the movement and balance of the pose rather than anatomical detail.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch7], year: "2024", medium: "Pencil on Sketchbook", width: 900, height: 1200 },
    // Hand Lettering
    { id: 42, title: "Arabic Calligraphy: Quote", story: "An elegant piece of Arabic calligraphy featuring an inspirational quote. The script is beautifully rendered, showcasing the fluidity and artistry of the language.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing1], year: "2021", medium: "Ink on Paper", width: 900, height: 1200 },
    { id: 43, title: "English Hand Lettering: Dream", story: "A modern hand-lettered piece of the word 'Dream,' using a stylized, flowing script. The design is simple yet impactful, focusing on the beauty of the typography.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing2], year: "2021", medium: "Ink on Paper", width: 900, height: 1200 },
    { id: 44, title: "Words I Might Never Say", story: "A raw and honest handwritten letter expressing unspoken feelings. This piece captures the vulnerability of personal thoughts, written neatly on lined paper, making it a relatable and intimate work of art.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing3], year: "2021", medium: "Ink on Lined Paper", width: 900, height: 1200 },
    { id: 45, title: "A Letter from the Heart", story: "An emotional and personal letter written in beautiful Arabic handwriting. The piece conveys deep feelings and reflections, with the natural flow of the script adding to its authenticity and emotional weight.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing4], year: "2021", medium: "Ink on Paper", width: 900, height: 1200 },
    { id: 46, title: "The Last Time", story: "A poignant and thought-provoking quote rendered in elegant, classic calligraphy. The message serves as a powerful reminder to cherish every moment, beautifully captured with clean lines and a minimalist aesthetic.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing5], year: "2021", medium: "Pencil/Ink on Lined Paper", width: 900, height: 1200 },
    // Pastel Colors
    { id: 47, title: "Four Seasons Tree", story: "A creative depiction of the four seasons, represented by a single tree divided into four colorful panels. Using soft pastels, this artwork captures the essence of spring, summer, autumn, and winter in one cohesive and vibrant image.", mainCategory: 'Paper Art', subCategory: 'Pastel Colors', images: [Pastel1], year: "2021", medium: "Soft Pastels on Paper", width: 1200, height: 900 },
    { id: 48, title: "Sunset Sail", story: "A serene seascape at sunset, brought to life with the warm, rich tones of oil pastels. The smooth blending of colors captures the tranquil glow of the sun on the water as a sailboat glides by, creating a peaceful and picturesque scene.", mainCategory: 'Paper Art', subCategory: 'Pastel Colors', images: [Pastel2], year: "2022", medium: "Oil Pastels on Paper", width: 1200, height: 900 },
    // Art3D
    { id: 49, title: "3D Bell Pepper Study", story: "An exercise in photorealism, this piece uses careful shading and highlighting to make a simple bell pepper appear three-dimensional. The focus was on capturing the smooth, reflective texture of the pepper's skin.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D1], year: "2022", medium: "Graphite Pencil on Paper", width: 800, height: 1000 },
    { id: 50, title: "The Perpetual Pour", story: "This drawing captures the dynamic moment of water being poured, creating an illusion of movement and transparency. It's a study in how to represent clear, moving liquids using only graphite.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D2], year: "2023", medium: "Pencil on Paper", width: 800, height: 1000 },
    { id: 51, title: "Impossible Cube", story: "An exploration of optical illusions and impossible geometry. This drawing challenges the viewer's perception of space and dimension, creating a structure that could not exist in the real world.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D3], year: "2023", medium: "Ink and Pencil on Toned Paper", width: 900, height: 900 },
    { id: 52, title: "Floating Pyramid Steps", story: "This piece uses precise perspective and shadow to create the illusion that steps are floating above the paper. It's a playful trick of the eye that demonstrates the power of shading.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D4], year: "2022", medium: "Pencil on Paper", width: 1000, height: 800 },
    { id: 53, title: "Fundamental Shapes in 3D", story: "A foundational study of rendering basic geometric shapes—a cone, cylinder, sphere, and cube—in three dimensions. This exercise is crucial for understanding how light interacts with different forms.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D5], year: "2022", medium: "Graphite Pencil Study", width: 800, height: 1000 },
    { id: 54, title: "Airplane Sketch in Perspective", story: "A technical sketch of an airplane, focusing on creating a sense of depth and three-dimensionality through perspective drawing. The blue highlights add a touch of style to the technical rendering.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D6], year: "2023", medium: "Pencil and Pen on Paper", width: 1200, height: 800 },
    // Cartoon Portrait
    { id: 55, title: "Friends Selfie Moment", story: "A vibrant cartoon portrait capturing the joy and friendship of a group of friends taking a selfie. This piece uses bright colors and expressive characters to celebrate modern connections and happy memories.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon1], year: "2022", medium: "Colored Pencils and Ink", width: 900, height: 1100 },
    { id: 56, title: "Nostalgic Afternoon", story: "A faceless portrait set in a nostalgic, vintage-inspired room. The scene, with its gramophone and traditional decor, evokes a sense of calm and timeless storytelling, leaving the character's emotions to the viewer's imagination.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon2], year: "2021", medium: "Markers and Ink on Paper", width: 900, height: 1100 },
    { id: 57, title: "Sisters in Style", story: "A minimalist and stylish faceless portrait of two friends or sisters. The focus is on the patterns of their clothing and the bond between them, conveyed through their closeness rather than facial expressions.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon3], year: "2022", medium: "Colored Pencils and Markers", width: 900, height: 1100 },
    { id: 58, title: "Anime Girl: Sketch to Color", story: "A side-by-side comparison showing the artistic process from a clean pencil sketch to a fully colored character. This piece, inspired by anime, highlights the transformation that color and shading bring to a drawing.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon4], year: "2021", medium: "Pencil, Ink, and Markers", width: 1000, height: 900 },
    // Handmade
    { id: 59, title: "Crocheted & Beaded Phone Case", story: "A unique phone case transformed into a piece of wearable art. This cover is hand-crocheted with soft wool yarn and meticulously decorated with beads, sequins, and a charming pom-pom, making it both beautiful and functional.", mainCategory: 'Paper Art', subCategory: 'Handmade', images: [PhoneCover], year: "2023", medium: "Wool Yarn, Beads, and Sequins", width: 700, height: 1400 },
    { id: 60, title: "Embroidered Calligraphy", story: "A beautiful fusion of embroidery and Arabic calligraphy. This piece uses thread to 'write' the uplifting phrase 'إنما هي أيامٌ وتمضي، والموعد الجنة' (They are but days that will pass, and the appointment is Paradise), intertwined with floral embroidery that adds life and color to the words.", mainCategory: 'Paper Art', subCategory: 'Handmade', images: [SewingArt], year: "2022", medium: "Thread Embroidery on Paper", width: 900, height: 900 },
    // Oil Colors
    { id: 61, title: "Let Flowers Bloom", story: "A vibrant oil painting of a tree in full bloom, created with thick, textured strokes (impasto) that give the flowers a three-dimensional feel. The piece is a celebration of spring and new beginnings.", mainCategory: 'Paper Art', subCategory: 'OilColors', images: [Oil1], year: "2022", medium: "Oil Paint on Paper", width: 900, height: 1200 },
    { id: 62, title: "Cosmic Dreams", story: "A surreal and imaginative painting that combines celestial and human elements. Featuring a girl with a galaxy for a mind and a floral moon, this piece explores themes of dreams, identity, and the universe within us. The dark background makes the vibrant oil colors pop.", mainCategory: 'Paper Art', subCategory: 'OilColors', images: [Oil2], year: "2023", medium: "Oil on Canvas/Board", width: 900, height: 1300 },
    // Pencil Colors
    { id: 63, title: "Geometric Mosaic", story: "An abstract piece inspired by stained glass, created using colored pencils. Each geometric segment is carefully shaded with a different color, creating a vibrant and harmonious mosaic effect.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors1], year: "2022", medium: "Colored Pencils on Paper", width: 1000, height: 900 },
    { id: 64, title: "Zentangle Leaves", story: "A beautiful illustration that combines nature with intricate art. The leaves are filled with detailed zentangle patterns, and complemented by elegant Arabic calligraphy, creating a rich and meaningful composition.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors2], year: "2023", medium: "Colored Pencils and Ink", width: 900, height: 1200 },
    { id: 65, title: "Two-Faced: Realism and Fantasy", story: "A surreal portrait that is split into two halves. One side shows a realistic eye and face, while the other explodes into a world of colorful zentangle patterns and floral designs, representing the contrast between our outer self and inner creativity.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors3], year: "2022", medium: "Pencil, Ink, and Colored Pencils", width: 900, height: 1000 },
    { id: 66, title: "Bohemian Girl", story: "A portrait of a girl with flowing orange hair and a bohemian-style headband. The use of colored pencils creates a soft, warm texture, especially in the hair, giving the character a gentle and free-spirited look.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors4], year: "2021", medium: "Colored Pencils on Paper", width: 900, height: 1000 },
    { id: 67, title: "Colorful Dreamcatcher", story: "A vibrant drawing of a dreamcatcher, brought to life with a rainbow of colored pencils. Each feather is uniquely colored, symbolizing a collection of bright and beautiful dreams.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors5], year: "2023", medium: "Colored Pencils and Ink", width: 900, height: 1100 },
    // Pixel Art
    { id: 68, title: "Pixel Penguin Love", story: "An adorable pixel art penguin holding a heart, created on grid paper. This piece, dated and signed 'NOHA', combines the charm of retro gaming aesthetics with a sweet, modern character design.", mainCategory: 'Paper Art', subCategory: 'PixelArt', images: [Pixel1], year: "2025", medium: "Markers on Grid Paper", width: 900, height: 1100 },
    { id: 69, title: "Pixel Art Angel", story: "A beautiful and serene angel created in a two-tone pixel art style. This piece, personalized with the name 'NOHA', showcases how simple grids and colors can be used to create an elegant and classic image.", mainCategory: 'Paper Art', subCategory: 'PixelArt', images: [Pixel2], year: "2022", medium: "Ink/Marker on Grid Paper", width: 1200, height: 900 },
    // Infographics & Presentations
    { id: 70, title: "Modern Circular Infographic", story: "A clean and modern infographic template designed to present information clearly and effectively. This design uses a central circular element with four color-coded points, making complex data easy to digest and visually appealing for professional presentations.", mainCategory: 'Digital Art', subCategory: 'Infographics & Presentations', images: [infographic1], year: "2024", medium: "Presentation Slide Design", width: 1920, height: 1080 }
];

// --- Category Definitions (No changes needed) ---
const mainCategories: ('Digital Art' | 'Paper Art')[] = ['Digital Art', 'Paper Art'];
const subCategories = {
    'Digital Art': ['All', 'Digital Illustration', 'Logos', 'Posters & Flyers', 'Infographics & Presentations'],
    'Paper Art': ['All', 'Pencil Portrait', 'Watercolor', 'Mandala', 'Sketching', 'Hand Lettering', 'Pastel Colors', 'Art3D', 'CartoonPortrait', 'Handmade', 'OilColors', 'PencilColors', 'PixelArt']
};

// --- ArtCard Component (Updated for guaranteed square card) ---
const ArtCard = React.memo(({ art, onClick }: { art: ArtPiece; onClick: () => void }) => {
  return (
    <Tilt
      className="tilt-card"
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glarePosition="all"
      scale={1.05}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={2000}
    >
      <motion.div
        onClick={onClick}
        className="group cursor-pointer w-[220px] h-[288px] sm:w-[260px] sm:h-[340px] md:w-[300px] md:h-[388px] 
                   rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm 
                   border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Image Area */}
        <div className="w-full h-[200px] sm:h-[252px] md:h-[300px] overflow-hidden">
          <motion.img
            src={art.images[0]}
            alt={art.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Text Area */}
        <div className="p-4 h-[88px] flex flex-col justify-center border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white truncate" title={art.title}>
            {art.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
            {art.medium}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
});

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
        if (activeSubCategory === 'All') {
            return mainFiltered;
        }
        return mainFiltered.filter(art => art.subCategory === activeSubCategory);
    }, [activeMainCategory, activeSubCategory]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="art" ref={ref} className="py-10 sm:py-16 md:py-20 bg-[#fffaf5] dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">My Art Gallery</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">A canvas for my thoughts, where every pixel tells a story.</p>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

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

                <motion.div
                    className="flex space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {filteredArtworks.map((art) => (
                        <motion.div key={art.id} className="snap-start" variants={itemVariants}>
                            <ArtCard art={art} onClick={() => setSelectedArt(art)} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {selectedArt && (
                <ImageModal
                    isOpen={!!selectedArt}
                    onClose={() => setSelectedArt(null)}
                    title={selectedArt.title}
                    description={selectedArt.story}
                    image={selectedArt.images}
                    details={{ medium: selectedArt.medium, year: selectedArt.year }}
                    imageClassName="max-h-[70vh]"
                />
            )}
        </section>
    );
}
