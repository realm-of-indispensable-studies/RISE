
import React from 'react';
import { Button } from '@/components/ui/button';
import logo from '../../public/logo.png'


const Hero = () => {
  return (
    <section id='home' className="relative min-h-screen  flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1625608502140-ebdac8f0ffda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />
      
      {/* Animated background elements */}
      

      {/* Content */}
      <div className="relative z-10 text-center max-w-full mx-auto px-6">
        <div className=" flex flex-col items-center justify-center animate-fade-in w-full">
            <img src={logo} alt="RISE Logo" className="h-[180px] mb-4 w-[180px] object-contain" />

          {/* <h1
            className="text-5xl md:text-6xl text- font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent animate-fade-in"
            style={{ fontFamily: 'Futura Display, Futura, Arial, sans-serif' }}
          >
            Welcome to RISE
          </h1> */}
          <h2 className=" w-full text-2xl md:text-4xl font-bold mb-5 text-blue-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Realm of Indispensable Studies and Empowerment
          </h2>
        </div>

        <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            An initiative that unites students to spark multidisciplinary
            collaboration and advance inclusive societal discourse through dialogue,
            innovation, and collective action.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
          onClick={() => {
            const el = document.getElementById('initiatives');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Initiatives
          </Button>
          <Button onClick={() => window.location.href = 'https://forms.zohopublic.in/realmofindispensablestudiesan1/form/RISENETWORK/formperma/rYx9f0EU6kD57dx_mTVwZ7bNmj1WI8Iu08g-XL-5Xdw'}
            variant="outline" 
            size="lg" 
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Join Our Network
          </Button>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
