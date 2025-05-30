
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import  career from '../../public/career.jpg'; 
import  graduate from '../../public/graduate.jpg'; 
import  pan from '../../public/pan.jpg'; 
import { useNavigate } from 'react-router-dom';

const NewsSection = () => {
  const navigate = useNavigate();

  const newsItems = [
    
    {
      id: 1,
      title: "Career Mapping Initiative",
      description: "The Career Mapping Initiative empowers school students to discover their strengths, explore their interests, and set clear goals by connecting them with meaningful academic and professional pathways. Through personalized assessments, expert mentorship, and real-world exposure, the initiative equips students to make confident, informed decisions about their future careers.",
      date: "February 28, 2024",
      image: career,
      link: "/career-mapping",
    },
    {
      id: 2,
      title: "Graduate Nexus",
      description: "Graduate NEXUS is a RISE initiative for undergraduate and postgraduate students across all streams, focused on bridging the gap between academics and industry. It offers workshops, skill-building modules, and mentorship for competitive exams and higher studies—empowering students for academic, professional, and personal success. As a chapter of RISE, it functions within educational institutions to foster readiness and growth.",
      date: "February 20, 2024",
      image: graduate,
      link: "/graguate-nuxes",
    },
    {
      id: 3,
      title: "Pan-Indian Network",
      description: "The Pan-Indian Network is a nationwide student-led alliance that connects passionate individuals from diverse academic and cultural backgrounds across India.",
      date: "March 15, 2024",
      image: pan,
      link: "#summit-2024",
      current: 'Comming soon...'
    },
  ];

  return (
    <section id='initiatives' className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Initiatives & <span className="text-blue-400">Highlights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments, initiatives, and achievements from our network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card 
              onClick={() => navigate(item.link)}
              key={item.id} 
              className="bg-gray-900 cursor-pointer border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-56 object-center transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-blue-400 text-md font-semibold mb-3">
                  {item.current}
                </div>
                <CardTitle className="text-white text-xl leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
          >
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
