import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

import image1 from "../../public/aboutpic.jpg";

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us",
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
              RISE began as a passionate initiative led by a former National
              Service Scheme (NSS) volunteer at Government Brennen College,
              Dharmadam, Kerala, during 2022–2024. What started as a modest,
              student-driven effort has since grown into a dynamic platform
              dedicated to building a multidisciplinary student network across
              India and beyond. At its core, RISE aims to create a collaborative
              ecosystem that connects students from diverse academic
              backgrounds. The platform encourages meaningful dialogue around
              knowledge-sharing, critical thinking, social awareness, and the
              practical skills essential for holistic student development.
            </p>
          </section>

          {/* Historical Image */}
          <figure className="mb-16">
            <div className="relative w-full h-64 md:h-80 lg:h-[650px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src={image1}
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
                — Realm of Indispensable Studies Empowerment
              </cite>
            </div>
          </section>

          {/* Inauguration Section */}
          <section className="mb-16">
            
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              The movement first brought together 21 students from different
              departments, organizing informal, student-led events on campus.
              Recognizing its potential, the initiative was later formalized as
              an undergraduate project under the BA Functional English program.
              The student who led this transformation even chose RISE as the
              subject of his academic research.
              Following graduation, he enrolled in a Master’s program at the
              same institution, this time with a greater purpose: to turn this
              idea into a fully accessible platform for over 2,500 students on
              campus.
              On October 10, 2024, RISE was officially launched. Today, it is
              proudly supported by the college administration and the Career
              Guidance and Placement Cell of Government Brennen College,
              Dharmadam. The platform remains inclusive and open to all
              students, prioritizing personal, academic, and social development.
            </p>
           


            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              RISE is now scaling up its vision nationwide, fostering
              connections between students at premier institutions and regional
              colleges through the RISE Student Panel — a dedicated board of
              student leaders from across disciplines and academic institutions
              across India and abroad.
              This expansion was not the result of organizational ambition, but
              rather a natural response to the interconnected nature of the
              challenges facing modern society. Climate change, technological
              disruption, economic inequality, and social fragmentation could
              not be addressed in isolation—they required the kind of holistic,
              collaborative approach that had become RISE's defining
              characteristic.
            </p>
            

          </section>

          {/* Expanding Mission Section */}
          <section className="mb-16">
            <h2 className="font-georgia text-2xl md:text-3xl font-semibold text-white mb-6 pb-2 ">
              Our Programs
            </h2>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              <span className="font-extrabold">Career Mapping Initiative : </span>A
              program designed for school students to help them discover their
              individual strengths and gain early direction toward meaningful,
              purpose-driven career paths.
            </p>
            <p className="font-inter text-lg leading-relaxed text-white text-justify mb-6">
              <span className="font-extrabold ">Graduate Nexus : </span>A structured
              program for college students that enhances academic and
              professional preparedness through multidisciplinary collaboration,
              skill-building, and peer-to-peer learning.
            </p>

            {/* Mission Images */}
            <div className="mt-6 w-full justify-center items-center" >
              <Card
                onClick={() => {
                  navigate("/panel-of-rise");
                }}
                className="overflow-hidden cursor-pointer"
              >
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

            <p className="mt-10 w-full pl-20 pr-20 align-middle text-center">
              RISE continues to grow as a beacon of inclusive education, student empowerment, and collaborative learning, shaping confident, socially aware, and future-ready individuals across academic communities.
            </p>
          </section>

        
        </div>
      </article>
    </Layout>
  );
};

export default AboutUs;
