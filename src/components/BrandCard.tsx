import React from 'react';

interface BrandCardProps {
  image: string;
  title: string;
  tagline: string;
  onClick: () => void;
}

const BrandCard: React.FC<BrandCardProps> = ({ image, title, tagline, onClick }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
      onClick={onClick} // <-- Make the whole card clickable
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 
          className="text-xl font-bold text-white hover:text-blue-800 transition-colors duration-200 cursor-pointer mb-2"
        >
          {title}
        </h3>
        <p className="text-white text-sm leading-relaxed">
          {tagline}
        </p>
      </div>
    </div>
  );
};

export default BrandCard;