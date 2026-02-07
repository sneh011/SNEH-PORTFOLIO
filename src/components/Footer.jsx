import React from 'react';
import { Heart, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    profiles: [
      { name: 'GitHub', href: 'https://github.com/sneh011', icon: <Github size={18} /> },
      { name: 'LeetCode', href: 'https://leetcode.com/sneh011', icon: <Code2 size={18} /> },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/snehkumar', icon: <Linkedin size={18} /> },
      { name: 'Email', href: 'mailto:kumarsneh35@gmail.com', icon: <Mail size={18} /> }
    ]
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sneh Kumar
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              B.Tech Computer Science Student passionate about solving problems through code.
              Building skills in DSA and Web Development, ready to contribute to impactful projects.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.profiles.map((profile, index) => (
                <li key={index}>
                  <a
                    href={profile.href}
                    target={profile.href.startsWith('http') ? '_blank' : '_self'}
                    rel={profile.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    <span className="mr-2">{profile.icon}</span>
                    {profile.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} Sneh Kumar. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/sneh011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/snehkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:kumarsneh35@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://leetcode.com/sneh011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-900/20 border border-green-700/30 rounded-full">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-400 font-medium">
              Open to opportunities
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
