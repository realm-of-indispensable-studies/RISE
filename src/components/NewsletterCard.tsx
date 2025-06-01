import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface NewsletterCardProps {
  title: string;
  frequency: string;
  description: string;
  hasPreview?: boolean;
  link?: string;
}

const NewsletterCard = ({ title, frequency, description, hasPreview = false, link }: NewsletterCardProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="bg-gray-800 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gray-200 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-gray-200 font-medium">
            {frequency}
          </p>
        </div>
        <button
          onClick={handleSubscribe}
          className={`ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            isSubscribed
              ? 'bg-green-600 border-green-600 text-white'
              : 'border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600'
          }`}
        >
          <Plus 
            size={16} 
            className={`transform transition-transform duration-200 ${
              isSubscribed ? 'rotate-45' : ''
            }`}
          />
        </button>
      </div>
      
      <p className="text-white italic text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {hasPreview && (
        <a 
          href={link}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 font-medium"
        >
          Preview →
        </a>
      )}
    </div>
  );
};

export default NewsletterCard;