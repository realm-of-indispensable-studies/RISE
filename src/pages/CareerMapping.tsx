import React from 'react';
import BrandCard from '../components/BrandCard';
import BackToTop from '../components/BackToTop';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/#about-us"
};


const CareerMapping = () => {
  const navigate = useNavigate();

  const brands = [
    {
      id: 1,
      title: "Online Workshop Series",
      tagline: "Interactive digital learning sessions designed to enhance your professional skills and career development through expert-led workshops.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      navigate: () => navigate('/offline-session')
    },
    {
      id: 2,
      title: "Offline Session",
      tagline: "In-person networking and learning opportunities that provide hands-on experience and direct mentorship from industry leaders.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      navigate: () => navigate('/online-session')
    },
    
  ];

  const handleBrandClick = (brandTitle: string) => {
    console.log(`Clicked on ${brandTitle}`);
    // Here you could add navigation or modal functionality
  };

  return (
    <Layout headerProps={headerProps}>
    <div className="min-h-screen  bg-gray-900 mb-3">
      {/* Header Section */}
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Empowering Global Careers
            </h2>
            <p className="text-lg text-white leading-relaxed">
              Unilever's products are used by more than <span className="font-semibold text-blue-600">3.4 billion people</span> in 
              over <span className="font-semibold text-blue-600">190 countries</span>. Our Career Mapping Initiative is designed to help 
              professionals navigate their career journey with the same global reach and impact, providing comprehensive 
              development opportunities that span digital and in-person experiences.
            </p>
          </div>
        </section>

        {/* Brand Cards Section */}
        <section>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                image={brand.image}
                title={brand.title}
                tagline={brand.tagline}
                onClick={brand.navigate}
              />
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Map Your Career?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers through our comprehensive 
            development programs. Start your journey today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 hover:shadow-lg">
            Get Started
          </button>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-blue-600 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100">
            © 2024 Career Mapping Initiative. Empowering careers worldwide.
          </p>
        </div>
      </footer> */}

      {/* Back to Top Button */}
      <BackToTop />
        </div>
    </Layout>
  );
};

export default CareerMapping;