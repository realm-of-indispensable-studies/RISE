
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Layout from './Layout';

const headerProps = {
  home: "#home",
  initiatives: "#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "#network",
  contact: "#contact",
  aboutUs: "/about-us"
};

const Index = () => {
  return (
    <Layout headerProps={headerProps}>
      <Hero />
      <NewsSection />
      <Gallery />
    </Layout>
  );
};

export default Index;
