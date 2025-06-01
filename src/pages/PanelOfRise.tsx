import React from 'react';
import Layout from './Layout';
import LeadershipSection from '@/components/LeaderShipSection';

const headerProps = {
  home: "/#home",
  initiatives: "/#initiatives",
  leadershipPanel: "/panel-of-rise",
  network: "/#network",
  contact: "/#contact",
  aboutUs: "/about-us"
};

const PanelOfRise = () => {
  return (
    <Layout headerProps={headerProps}>
      <LeadershipSection />
    </Layout>
  )
}

export default PanelOfRise