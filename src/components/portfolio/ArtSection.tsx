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
import infographic from '../../assets/images/DigitalArt/Infographics/infographics1.png';

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

    // Pencil Portrait
    {
        id: 14,
        title: "Taylor Swift Portrait",
        story: "A graphite pencil portrait of the iconic singer-songwriter, Taylor Swift. This piece focuses on capturing her distinct features and expression, using careful shading to create a realistic and recognizable likeness.",
        mainCategory: 'Paper Art',
        subCategory: 'Pencil Portrait',
        images: [Portrait1],
        year: "2019",
        medium: "Graphite on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 15,
        title: "Chic Bob Haircut",
        story: "A portrait study focusing on hair texture and light. This drawing captures the sleek, glossy look of a modern bob haircut, using fine pencil strokes and blending to create a sense of realism and style.",
        mainCategory: 'Paper Art',
        subCategory: 'Pencil Portrait',
        images: [Portrait2],
        year: "2020",
        medium: "Pencil on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 16,
        title: "Anime Anguish",
        story: "A high-contrast, dramatic portrait inspired by anime and manga. This piece uses solid black ink and sharp lines to convey a powerful sense of anguish and inner turmoil, focusing on expression over realism.",
        mainCategory: 'Paper Art',
        subCategory: 'Pencil Portrait',
        images: [Portrait4],
        year: "2021",
        medium: "Ink and Pencil on Paper",
        width: 1000,
        height: 900
    },
    {
        id: 17,
        title: "Tears of an Anime Girl",
        story: "An emotional anime-style drawing of a crying girl. The piece uses simple shading and clean lines to capture a moment of sadness and vulnerability, characteristic of the shōjo manga style.",
        mainCategory: 'Paper Art',
        subCategory: 'Pencil Portrait',
        images: [Portrait5],
        year: "2021",
        medium: "Pencil on Paper",
        width: 900,
        height: 1000
    },
    {
        id: 18,
        title: "Girl with Glasses Sketch",
        story: "A simple and charming line-art sketch of a girl with glasses. This piece has a clean, illustrative style, focusing on capturing character and personality with minimal shading.",
        mainCategory: 'Paper Art',
        subCategory: 'Pencil Portrait',
        images: [Portrait3],
        year: "2019",
        medium: "Pencil Sketch",
        width: 900,
        height: 1000
    },
    // Watercolor
    {
        id: 19,
        title: "30 Days of Color",
        story: "A color study project, '30 Days of Colors,' where each day is represented by a unique watercolor swatch. This piece is a visual journal of color exploration, showcasing a beautiful spectrum of blended hues.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water1],
        year: "2022",
        medium: "Watercolor on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 20,
        title: "Galaxy Wolf",
        story: "A surreal watercolor painting where the silhouette of a howling wolf contains a vibrant, cosmic scene. This piece merges the wild spirit of the wolf with the infinite beauty of the galaxy.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water2],
        year: "2023",
        medium: "Watercolor and Ink",
        width: 900,
        height: 1000
    },
    {
        id: 21,
        title: "Drinking the Cosmos",
        story: "A conceptual piece where a person is 'drinking' the universe from a glass. The body is filled with galaxies and planets, symbolizing how we are all made of stardust and connected to the cosmos.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water3],
        year: "2023",
        medium: "Watercolor and Ink",
        width: 900,
        height: 1000
    },
    {
        id: 22,
        title: "Forest Mind",
        story: "A double exposure style painting where a woman's silhouette is filled with a serene, starry forest scene. This artwork explores the deep connection between human nature and the natural world.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water4],
        year: "2022",
        medium: "Watercolor and Ink",
        width: 900,
        height: 1000
    },
    {
        id: 23,
        title: "Moonlit Mountains",
        story: "A dramatic black and white painting of mountains under a full moon. The stark contrast and the reflection on the water create a powerful and serene nocturnal landscape.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water5],
        year: "2021",
        medium: "Ink/Gouache on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 24,
        title: "Up in the Air",
        story: "A beautiful depiction of a starry night sky contained within a circular frame. The deep blues and sparkling stars evoke a sense of wonder and the infinite beauty of the universe.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water6],
        year: "2022",
        medium: "Watercolor and Ink",
        width: 900,
        height: 1100
    },
    {
        id: 25,
        title: "Memory Lane - Watercolor",
        story: "A heartfelt piece of calligraphy set against a dreamy, watercolor background. The words express a longing to revisit cherished moments, with the soft, blended colors enhancing the emotional depth.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water7],
        year: "2024",
        medium: "Watercolor and Ink",
        width: 900,
        height: 1200
    },
    {
        id: 26,
        title: "Watercolor Arabic Calligraphy",
        story: "A piece that blends the fluidity of watercolor with the elegance of Arabic calligraphy. The quote is written over a vibrant, abstract background, creating a beautiful harmony between words and color.",
        mainCategory: 'Paper Art',
        subCategory: 'Watercolor',
        images: [Water8],
        year: "2022",
        medium: "Watercolor and Ink",
        width: 900,
        height: 1100
    },

    // --- Mandala / Zentangle ---
    {
        id: 27,
        title: "Celestial Moon",
        story: "A crescent moon filled with intricate zentangle patterns, hanging in a starry night sky. This piece combines the serene beauty of the cosmos with the meditative practice of pattern drawing.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela1],
        year: "2021",
        medium: "Ink on Paper",
        width: 900,
        height: 1000
    },
    {
        id: 28,
        title: "Pattern Patchwork",
        story: "An exploration of various zentangle patterns contained within geometric shapes. Each section offers a different texture and design, creating a visually engaging patchwork of abstract art.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela2],
        year: "2020",
        medium: "Ink on Paper",
        width: 1200,
        height: 900
    },
    {
        id: 29,
        title: "Yin & Yang Abstract",
        story: "A high-contrast abstract piece inspired by the concept of Yin and Yang. The interplay of solid black and intricate white space creates a sense of balance and dynamic flow.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela3],
        year: "2020",
        medium: "Ink on Paper",
        width: 1000,
        height: 1000
    },
    {
        id: 30,
        title: "Zentangle Sampler",
        story: "A rich composition showcasing a variety of dense and detailed zentangle patterns. This piece serves as a sampler of different techniques, from dots and waves to complex geometric fills.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela4],
        year: "2021",
        medium: "Ink on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 31,
        title: "Rodina - A Gift of Love",
        story: "A personalized nameplate for 'Rodina' (رودينا), where each letter is filled with unique mandala patterns. This piece combines lettering, Arabic script, and zentangle art to create a heartfelt and decorative gift.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela5],
        year: "2021",
        medium: "Ink on Paper",
        width: 1200,
        height: 800
    },
    {
        id: 32,
        title: "Nada - A Gift of Love",
        story: "A custom-made artwork for 'Nada' (ندى). The letters of the name are intricately decorated with different zentangle designs, making it a unique and personal piece that celebrates an individual.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela6],
        year: "2021",
        medium: "Ink on Paper",
        width: 1200,
        height: 800
    },
    {
        id: 33,
        title: "Mama - A Gift of Love",
        story: "A loving tribute to 'Mama'. Each letter is a canvas for detailed and beautiful mandala patterns, with a heart at the center of the message 'Love You'. A piece made with affection and intricate care.",
        mainCategory: 'Paper Art',
        subCategory: 'Mandala',
        images: [Mandela7],
        year: "2021",
        medium: "Ink on Paper",
        width: 1200,
        height: 800
    },

    // Quick Sketches
    {
        id: 34,
        title: "Mango Fresh - The Original Idea",
        story: "The very first sketch that sparked the 'Mango Fresh' mascot. A quick, energetic drawing on paper to capture the initial concept and personality before taking it to the digital realm.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [MangoFreshSketch],
        year: "2024",
        medium: "Pencil on Toned Paper",
        width: 900,
        height: 900
    },
    {
        id: 35,
        title: "Girl Under the Tree",
        story: "A simple and serene sketch depicting a girl finding shade under a tree. This piece captures a quiet moment of peace and connection with nature.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch1],
        year: "2020",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    {
        id: 36,
        title: "Playful Character Sketch",
        story: "A quick and expressive sketch of a cartoon character with a playful pose. This drawing focuses on capturing movement and personality through simple, confident lines.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch2],
        year: "2021",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    {
        id: 37,
        title: "My Person",
        story: "A character sketch accompanied by the heartfelt quote. A simple drawing that conveys a deep emotional message.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch3],
        year: "2021",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    {
        id: 38,
        title: "If I Could Time Travel",
        story: "A touching sketch that illustrates the idea of time travel to relive a cherished moment. The drawing and quote work together to evoke a sense of nostalgia and longing.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch4],
        year: "2021",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    {
        id: 39,
        title: "Broccoli Character Studies",
        story: "A fun and imaginative page of sketches where broccoli is turned into different characters. An exercise in creativity, finding personality in everyday objects.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch5],
        year: "2021",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    {
        id: 40,
        title: "Rose Sketch",
        story: "A delicate and simple sketch of a single rose, focusing on the elegant lines and form of the flower. A classic study in botanical drawing.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch6],
        year: "2021",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    {
        id: 41,
        title: "You'll Get Through This",
        story: "An uplifting and supportive sketch of two people together, with a message of encouragement. This drawing conveys a sense of solidarity and hope through a simple, heartfelt illustration.",
        mainCategory: 'Paper Art',
        subCategory: 'Sketching',
        images: [Sketch7],
        year: "2021",
        medium: "Pencil on Lined Paper",
        width: 900,
        height: 1100
    },
    // Hand Lettering
    {
        id: 42,
        title: "Watercolor Arabic Quote",
        story: "A piece that blends the fluidity of watercolor with the elegance of Arabic calligraphy. The quote by Cathrine Håkon (translated by Noha RUSHDI) is written over a vibrant, abstract background, creating a beautiful harmony between words and color.",
        mainCategory: 'Paper Art',
        subCategory: 'Hand Lettering',
        images: [Writing1],
        year: "2022",
        medium: "Ink and Watercolor on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 43,
        title: "Memory Lane - A Tribute",
        story: "A heartfelt piece of calligraphy dedicated to a cherished memory. The words, set against a dreamy, galaxy-like background, express a longing to revisit moments with someone special. The feather adds a touch of lightness to the deep emotions.",
        mainCategory: 'Paper Art',
        subCategory: 'Hand Lettering',
        images: [Writing2],
        year: "2024",
        medium: "Ink and Watercolor",
        width: 900,
        height: 1200
    },
    {
        id: 44,
        title: "Words I Might Never Say",
        story: "A raw and honest handwritten letter expressing unspoken feelings. This piece captures the vulnerability of personal thoughts, written neatly on lined paper, making it a relatable and intimate work of art.",
        mainCategory: 'Paper Art',
        subCategory: 'Hand Lettering',
        images: [Writing3],
        year: "2021",
        medium: "Ink on Lined Paper",
        width: 900,
        height: 1200
    },
    {
        id: 45,
        title: "A Letter from the Heart",
        story: "An emotional and personal letter written in beautiful Arabic handwriting. The piece conveys deep feelings and reflections, with the natural flow of the script adding to its authenticity and emotional weight.",
        mainCategory: 'Paper Art',
        subCategory: 'Hand Lettering',
        images: [Writing4],
        year: "2021",
        medium: "Ink on Paper",
        width: 900,
        height: 1200
    },
    {
        id: 46,
        title: "The Last Time",
        story: "A poignant and thought-provoking quote rendered in elegant, classic calligraphy. The message serves as a powerful reminder to cherish every moment, beautifully captured with clean lines and a minimalist aesthetic.",
        mainCategory: 'Paper Art',
        subCategory: 'Hand Lettering',
        images: [Writing5],
        year: "2021",
        medium: "Pencil/Ink on Lined Paper",
        width: 900,
        height: 1200
    },

    // --- Pastel Colors ---
    {
        id: 47,
        title: "Four Seasons Tree",
        story: "A creative depiction of the four seasons, represented by a single tree divided into four colorful panels. Using soft pastels, this artwork captures the essence of spring, summer, autumn, and winter in one cohesive and vibrant image.",
        mainCategory: 'Paper Art',
        subCategory: 'Pastel Colors',
        images: [Pastel1],
        year: "2021",
        medium: "Soft Pastels on Paper",
        width: 1200,
        height: 900
    },
    {
        id: 48,
        title: "Sunset Sail",
        story: "A serene seascape at sunset, brought to life with the warm, rich tones of oil pastels. The smooth blending of colors captures the tranquil glow of the sun on the water as a sailboat glides by, creating a peaceful and picturesque scene.",
        mainCategory: 'Paper Art',
        subCategory: 'Pastel Colors',
        images: [Pastel2],
        year: "2022",
        medium: "Oil Pastels on Paper",
        width: 1200,
        height: 900
    },

    // Art3D
    {
        id: 49,
        title: "3D Bell Pepper Study",
        story: "An exercise in photorealism, this piece uses careful shading and highlighting to make a simple bell pepper appear three-dimensional. The focus was on capturing the smooth, reflective texture of the pepper's skin.",
        mainCategory: 'Paper Art',
        subCategory: 'Art3D',
        images: [Art3D1],
        year: "2022",
        medium: "Graphite Pencil on Paper",
        width: 800,
        height: 1000
    },
    {
        id: 50,
        title: "The Perpetual Pour",
        story: "This drawing captures the dynamic moment of water being poured, creating an illusion of movement and transparency. It's a study in how to represent clear, moving liquids using only graphite.",
        mainCategory: 'Paper Art',
        subCategory: 'Art3D',
        images: [Art3D2],
        year: "2023",
        medium: "Pencil on Paper",
        width: 800,
        height: 1000
    },
    {
        id: 51,
        title: "Impossible Cube",
        story: "An exploration of optical illusions and impossible geometry. This drawing challenges the viewer's perception of space and dimension, creating a structure that could not exist in the real world.",
        mainCategory: 'Paper Art',
        subCategory: 'Art3D',
        images: [Art3D3],
        year: "2023",
        medium: "Ink and Pencil on Toned Paper",
        width: 900,
        height: 900
    },
    {
        id: 52,
        title: "Floating Pyramid Steps",
        story: "This piece uses precise perspective and shadow to create the illusion that steps are floating above the paper. It's a playful trick of the eye that demonstrates the power of shading.",
        mainCategory: 'Paper Art',
        subCategory: 'Art3D',
        images: [Art3D4],
        year: "2022",
        medium: "Pencil on Paper",
        width: 1000,
        height: 800
    },
    {
        id: 53,
        title: "Fundamental Shapes in 3D",
        story: "A foundational study of rendering basic geometric shapes—a cone, cylinder, sphere, and cube—in three dimensions. This exercise is crucial for understanding how light interacts with different forms.",
        mainCategory: 'Paper Art',
        subCategory: 'Art3D',
        images: [Art3D5],
        year: "2022",
        medium: "Graphite Pencil Study",
        width: 800,
        height: 1000
    },
    {
        id: 54,
        title: "Airplane Sketch in Perspective",
        story: "A technical sketch of an airplane, focusing on creating a sense of depth and three-dimensionality through perspective drawing. The blue highlights add a touch of style to the technical rendering.",
        mainCategory: 'Paper Art',
        subCategory: 'Art3D',
        images: [Art3D6],
        year: "2023",
        medium: "Pencil and Pen on Paper",
        width: 1200,
        height: 800
    },
    // Cartoon Portrait
    {
        id: 55,
        title: "Friends Selfie Moment",
        story: "A vibrant cartoon portrait capturing the joy and friendship of a group of friends taking a selfie. This piece uses bright colors and expressive characters to celebrate modern connections and happy memories.",
        mainCategory: 'Paper Art',
        subCategory: 'CartoonPortrait',
        images: [Cartoon1],
        year: "2022",
        medium: "Colored Pencils and Ink",
        width: 900,
        height: 1100
    },
    {
        id: 56,
        title: "Nostalgic Afternoon",
        story: "A faceless portrait set in a nostalgic, vintage-inspired room. The scene, with its gramophone and traditional decor, evokes a sense of calm and timeless storytelling, leaving the character's emotions to the viewer's imagination.",
        mainCategory: 'Paper Art',
        subCategory: 'CartoonPortrait',
        images: [Cartoon2],
        year: "2021",
        medium: "Markers and Ink on Paper",
        width: 900,
        height: 1100
    },
    {
        id: 57,
        title: "Sisters in Style",
        story: "A minimalist and stylish faceless portrait of two friends or sisters. The focus is on the patterns of their clothing and the bond between them, conveyed through their closeness rather than facial expressions.",
        mainCategory: 'Paper Art',
        subCategory: 'CartoonPortrait',
        images: [Cartoon3],
        year: "2022",
        medium: "Colored Pencils and Markers",
        width: 900,
        height: 1100
    },
    {
        id: 58,
        title: "Anime Girl: Sketch to Color",
        story: "A side-by-side comparison showing the artistic process from a clean pencil sketch to a fully colored character. This piece, inspired by anime, highlights the transformation that color and shading bring to a drawing.",
        mainCategory: 'Paper Art',
        subCategory: 'CartoonPortrait',
        images: [Cartoon4],
        year: "2021",
        medium: "Pencil, Ink, and Markers",
        width: 1000,
        height: 900
    },
    // Handmade
    {
        id: 59,
        title: "Crocheted & Beaded Phone Case",
        story: "A unique phone case transformed into a piece of wearable art. This cover is hand-crocheted with soft wool yarn and meticulously decorated with beads, sequins, and a charming pom-pom, making it both beautiful and functional.",
        mainCategory: 'Paper Art',
        subCategory: 'Handmade',
        images: [PhoneCover],
        year: "2023",
        medium: "Wool Yarn, Beads, and Sequins",
        width: 700,
        height: 1400
    },
    {
        id: 60,
        title: "Embroidered Calligraphy",
        story: "A beautiful fusion of embroidery and Arabic calligraphy. This piece uses thread to 'write' the uplifting phrase 'إنما هي أيامٌ وتمضي، والموعد الجنة' (They are but days that will pass, and the appointment is Paradise), intertwined with floral embroidery that adds life and color to the words.",
        mainCategory: 'Paper Art',
        subCategory: 'Handmade',
        images: [SewingArt],
        year: "2022",
        medium: "Thread Embroidery on Paper",
        width: 900,
        height: 900
    },
    // Oil Colors
    {
        id: 61,
        title: "Let Flowers Bloom",
        story: "A vibrant oil painting of a tree in full bloom, created with thick, textured strokes (impasto) that give the flowers a three-dimensional feel. The piece is a celebration of spring and new beginnings.",
        mainCategory: 'Paper Art',
        subCategory: 'OilColors',
        images: [Oil1],
        year: "2022",
        medium: "Oil Paint on Paper",
        width: 900,
        height: 1200
    },
    {
        id: 62,
        title: "Cosmic Dreams",
        story: "A surreal and imaginative painting that combines celestial and human elements. Featuring a girl with a galaxy for a mind and a floral moon, this piece explores themes of dreams, identity, and the universe within us. The dark background makes the vibrant oil colors pop.",
        mainCategory: 'Paper Art',
        subCategory: 'OilColors',
        images: [Oil2],
        year: "2023",
        medium: "Oil on Canvas/Board",
        width: 900,
        height: 1300
    },
    // Pencil Colors
    {
        id: 63,
        title: "Geometric Mosaic",
        story: "An abstract piece inspired by stained glass, created using colored pencils. Each geometric segment is carefully shaded with a different color, creating a vibrant and harmonious mosaic effect.",
        mainCategory: 'Paper Art',
        subCategory: 'PencilColors',
        images: [PencelColors1],
        year: "2022",
        medium: "Colored Pencils on Paper",
        width: 1000,
        height: 900
    },
    {
        id: 64,
        title: "Zentangle Leaves",
        story: "A beautiful illustration that combines nature with intricate art. The leaves are filled with detailed zentangle patterns, and complemented by elegant Arabic calligraphy, creating a rich and meaningful composition.",
        mainCategory: 'Paper Art',
        subCategory: 'PencilColors',
        images: [PencelColors2],
        year: "2023",
        medium: "Colored Pencils and Ink",
        width: 900,
        height: 1100
    },
    {
        id: 65,
        title: "Two-Faced: Realism and Fantasy",
        story: "A surreal portrait that is split into two halves. One side shows a realistic eye and face, while the other explodes into a world of colorful zentangle patterns and floral designs, representing the contrast between our outer self and inner creativity.",
        mainCategory: 'Paper Art',
        subCategory: 'PencilColors',
        images: [PencelColors3],
        year: "2022",
        medium: "Pencil, Ink, and Colored Pencils",
        width: 900,
        height: 1000
    },
    {
        id: 66,
        title: "Bohemian Girl",
        story: "A portrait of a girl with flowing orange hair and a bohemian-style headband. The use of colored pencils creates a soft, warm texture, especially in the hair, giving the character a gentle and free-spirited look.",
        mainCategory: 'Paper Art',
        subCategory: 'PencilColors',
        images: [PencelColors4],
        year: "2021",
        medium: "Colored Pencils on Paper",
        width: 900,
        height: 1000
    },
    {
        id: 67,
        title: "Colorful Dreamcatcher",
        story: "A vibrant drawing of a dreamcatcher, brought to life with a rainbow of colored pencils. Each feather is uniquely colored, symbolizing a collection of bright and beautiful dreams.",
        mainCategory: 'Paper Art',
        subCategory: 'PencilColors',
        images: [PencelColors5],
        year: "2023",
        medium: "Colored Pencils and Ink",
        width: 900,
        height: 1100
    },
    // Pixel Art
    {
        id: 68,
        title: "Pixel Penguin Love",
        story: "An adorable pixel art penguin holding a heart, created on grid paper. This piece, dated and signed 'NOHA', combines the charm of retro gaming aesthetics with a sweet, modern character design.",
        mainCategory: 'Paper Art',
        subCategory: 'PixelArt',
        images: [Pixel1],
        year: "2025",
        medium: "Markers on Grid Paper",
        width: 900,
        height: 1100
    },
    {
        id: 69,
        title: "Pixel Art Angel",
        story: "A beautiful and serene angel created in a two-tone pixel art style. This piece, personalized with the name 'NOHA', showcases how simple grids and colors can be used to create an elegant and classic image.",
        mainCategory: 'Paper Art',
        subCategory: 'PixelArt',
        images: [Pixel2],
        year: "2022",
        medium: "Ink/Marker on Grid Paper",
        width: 1200,
        height: 900
    },

    // --- Infographics & Presentations ---
    {
        id: 70, // تأكد من أن هذا الرقم فريد
        title: "Modern Circular Infographic",
        story: "A clean and modern infographic template designed to present information clearly and effectively. This design uses a central circular element with four color-coded points, making complex data easy to digest and visually appealing for professional presentations.",
        mainCategory: 'Digital Art',
        subCategory: 'Infographics & Presentations',
        images: [infographic],
        year: "2024",
        medium: "Presentation Slide Design",
        width: 1920,
        height: 1080
    }
];

// --- Category Definitions (No changes needed) ---
const mainCategories: ('Digital Art' | 'Paper Art')[] = ['Digital Art', 'Paper Art'];
const subCategories = {
    'Digital Art': ['All', 'Digital Illustration', 'Logos', 'Invitations', 'Posters & Flyers', 'Infographics & Presentations'],
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
