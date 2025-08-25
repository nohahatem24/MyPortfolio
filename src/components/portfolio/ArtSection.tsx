/**
 * Art section component with modal overlays and pink/purple theme
 * Displays creative artwork with detailed modal views
 */

import React, { useState } from 'react';
import { Palette, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageModal } from '../ui/image-modal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ArtWork {
  title: string;
  medium: string;
  year: string;
  description: string;
  image: string;
  fullDescription: string;
}

export default function ArtSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedArtwork, setSelectedArtwork] = useState<ArtWork | null>(null);

  const artworks: ArtWork[] = [
    {
      title: 'Abstract Harmony',
      medium: 'Digital Art',
      year: '2023',
      description: 'A digital painting exploring the balance between chaos and order through organic shapes.',
      fullDescription: 'This digital painting represents the delicate balance between chaos and order in our daily lives. Using flowing organic shapes and a harmonious color palette, the piece invites viewers to find peace within complexity. Created using Procreate on iPad with custom brushes to achieve the organic textures.',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/1554344d-1865-4a69-978d-479e0030c7b4.jpg'
    },
    {
      title: 'Geometric Dreamcatcher',
      medium: 'Handmade Craft',
      year: '2022',
      description: 'A handcrafted dreamcatcher with a modern twist, combining traditional techniques with geometric patterns.',
      fullDescription: 'This unique dreamcatcher combines traditional Native American craftsmanship with contemporary geometric design. Hand-woven with natural cotton threads and adorned with wooden beads, it represents the intersection of cultural heritage and modern aesthetics. The geometric patterns symbolize the structured nature of dreams and aspirations.',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/ec0ada5d-858d-4a1c-af65-f422bf930d43.jpg'
    },
    {
      title: 'Ocean Whispers',
      medium: 'Watercolor',
      year: '2023',
      description: 'A watercolor painting capturing the serene beauty and movement of ocean waves.',
      fullDescription: 'Painted using traditional watercolor techniques on cold-pressed paper, this piece captures the ever-changing nature of ocean waves. The transparent layers of blue and teal create depth and movement, while the white spaces represent the foam and light dancing on the water surface. Inspired by early morning walks along the Mediterranean coast.',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/69acd34a-0eee-4a63-9a4a-a91fbb07836d.jpg'
    },
    {
      title: 'Ceramic Vessel',
      medium: 'Ceramics',
      year: '2022',
      description: 'A hand-thrown ceramic bowl with organic forms and a warm amber glaze.',
      fullDescription: 'Hand-thrown on the pottery wheel using stoneware clay, this vessel embodies the beauty of imperfection and organic form. The warm amber glaze was applied using traditional dipping techniques and fired at cone 6. The subtle variations in color and texture celebrate the unpredictable nature of the ceramic process.',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/59ed991b-25cd-43b0-8648-61bec0e6f73d.jpg'
    },
    {
      title: 'Botanical Embroidery',
      medium: 'Embroidery',
      year: '2023',
      description: 'Hand-embroidered botanical patterns inspired by native flora and geometric designs.',
      fullDescription: 'This embroidery piece features native Egyptian flora rendered in a contemporary style using traditional hand-stitching techniques. French knots, satin stitch, and chain stitch create texture and depth in the botanical elements. The geometric border adds a modern touch while maintaining the organic nature of the central motif.',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/4caa467b-84ec-4ca8-8331-5ad9d4342f6e.jpg'
    },
    {
      title: 'Mixed Media Composition',
      medium: 'Mixed Media',
      year: '2023',
      description: 'A layered artwork combining collage, painting, and digital elements to create depth and texture.',
      fullDescription: 'This experimental piece combines traditional collage techniques with acrylic painting and digital manipulation. Old magazine clippings, handmade paper, and painted elements are layered to create a complex narrative about modern communication. The final piece was photographed and enhanced digitally to emphasize the interplay between analog and digital mediums.',
      image: 'https://pub-cdn.sider.ai/u/U0NWHJ61Y0X/web-coder/688770f38f67a34944cfc801/resource/8aa5232c-af6d-4b4c-9e57-013a5045a9d6.jpg'
    }
  ];

  return (
    <section 
      id="art" 
      ref={ref}
      className="py-20 bg-[#fffaf5] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Art & Handmade Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring creativity beyond the digital realm through traditional art and handcrafted creations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork, index) => (
            <div 
              key={index} 
              className={`bg-white/60 dark:bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group backdrop-blur-sm ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${200 + index * 100}ms` 
              }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => setSelectedArtwork(artwork)}
                    variant="outline" 
                    className="bg-white/90 border-white text-gray-900 hover:bg-white transform hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Full Size
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{artwork.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <Palette className="h-4 w-4 text-pink-600 dark:text-purple-400" />
                  <span className="text-pink-600 dark:text-purple-400 font-semibold text-sm">{artwork.medium}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{artwork.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
            View Full Gallery
          </Button>
        </div>
      </div>

      {/* Artwork Detail Modal */}
      <ImageModal
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        image={selectedArtwork?.image || ''}
        title={selectedArtwork?.title || ''}
        description={selectedArtwork?.fullDescription || ''}
        details={{
          medium: selectedArtwork?.medium,
          year: selectedArtwork?.year
        }}
      />
    </section>
  );
}
