
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import About_Us from '../../public/aboutus.png'
import club_de_rise from '../../public/club-de-rise.png'
import global from '../../public/global.png'
import mutli from '../../public/multi.png'
import newsletters from '../../public/newsletter.png'
import internships from '../../public/internship.png'


const Gallery = () => {
  const [openPage, setOpenPage] = useState<string | null>(null);
  const navigate = useNavigate();

  const galleryImages = [
    {
      src: mutli,
      alt: "Multi-disciplinary Network",
      // category: "Conference"
      nav: 'multi-disciplinary',
    },
    {
      src: club_de_rise,
      alt: "Club de RISE",
      // category: "Panel Discussion"
      nav: 'club-de-rise',
    },
    {
      src: newsletters,
      alt: "Newsletter",
      nav: 'news-letters',
      // category: "Research"
    },
    {
      src: global,
      alt: "Global Grad",
      category: "Comming soon..."
    },
    {
      src: About_Us,
      alt: "About us",
      // category: "Research"
      nav:"/about-us"
    },
    {
      src: internships,
      alt: "Interships",
      category: "Comming soon..."
    },
    
  ];

  const handleOnclick = (nav: string) => {
    navigate(nav);
  }

  return (
    <section id='network' className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Ventures</span>
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing moments of collaboration, innovation, and empowerment from our community.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => { handleOnclick(image.nav) }}              
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-blue-400 text-sm font-semibold mb-1">
                    {image.category}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {image.alt}
                  </h3>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 transition-colors duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Gallery;
