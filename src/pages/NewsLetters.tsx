import React from "react";
import Layout from "./Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import NewsletterGrid from "@/components/NewsletterGrid";

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us",
};

const NewsLetters = () => {
  const navigate = useNavigate();
  return (
    <Layout headerProps={headerProps}>
      <div className="min-h-screen bg-gray-900">
        
        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Newsletters
            </h1>
           
          </div>

          {/* Newsletter Grid */}
          <NewsletterGrid />
        </main>

        
      </div>
    </Layout>
  );
};

export default NewsLetters;
