import React from 'react';
import BrandCard from '../components/BrandCard';
import BackToTop from '../components/BackToTop';
import Layout from './Layout';
import graguate1 from '../../public/graguate1.jpg'
import graguate2 from '../../public/graguate2.jpg'

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us"
};


const GraguateNexus = () => {
  const brands = [
    {
      title: "RISE Graduate Nexus Chapter",
      tagline: "Empowering the next generation of leaders through innovative programs and networking opportunities.",
      imageUrl: graguate1
    },
    {
      title: "Tech Nexus",
      tagline: "Bridging the gap between technology and innovation for sustainable future solutions.",
      imageUrl: graguate2
    }
  ];

  const handleBrandClick = (brandName: string) => {
    console.log(`Clicked on ${brandName}`);
    // You can add navigation logic here
  };

  return (
    <Layout headerProps={headerProps}>
    <div className="min-h-screen w-full bg-gray-900">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Connecting Excellence Across Institutions
            </h2>
            <p className="text-lg text-white leading-relaxed mb-8">
              Unilever's products are trusted and used by more than 100 people across college 
              communities worldwide. Our Graduate Nexus program represents a commitment to 
              fostering innovation, leadership, and sustainable growth in educational institutions 
              and technology sectors.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
          </div>
        </section>

        {/* Brand Cards Section */}
        <section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <BrandCard
                key={index}
                title={brand.title}
                tagline={brand.tagline}
                image={brand.imageUrl}
                onClick={() => handleBrandClick(brand.title)}
              />
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="text-center">
          <div className="bg-gray-800 rounded-lg shadow-md p-8 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Building Tomorrow's Leaders Today
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Through strategic partnerships and innovative programs, Graduate Nexus is creating 
              a network of excellence that spans across educational institutions and technology 
              platforms, preparing graduates for the challenges of tomorrow.
            </p>
          </div>
        </section>
      </main>

    

      {/* Back to Top Button */}
      <BackToTop />
    </div>
    </Layout>
  );
};

export default GraguateNexus;