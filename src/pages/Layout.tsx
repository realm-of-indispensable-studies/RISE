import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type HeaderProps = {
  home: string;
  initiatives: string;
  leadershipPanel: string;
  network: string;
  contact: string;
  aboutUs: string;
};

type LayoutProps = {
  children: React.ReactNode;
  headerProps: HeaderProps;
};

const Layout = ({ children, headerProps}: LayoutProps) => (

  <div className="min-h-screen bg-gray-900 text-white flex flex-col">
    <Header {...headerProps}/>
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;