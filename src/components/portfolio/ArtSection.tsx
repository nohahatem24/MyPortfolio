import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ImageModal } from '../ui/image-modal';
import { ArrowRight } from 'lucide-react';

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
import invitation1 from '../../assets/images/DigitalArt/Invitations/invitation1.png';
import invitation2 from '../../assets/images/DigitalArt/Invitations/invitation2.png';
import invitation3 from '../../assets/images/DigitalArt/Invitations/invitation3.png';

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
    { id: 11, title: "Elegant Engagement Invitation", story: "An elegant and romantic digital invitation for an engagement celebration. The design features a soft, floral watercolor theme, sophisticated typography, and a personalized photo to create a heartfelt and memorable announcement, optimized for mobile viewing.", mainCategory: 'Digital Art', subCategory: 'Invitations', images: [invitation1], year: "2025", medium: "Digital Invitation", width: 1080, height: 1920 },
    { id: 12, title: "Floral Engagement Invitation", story: "A romantic and elegant digital invitation featuring a soft floral theme and sophisticated typography for a memorable announcement. The design is optimized for mobile viewing, ensuring a beautiful presentation on any device.", mainCategory: 'Digital Art', subCategory: 'Invitations', images: [invitation2], year: "2025", medium: "Digital Invitation", width: 1080, height: 1920 },
    { id: 13, title: "Engagement Invitation (With 2 Pictures)", story: "A romantic and elegant digital invitation featuring a soft floral theme and sophisticated typography for a memorable announcement. The design is optimized for mobile viewing, ensuring a beautiful presentation on any device.", mainCategory: 'Digital Art', subCategory: 'Invitations', images: [invitation3], year: "2025", medium: "Digital Invitation", width: 1080, height: 1920 },


    // Paper Art
    // --- Paper Art ---
    // Pencil Portrait
    { id: 14, title: "Graphite Portrait Study", story: "An exploration of light and shadow, this portrait was drawn using graphite pencils to capture a moment of quiet contemplation. The focus was on achieving realism and emotional depth through subtle gradations.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait1], year: "2023", medium: "Graphite on Paper", width: 800, height: 1000 },
    { id: 15, title: "Expressive Gaze", story: "This piece aims to capture the soul through the eyes. Using fine-tipped pencils, every detail was meticulously rendered to convey a powerful, unspoken narrative.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait2], year: "2024", medium: "Pencil on Bristol", width: 800, height: 1000 },
    { id: 16, title: "Character Sketch", story: "A quick yet detailed portrait study focusing on capturing unique facial features and personality. The use of varied pencil grades adds texture and life to the drawing.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait3], year: "2023", medium: "Pencil Sketch", width: 800, height: 1000 },
    { id: 17, title: "Soft Light Portrait", story: "A portrait study focusing on the gentle play of soft light on facial contours. The goal was to create a serene and gentle mood using smooth blending techniques.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait4], year: "2024", medium: "Graphite on Paper", width: 800, height: 1000 },
    { id: 18, title: "Profile in Thought", story: "A classic profile view capturing a moment of deep thought. This piece emphasizes clean lines and the elegant structure of the human face.", mainCategory: 'Paper Art', subCategory: 'Pencil Portrait', images: [Portrait5], year: "2023", medium: "Pencil on Paper", width: 800, height: 1000 },

    // Watercolor
    { id: 19, title: "Misty Forest", story: "A watercolor painting that captures the ethereal beauty of a forest shrouded in mist. Layers of transparent washes were used to create a sense of depth and atmosphere.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water1], year: "2024", medium: "Watercolor on Cold Press", width: 1200, height: 800 },
    { id: 20, title: "Floral Bloom", story: "A vibrant and delicate depiction of a flower in full bloom. The wet-on-wet technique was used to achieve soft, blended colors that mimic the flower's natural grace.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water2], year: "2023", medium: "Watercolor on Paper", width: 900, height: 900 },
    { id: 21, title: "Autumn Leaves", story: "This piece celebrates the warm, rich colors of autumn. Each leaf is painted with individual care to highlight its unique shape and hue.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water3], year: "2024", medium: "Watercolor", width: 1000, height: 800 },
    { id: 22, title: "Seaside Vista", story: "A tranquil seascape painted with watercolors to capture the gentle movement of the waves and the soft light of the sky.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water4], year: "2023", medium: "Watercolor on Paper", width: 1200, height: 800 },
    { id: 23, title: "Botanical Study", story: "A detailed study of a plant, focusing on the intricate patterns of its leaves and the subtle variations in its green tones.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water5], year: "2024", medium: "Watercolor", width: 800, height: 1000 },
    { id: 24, title: "Enchanted Woods", story: "A whimsical watercolor scene depicting a magical forest path, inviting the viewer to step into a world of fantasy and wonder.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water6], year: "2023", medium: "Watercolor and Ink", width: 1000, height: 800 },
    { id: 25, title: "Delicate Petals", story: "A close-up exploration of flower petals, using soft watercolor washes to convey their fragility and beauty.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water7], year: "2024", medium: "Watercolor on Paper", width: 900, height: 900 },
    { id: 26, title: "Abstract Landscape", story: "An abstract interpretation of a landscape, where colors and shapes blend to evoke a feeling rather than a specific place.", mainCategory: 'Paper Art', subCategory: 'Watercolor', images: [Water8], year: "2023", medium: "Watercolor", width: 1200, height: 800 },

    // Mandala
    { id: 27, title: "Cosmic Balance", story: "A complex mandala drawn with fine-line pens, representing the balance and harmony of the universe. Each layer unfolds to reveal intricate patterns.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela1], year: "2024", medium: "Ink on Paper", width: 1080, height: 1080 },
    { id: 28, title: "Floral Mandala", story: "This mandala integrates floral elements into its geometric design, symbolizing growth, beauty, and the cyclical nature of life.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela2], year: "2023", medium: "Ink and Pencil", width: 1080, height: 1080 },
    { id: 29, title: "Oceanic Harmony", story: "Inspired by the rhythmic patterns of ocean waves, this blue-toned mandala evokes a sense of calm and fluidity.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela3], year: "2024", medium: "Ink on Paper", width: 1080, height: 1080 },
    { id: 30, title: "Sun and Moon", story: "A dual-themed mandala that represents the interplay of light and darkness, day and night, captured in a unified, circular design.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela4], year: "2023", medium: "Ink and Gold Leaf", width: 1080, height: 1080 },
    { id: 31, title: "Geometric Meditation", story: "A purely geometric mandala designed to aid in meditation. Its repetitive, symmetrical patterns help focus the mind and calm the spirit.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela5], year: "2024", medium: "Fine-Line Pen", width: 1080, height: 1080 },
    { id: 32, title: "Heart Chakra Mandala", story: "A green and pink mandala designed to represent the heart chakra, symbolizing love, compassion, and emotional healing.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela6], year: "2023", medium: "Ink and Colored Pencil", width: 1080, height: 1080 },
    { id: 33, title: "Labyrinth of Thoughts", story: "An intricate, maze-like mandala that represents the complexity of the human mind. Drawing this piece was a meditative journey in itself.", mainCategory: 'Paper Art', subCategory: 'Mandala', images: [Mandela7], year: "2024", medium: "Ink on Paper", width: 1080, height: 1080 },

    // Quick Sketches
    { id: 34, title: "Mango Fresh - The Original Idea", story: "The very first sketch that sparked the 'Mango Fresh' mascot. A quick, energetic drawing on paper to capture the initial concept before taking it to the digital realm.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [MangoFreshSketch], year: "2025", medium: "Pencil on Paper", width: 800, height: 800 },
    { id: 35, title: "Anatomy Study", story: "A quick sketch from a life drawing session, focusing on capturing the gesture and form of the human figure in a limited time.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch1], year: "2023", medium: "Charcoal Sketch", width: 800, height: 1000 },
    { id: 36, title: "Architectural Detail", story: "A sketch of an interesting architectural element found during a walk. The focus was on capturing the lines, shadows, and textures of the structure.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch2], year: "2024", medium: "Pen and Ink Sketch", width: 900, height: 900 },
    { id: 37, title: "Character Concept", story: "An early concept sketch for a fantasy character, exploring different costume and accessory ideas.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch3], year: "2023", medium: "Pencil Sketch", width: 800, height: 1000 },
    { id: 38, title: "Still Life with Fruit", story: "A quick still life sketch to study form, light, and composition using simple objects.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch4], year: "2024", medium: "Pencil on Paper", width: 1000, height: 800 },
    { id: 39, title: "Expressive Hands", story: "A study of hands in various poses, aiming to capture their expressive and dynamic nature through quick, confident lines.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch5], year: "2023", medium: "Pencil Sketch", width: 900, height: 900 },
    { id: 40, title: "Animal Sketch", story: "A rapid sketch of an animal in motion, focusing on capturing its energy and movement rather than precise detail.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch6], year: "2024", medium: "Pencil on Sketchbook", width: 1000, height: 800 },
    { id: 41, title: "Café Scene", story: "A sketch done on-location at a local café, capturing the ambiance and the people in a candid, observational style.", mainCategory: 'Paper Art', subCategory: 'Sketching', images: [Sketch7], year: "2023", medium: "Pen on Napkin", width: 900, height: 900 },

    // Hand Lettering
    { id: 42, title: "Inspirational Quote", story: "A beautifully lettered quote designed to inspire and uplift. This piece combines different lettering styles to create a dynamic and visually engaging composition.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing1], year: "2024", medium: "Brush Pen on Paper", width: 1080, height: 1080 },
    { id: 43, title: "Calligraphy Practice", story: "A practice sheet showcasing various calligraphic scripts and flourishes. A testament to the discipline and artistry of traditional lettering.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing2], year: "2023", medium: "Ink and Nib on Paper", width: 1200, height: 800 },
    { id: 44, title: "Custom Nameplate", story: "A personalized nameplate created with elegant, flowing script. A perfect example of how hand lettering can add a personal touch.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing3], year: "2024", medium: "Ink on Cardstock", width: 1000, height: 600 },
    { id: 45, title: "Modern Typography", story: "An exploration of modern, bold lettering styles. This piece plays with letterforms and composition to create a strong visual statement.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing4], year: "2023", medium: "Marker on Paper", width: 1080, height: 1080 },
    { id: 46, title: "Elegant Script", story: "A piece dedicated to the beauty of classic script lettering, with careful attention to consistent slant, spacing, and flourishing.", mainCategory: 'Paper Art', subCategory: 'Hand Lettering', images: [Writing5], year: "2024", medium: "Ink on Paper", width: 1200, height: 800 },

    // Pastel Colors
    { id: 47, title: "Sunset Over the Hills", story: "A landscape created with soft pastels to capture the warm, fleeting colors of a sunset. The blending of colors creates a dreamy, atmospheric effect.", mainCategory: 'Paper Art', subCategory: 'Pastel Colors', images: [Pastel1], year: "2023", medium: "Soft Pastels on Paper", width: 1200, height: 800 },
    { id: 48, title: "Still Life in Pastel", story: "A vibrant still life that uses the rich, blendable nature of oil pastels to create texture and depth, making the subjects appear almost tangible.", mainCategory: 'Paper Art', subCategory: 'Pastel Colors', images: [Pastel2], year: "2024", medium: "Oil Pastels on Canvas Paper", width: 1000, height: 800 },

    // Art3D
    { id: 49, title: "Pop-Up Flower Garden", story: "A three-dimensional paper art piece where a garden of flowers pops up from the page. Each element is cut and folded by hand to create a surprising and delightful effect.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D1], year: "2024", medium: "Papercraft, Kirigami", width: 1000, height: 800 },
    { id: 50, title: "Layered Mountainscape", story: "A landscape created from multiple layers of colored paper, cut and spaced to create a sense of depth and perspective. A modern take on a classic diorama.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D2], year: "2023", medium: "Layered Paper Art", width: 1200, height: 900 },
    { id: 51, title: "Quilled Abstract", story: "An abstract design made using the art of quilling, where strips of paper are rolled, shaped, and glued together to create intricate decorative designs.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D3], year: "2024", medium: "Paper Quilling", width: 900, height: 900 },
    { id: 52, title: "Origami Sculpture", story: "A complex geometric sculpture folded from a single sheet of paper, showcasing the mathematical beauty and precision of origami.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D4], year: "2023", medium: "Origami", width: 900, height: 900 },
    { id: 53, title: "Shadow Box Story", story: "A miniature scene built inside a shadow box, using cut paper figures and objects to tell a tiny, magical story.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D5], year: "2024", medium: "Paper Diorama", width: 1000, height: 1000 },
    { id: 54, title: "Paper Cut Lightbox", story: "A multi-layered paper cut scene that comes to life when backlit, creating a beautiful interplay of light and shadow.", mainCategory: 'Paper Art', subCategory: 'Art3D', images: [Art3D6], year: "2023", medium: "Papercutting, Lightbox", width: 1000, height: 1000 },

    // Cartoon Portrait
    { id: 55, title: "Stylized Self-Portrait", story: "A fun and stylized self-portrait done in a cartoon style, exaggerating features to create a playful and unique likeness.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon1], year: "2024", medium: "Markers and Ink", width: 900, height: 900 },
    { id: 56, title: "Family Caricature", story: "A lighthearted caricature of a family, capturing their personalities and relationships in a humorous and affectionate way.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon2], year: "2023", medium: "Colored Pencils", width: 1200, height: 900 },
    { id: 57, title: "Anime-Inspired Character", story: "A portrait of a character inspired by Japanese anime, featuring large, expressive eyes and dynamic hair.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon3], year: "2024", medium: "Ink and Alcohol Markers", width: 900, height: 1000 },
    { id: 58, title: "Pet Portrait in Cartoon Style", story: "An adorable cartoon version of a beloved pet, capturing its quirky personality and charm.", mainCategory: 'Paper Art', subCategory: 'CartoonPortrait', images: [Cartoon4], year: "2023", medium: "Digital on Paper (Printed)", width: 900, height: 900 },

    // Handmade
    { id: 59, title: "Custom Painted Phone Cover", story: "A unique, hand-painted phone cover that turns an everyday object into a piece of personal art. A creative fusion of craft and technology.", mainCategory: 'Paper Art', subCategory: 'Handmade', images: [PhoneCover], year: "2024", medium: "Acrylic on Plastic", width: 600, height: 1200 },
    { id: 60, title: "Embroidered Hoop Art", story: "A piece of art created with a needle and thread. This embroidered landscape uses different stitches and colors to 'paint' a scene on fabric.", mainCategory: 'Paper Art', subCategory: 'Handmade', images: [SewingArt], year: "2023", medium: "Thread on Fabric", width: 900, height: 900 },

    // Oil Colors
    { id: 61, title: "Impasto Landscape", story: "A landscape painting using thick, textured strokes of oil paint (impasto) to create a sense of ruggedness and depth. The light catches the texture, bringing the scene to life.", mainCategory: 'Paper Art', subCategory: 'OilColors', images: [Oil1], year: "2024", medium: "Oil on Canvas Board", width: 1200, height: 900 },
    { id: 62, title: "Portrait in Oil", story: "A classic portrait painted with oils, focusing on capturing a realistic skin tone and the subtle play of light and shadow. The slow-drying nature of oils allows for smooth, seamless blending.", mainCategory: 'Paper Art', subCategory: 'OilColors', images: [Oil2], year: "2023", medium: "Oil on Canvas", width: 800, height: 1000 },

    // Pencil Colors
    { id: 63, title: "Hyperrealistic Eye", story: "A detailed study of a human eye using colored pencils. The goal was to achieve hyperrealism by layering dozens of colors to create depth, reflection, and lifelike texture.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors1], year: "2024", medium: "Colored Pencils on Bristol", width: 1080, height: 1080 },
    { id: 64, title: "Vibrant Bird", story: "A drawing of an exotic bird, using a wide palette of colored pencils to capture its vibrant and iridescent plumage.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors2], year: "2023", medium: "Colored Pencils", width: 900, height: 900 },
    { id: 65, title: "Botanical Illustration", story: "A realistic illustration of a flower, focusing on scientific accuracy and aesthetic beauty. Colored pencils allow for precise detail and rich, layered color.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors3], year: "2024", medium: "Colored Pencils on Paper", width: 800, height: 1000 },
    { id: 66, title: "Food Illustration", story: "A delicious-looking illustration of a pastry, using colored pencils to render the flaky textures and glossy glazes.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors4], year: "2023", medium: "Colored Pencils", width: 900, height: 900 },
    { id: 67, title: "Fantasy Creature", story: "A creature from imagination, brought to life with colored pencils. The medium allows for building up fantastical textures like scales, fur, and glowing elements.", mainCategory: 'Paper Art', subCategory: 'PencilColors', images: [PencelColors5], year: "2024", medium: "Colored Pencils on Toned Paper", width: 900, height: 1000 },

    // Pixel Art
    { id: 68, title: "8-Bit Hero", story: "A character sprite designed in the classic 8-bit pixel art style, reminiscent of vintage video games. Every pixel is placed with intention.", mainCategory: 'Paper Art', subCategory: 'PixelArt', images: [Pixel1], year: "2023", medium: "Pixel Art (Digital, on Grid)", width: 500, height: 500 },
    { id: 69, title: "Pixelated Sunset", story: "A landscape scene created with a limited color palette and low resolution, capturing the essence of a sunset in a stylized, retro aesthetic.", mainCategory: 'Paper Art', subCategory: 'PixelArt', images: [Pixel2], year: "2024", medium: "Pixel Art", width: 800, height: 600 }

];

// --- Category Definitions (No changes needed) ---
const mainCategories: ('Digital Art' | 'Paper Art')[] = ['Digital Art', 'Paper Art'];
const subCategories = {
    'Digital Art': ['All', 'Digital Illustration', 'Logos', 'Invitations', 'Posters & Flyers'],
    'Paper Art': ['All', 'Pencil Portrait', 'Watercolor', 'Mandala', 'Sketching', 'Hand Lettering', 'Pastel Colors', 'Art3D', 'CartoonPortrait', 'Handmade', 'OilColors', 'PencilColors', 'PixelArt']
};

// --- ArtCard Component (No changes needed) ---
const ArtCard = React.memo(({ art, onClick }: { art: ArtPiece; onClick: () => void }) => {
    return (
        <div
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white/60 dark:bg-gray-800/60 
                       backdrop-blur-sm border border-gray-200 dark:border-gray-700 
                       flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]"
            onClick={onClick}
        >
            {/* The container is now a square using aspect-square */}
            <div className="w-full h-full aspect-square object-cover overflow-hidden bg-gray-100 dark:bg-gray-700/50 p-3">
                <img
                    src={art.images[0]}
                    alt={art.title}
                    // The image fills the square container, and object-cover prevents distortion
                    className="w-full h-full aspect-square object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    // srcSet and sizes are useful for responsive images
                    srcSet={`${art.images[0]} 480w, ${art.images[0]} 800w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 flex items-center 
                                justify-center rounded-lg">
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
});

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
        if (activeSubCategory === 'All') {
            return mainFiltered;
        }
        return mainFiltered.filter(art => art.subCategory === activeSubCategory);
    }, [activeMainCategory, activeSubCategory]);

    return (
        <section id="art" ref={ref} className="py-10 sm:py-16 md:py-20 bg-[#fffaf5] dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">My Art Gallery</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">A canvas for my thoughts, where every pixel tells a story.</p>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Filters */}
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

                {/* --- FULLY RESPONSIVE GRID --- */}
                <div
                    className={`
                        grid gap-2 md:gap-8 
                        grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
                        items-start aspect-square
                        ${isVisible ? 'opacity-100' : 'opacity-100'}
                        `}
                >
                    {filteredArtworks.map((art) => (
                        <ArtCard key={art.id} art={art} onClick={() => setSelectedArt(art)} />
                    ))}
                </div>
            </div>

            {/* Modal */}
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
