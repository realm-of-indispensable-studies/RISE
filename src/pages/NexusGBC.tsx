import NewsCard from "@/components/NewsCard";
import React, { useEffect, useState } from "react";
import { NexusGBC_Data } from "@/data/newsletters";
import Layout from "./Layout";

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us",
};

const NexusGBC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <Layout headerProps={headerProps}>
      <div className="min-h-screen bg-gray-900">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold forbes-black mb-2">
              Career Mapping Initiative (Online)
            </h1>
            <p className="text-gray-600 text-lg">
              updates
            </p>
          </div>

          {/* Newsletter grid */}
          <div
            className={
              isMobile
                ? "space-y-6"
                : "bg-gray-900 rounded-lg shadow-sm border border-gray-500"
            }
          >
            {NexusGBC_Data.map((newsletter) => (
              <div key={newsletter.id} className={isMobile ? "" : "px-8"}>
                <NewsCard type="online" news={newsletter} isMobile={isMobile} />
              </div>
            ))}
          </div>

          
        </main>
      </div>
    </Layout>
  );
};

export default NexusGBC;
