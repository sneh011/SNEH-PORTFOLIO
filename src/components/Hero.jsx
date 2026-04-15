import React from 'react';
import { Github, Linkedin, Mail, Code2, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">

          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sneh Kumar
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
            B.Tech CS Student | Aspiring Software Engineer
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            DSA Enthusiast • Web Development • Problem Solver
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-blue-600">400+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">DSA Problems</div>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-purple-600">1470</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode Rating</div>
            </div>
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-green-600">8.01</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">

            <a
              href="https://github.com/sneh011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium shadow-lg hover:shadow-xl transition"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/sneh_2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition"
            >
              <Code2 className="mr-2" size={20} />
              LeetCode
            </a>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </button>

            <a
              href="#resume"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/sneh011"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/snehkumar2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:kumarsneh35@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
