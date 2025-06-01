interface NewsItem {
  id: number;
  headline: string;
  description: string;
  views: string;
  date: string;
  image: string;
  category?: string;
}

interface NewsCardProps {
  news: NewsItem;
  isMobile?: boolean;
}

const NewsCard = ({ news, isMobile = false }: NewsCardProps) => {
  if (isMobile) {
    return (
      <article className="bg-gray-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={news.image}
            alt={news.headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{news.views} views</span>
            <span className="mx-2">•</span>
            <span>{news.date}</span>
          </div>
          
          <h2 className="text-lg font-bold forbes-black leading-tight mb-2 hover:forbes-red cursor-pointer transition-colors">
            {news.headline}
          </h2>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {news.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-gray-900 border-b border-gray-200 py-6 transition-colors">
      <div className="flex items-start space-x-6">
        <div className="flex-1">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="mx-2">•</span>
            <span>{news.date}</span>
          </div>
          
          <h2 className="text-xl font-bold forbes-black leading-tight mb-3 hover:forbes-red cursor-pointer transition-colors">
            {news.headline}
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            {news.description}
          </p>
        </div>
        
        <div className="flex-shrink-0 w-48 h-32 overflow-hidden rounded-lg">
          <img
            src={news.image}
            alt={news.headline}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </article>
  );
};

export default NewsCard;