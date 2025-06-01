import React from 'react';
import Layout from './Layout';

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us"
};

const MultiDisciplinary = () => {
  return (
    <Layout headerProps={headerProps}>
    <div className="min-h-screen bg-gray-900 font-inter">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <article className="space-y-12">
          {/* Header Section */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Multidisciplinary Network
            </h1>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </header>

          {/* Main Content Section */}
          <section className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-white text-lg md:text-xl leading-relaxed text-justify">
                The concept of multidisciplinary networks has emerged as a cornerstone of modern academic and professional collaboration. These interconnected systems bring together diverse fields of expertise, creating synergies that transcend traditional boundaries between disciplines. From the intersection of technology and humanities to the convergence of science and social policy, these networks foster innovation through the cross-pollination of ideas and methodologies.
              </p>
              
              <p className="text-white text-lg md:text-xl leading-relaxed text-justify mt-6">
                In today's rapidly evolving landscape, the challenges we face—whether in climate change, public health, or technological advancement—require solutions that draw from multiple domains of knowledge. The traditional silos of academic and professional specialization, while valuable for deep expertise, often fall short when addressing complex, multifaceted problems that demand holistic approaches.
              </p>

              <p className="text-white text-lg md:text-xl leading-relaxed text-justify mt-6">
                These collaborative frameworks have proven instrumental in breakthrough discoveries and innovations. The Human Genome Project, for instance, required the convergence of biology, computer science, mathematics, and ethics. Similarly, modern artificial intelligence development draws from cognitive science, statistics, philosophy, and engineering, demonstrating the power of interdisciplinary collaboration.
              </p>
            </div>

            {/* Image Section */}
            <figure className="my-12 space-y-4">
              <div className="flex justify-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format"
                  alt="Black and white photograph showing a computer monitor displaying programming code, representing the intersection of technology and collaborative work"
                  className="w-full max-w-7xl h-96 rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&auto=format"
                  alt="Black and white photograph showing a computer monitor displaying programming code, representing the intersection of technology and collaborative work"
                  className="w-full max-w-7xl h-96 rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <figcaption className="text-center text-white text-sm md:text-base italic">
                Programming interface showcasing collaborative development work. The intersection of human creativity and technological innovation exemplifies modern multidisciplinary approaches.
                <br />
                <span className="text-gray-500 text-xs">Photo credit: Unsplash / Kevin Ku</span>
              </figcaption>
            </figure>

            {/* Continued Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-white text-lg md:text-xl leading-relaxed text-justify">
                The success of multidisciplinary networks lies not only in their ability to combine different expertise areas but also in their capacity to develop new languages and frameworks for communication across disciplines. This requires participants to step outside their comfort zones, learn to translate complex concepts for audiences from different backgrounds, and develop collaborative skills that complement their technical expertise.
              </p>

              <p className="text-white text-lg md:text-xl leading-relaxed text-justify mt-6">
                As we move forward into an increasingly complex and interconnected world, the importance of these multidisciplinary networks will only continue to grow. They represent not just a methodology for solving problems, but a fundamental shift in how we approach knowledge creation, innovation, and the pursuit of solutions to humanity's greatest challenges.
              </p>
            </div>

            {/* Call to Action or Conclusion */}
            <div className="border-l-4 border-emerald-600 pl-6 my-8">
              <p className="text-white text-lg italic leading-relaxed">
                "The future belongs to those who can navigate the intersections between disciplines, building bridges where others see boundaries."
              </p>
            </div>
          </section>

          {/* Join our Network Section */}
          <section className="text-center space-y-6 pt-8 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Join our Network
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Become part of our multidisciplinary community and contribute to collaborative innovation across diverse fields of expertise.
            </p>
            <div className="pt-4">
              <a 
                href="https://forms.zohopublic.in/realmofindispensablestudiesan1/form/RISENETWORK/formperma/rYx9f0EU6kD57dx_mTVwZ7bNmj1WI8Iu08g-XL-5Xdw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Join Our Network
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
    </Layout>
  );
};

export default MultiDisciplinary;