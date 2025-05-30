
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      'Home',
      'About Us',
      'Initiatives',
      'Leadership Panel',
      'Contact'
    ],
    'Resources': [
      'Research Papers',
      'Event Archives',
      'Student Portal',
      'Newsletter',
      'Downloads'
    ],
    'Support': [
      'Help Center',
      'Terms & Conditions',
      'Privacy Policy',
      'Cookie Policy',
      'Accessibility'
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/initiative.rise/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE9cDu06avaNAAAAZcX_mcwI14HjZIO6KPcZZXZu-xUWFicFgPrG84VPrARaaFEIgHgkxEm18N5si_NiOhlncA9Dzfxz4DlWegphyTFn26EZBR6MRG1ZZLhGc6T08haKOmLnTk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Frealm-of-indispensable-studies-and-empowerment', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@panelofrise?si=2DL8pzjyzJWv12jA', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">RISE</h3>
                  <p className="text-sm text-blue-300">Global Education Network</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering students worldwide through collaborative learning, 
                innovative research, and inclusive dialogue for a better tomorrow.
              </p>
              
              {/* Social media links */}
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-lg mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold text-lg mb-2">Stay Connected</h4>
              <p className="text-gray-400">Get the latest updates on our initiatives and events.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-1 md:w-80"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 RISE - Realm of Indispensable Studies and Empowerment. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
