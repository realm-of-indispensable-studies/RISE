import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us"
};

const AboutUs = () => {

    const navigate = useNavigate();
  return (
    <Layout headerProps={headerProps}>
      <article className="min-h-screen bg-gray-900 ">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-8 lg:px-12">
          {/* Main Title */}
          <header className="text-center mb-16">
            <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Emergence of <span className="text-emerald-600">RISE</span>
            </h1>
          </header>

          {/* Opening Paragraph */}
          <section className="mb-16">
            <p className="font-inter text-lg md:text-xl leading-relaxed text-white text-justify">
              In the early decades of the 21st century, a revolutionary movement
              began to take shape across the globe. Born from the intersection
              of technological innovation and social consciousness, RISE emerged
              as more than just an organization—it became a symbol of hope for
              millions who believed in the power of collective action to create
              meaningful change. The story of RISE is not merely one of
              institutional growth, but a testament to the enduring human spirit
              and our capacity to envision and build a better future together.
            </p>
          </section>

          {/* Historical Image */}
          <figure className="mb-16">
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Group of people collaborating around digital displays and technology"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <figcaption className="text-center mt-4 text-sm md:text-base text-white font-inter">
              <em>
                Early pioneers of the RISE movement gathered around innovative
                technology displays, circa 2020.
              </em>
              <br />
              <span className="text-xs text-white">
                Photo credit: Unsplash / Technology Innovation Archive
              </span>
            </figcaption>
          </figure>

          {/* Quote Section */}
          <section className="mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <blockquote className="font-georgia text-xl md:text-2xl lg:text-3xl italic text-white leading-relaxed mb-6">
                "It's never just about the one who founded it — it's about the
                commitment of the people behind it, often unseen."
              </blockquote>
              <cite
                className="font-inter text-base md:text-lg font-semibold text-white not-italic"
                style={{ fontVariant: "small-caps" }}
              >
                — Sidharth Puthalath
              </cite>
            </div>
          </section>

          {/* Inauguration Section */}
          <section className="mb-16">
            <h2 className="font-georgia text-2xl md:text-3xl font-semibold text-white mb-6 pb-2 border-b-2 border-emerald-600">
              Inauguration and Launch
            </h2>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              The formal inauguration of RISE took place on a crisp autumn
              morning in 2019, when a small group of visionaries gathered in a
              converted warehouse space to sign the founding charter. What began
              as weekly meetings in coffee shops and community centers had
              evolved into something far more substantial—a movement with clear
              objectives and an unwavering commitment to positive
              transformation.
            </p>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              The launch event itself was deliberately modest, reflecting the
              organization's core values of humility and grassroots engagement.
              Rather than grand proclamations or elaborate ceremonies, the
              founders chose to mark the occasion with a series of community
              workshops and listening sessions, ensuring that RISE would remain
              grounded in the real needs and aspirations of the people it sought
              to serve.
            </p>

            {/* Inauguration Images */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Person using laptop during inauguration planning"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">
                      Early planning sessions for the RISE inauguration
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Woman working on launch preparations"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">
                      Preparing digital materials for the launch event
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Expanding Mission Section */}
          <section className="mb-16">
            <h2 className="font-georgia text-2xl md:text-3xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-emerald-600">
              An Expanding Mission
            </h2>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              As RISE gained momentum throughout its early years, the scope of
              its mission naturally expanded to encompass broader societal
              challenges. What had initially focused on local community
              development soon evolved to address systemic issues affecting
              entire regions and, eventually, global concerns that demanded
              coordinated international response.
            </p>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              This expansion was not the result of organizational ambition, but
              rather a natural response to the interconnected nature of the
              challenges facing modern society. Climate change, technological
              disruption, economic inequality, and social fragmentation could
              not be addressed in isolation—they required the kind of holistic,
              collaborative approach that had become RISE's defining
              characteristic.
            </p>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              By 2023, RISE had established chapters in over forty countries,
              each adapted to local contexts while maintaining the core
              principles that had guided the movement from its inception. The
              organization's ability to scale while preserving its foundational
              values became a model studied by researchers and adopted by other
              movements seeking to create lasting, positive change in an
              increasingly complex world.
            </p>

            {/* Mission Images */}
            <div className="mt-6 w-full justify-center items-center">
              <Card onClick={() => { navigate('/panel-of-rise')}} className="overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Monitor showing programming code representing technological expansion"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-gray-800">
                    <p className="w-full flex justify-center items-center font-bold text-md text-white">
                      Technological infrastructure supporting global expansion
                    </p>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 font-inter">
              This historical account continues to evolve as RISE writes new
              chapters in its ongoing story of emergence and growth.
            </p>
          </footer>
        </div>
      </article>
    </Layout>
  );
};

export default AboutUs;
