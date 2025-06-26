import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Buy Properties', href: '/properties' },
        { name: 'Sell Your Property', href: '/sell' },
        { name: 'Pricing Plans', href: '/pricing' },
        { name: 'How It Works', href: '/how-it-works' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Legal Guides', href: '/resources/legal' },
        { name: 'State Compliance', href: '/resources/compliance' },
        { name: 'Market Insights', href: '/resources/insights' },
        { name: 'Community Forum', href: '/community' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Live Chat', href: '#' },
        { name: 'Book Consultation', href: '/consultation' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Compliance', href: '/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center px-4 py-2 bg-white/10 text-primary-200 rounded-full text-sm font-medium mb-4">
                <Home className="h-4 w-4 mr-2" />
                SaleDirect
              </div>
              <span className="text-xl font-display font-bold text-white">
                SaleDirect
              </span>
              <span className="text-sm text-white block leading-none">
                Australia
              </span>
            </Link>
            <p className="text-white text-sm mb-6 max-w-md">
              Australia's leading platform for private property sales. Skip the agent, 
              save thousands, and sell with confidence across all states and territories.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-white">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800 PROPERTY (1800 776 737)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@saledirect.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available Australia-wide</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white text-sm">
              &copy; {currentYear} SaleDirect. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Australian Compliance */}
            <div className="text-white text-sm">
              Australian Privacy Principles Compliant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;