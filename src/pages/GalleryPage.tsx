import { useState } from 'react';
import { X } from 'lucide-react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';
import img15 from '../images/15.jpg';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const images = [
    { url: img1, category: 'Food' },
    { url: img2, category: 'Food' },
    { url: img3, category: 'Food' },
    { url: img4, category: 'Food' },
    { url: img5, category: 'Food' },
    { url: img6, category: 'Food' },
    { url: img7, category: 'Food' },
    { url: img8, category: 'Food' },
    { url: img9, category: 'Food' },
    { url: img10, category: 'Food' },
    { url: img11, category: 'Food' },
    { url: img12, category: 'Food' },
    { url: img13, category: 'Food' },
    { url: img14, category: 'Food' },
    { url: img15, category: 'Food' },
  ];

  const categories = ['All', 'Food'];

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <div className="bg-cream min-h-screen pt-15">
      <div
        className="relative h-80 bg-cover bg-center mb-16"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-xl">A Visual Journey Through Our Cuisine</p>
          </div>
        </div>
      </div>

      <div className="container-custom pb-20">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-secondary hover:bg-secondary-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery full view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
