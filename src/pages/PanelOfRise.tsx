import React from "react";
import Layout from "./Layout";
import LeadershipSection from "@/components/LeaderShipSection";
import LeadershipProfile from "@/components/LeadershipProfile";

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us",
};

const associateMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Associate Member",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedinUrl: "https://linkedin.com/in/priya-sharma",
  },
  {
    id: 2,
    name: "Rahul Verma",
    title: "Associate Member",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedinUrl: "https://linkedin.com/in/rahul-verma",
  },
  {
    id: 3,
    name: "Sneha Patel",
    title: "Associate Member",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    linkedinUrl: "https://linkedin.com/in/sneha-patel",
  },
  {
    id: 4,
    name: "Amit Singh",
    title: "Associate Member",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    linkedinUrl: "https://linkedin.com/in/amit-singh",
  },
  {
    id: 5,
    name: "Meera Nair",
    title: "Associate Member",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    linkedinUrl: "https://linkedin.com/in/meera-nair",
  },
];

const PanelOfRise = () => {
  return (
    <Layout headerProps={headerProps}>
      <LeadershipSection />
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Associate Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {associateMembers.map((member) => (
              <LeadershipProfile
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PanelOfRise;
