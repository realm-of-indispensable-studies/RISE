import React from "react";
import Layout from "./Layout";

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us",
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
                <p className="text-white text-lg md:text-xl leading-relaxed text-justify mt-6">
                  In our increasingly interconnected world, multidisciplinary
                  networks have become essential pillars of academic and
                  professional collaboration. By uniting diverse fields of
                  expertise, these networks foster synergies that transcend
                  traditional disciplinary boundaries, leading to innovative
                  solutions for complex global challenges.
                </p>
                
                <p className="text-white text-lg md:text-xl leading-relaxed text-justify mt-6">
                  The success of these networks lies not only in combining
                  different areas of expertise but also in cultivating new
                  frameworks for cross-disciplinary communication. Participants
                  are encouraged to step beyond their comfort zones, translating
                  complex concepts for diverse audiences and developing
                  collaborative skills that complement their technical
                  knowledge.{" "}
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
                  Programming interface showcasing collaborative development
                  work. The intersection of human creativity and technological
                  innovation exemplifies modern multidisciplinary approaches.
                  <br />
                  <span className="text-gray-500 text-xs">
                    Photo credit: Unsplash / Kevin Ku
                  </span>
                </figcaption>
              </figure>

              {/* Call to Action or Conclusion */}
              <div className="border-l-4 border-emerald-600 pl-6 my-8">
                <p className="text-white text-lg italic leading-relaxed">
                  "The future belongs to those who can navigate the
                  intersections between disciplines, building bridges where
                  others see boundaries."
                </p>
              </div>

              {/* Continued Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-white text-lg md:text-xl leading-relaxed text-justify">
                  In alignment with this vision, we are committed to
                  establishing a Multidisciplinary Student Network across
                  educational institutions in India, from premier universities
                  to regional colleges. Our initiative aims to foster
                  collaboration among students from diverse academic
                  backgrounds, promoting a culture of shared learning and
                  innovation. Through our virtual platform, we strive to ensure
                  accessibility and inclusivity, reaching students in remote
                  areas and providing them with opportunities to engage in
                  interdisciplinary dialogue and projects.
                  This endeavor resonates with the objectives of the National
                  Education Policy 2020, which advocates for a holistic and
                  multidisciplinary approach to education, preparing learners to
                  navigate and contribute to a rapidly evolving
                  global landscape.
                </p>
              </div>

              
            </section>

            {/* Join our Network Section */}
            <section className="text-center space-y-6 pt-8 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Join our Network
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto">
                Become part of our multidisciplinary community and contribute to
                collaborative innovation across diverse fields of expertise.
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
