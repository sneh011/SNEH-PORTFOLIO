import React from 'react';
import { Github, ExternalLink, Code, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weather Web Application",
      description: "A responsive weather application that provides real-time weather information based on user location or search queries. Features seamless integration with weather APIs and Google Maps for enhanced user experience.",
      longDescription: "This project demonstrates proficiency in frontend development, API integration, and creating user-centric applications. The app automatically detects user location and presents weather data in an intuitive interface.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "Weather API"],
      features: [
        "Automatic location detection using browser geolocation API",
        "Real-time weather data display with temperature, humidity, and conditions",
        "Location-based search functionality for any city worldwide",
        "Google Maps integration showing weather location visually",
        "Responsive design working seamlessly across devices",
        "Clean, intuitive UI with weather icons and animations"
      ],
      icon: <Cloud className="w-6 h-6" />,
      color: "blue",
      githubLink: "https://github.com/sneh011/weather-app",
      liveLink: "#",
      tags: ["Frontend", "API Integration", "Responsive Design"]
    }
  ];

  const upcomingProjects = [
    {
      title: "DSA Visualizer",
      description: "Interactive visualization tool for common data structures and algorithms",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      status: "Planning"
    },
    {
      title: "Portfolio Dashboard",
      description: "Personal coding statistics dashboard using LeetCode and GitHub APIs",
      techStack: ["React", "Chart.js", "REST APIs"],
      status: "In Progress"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-600 to-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/20",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-400 dark:border-blue-600"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        {/* Main Projects */}
        <div className="space-y-8 mb-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-5 gap-6">

                  {/* Left */}
                  <div className={`md:col-span-2 ${colors.bg} p-8 flex flex-col justify-between`}>
                    <div>
                      <div className={`inline-flex p-4 bg-gradient-to-br ${colors.gradient} rounded-2xl text-white mb-4`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs border ${colors.border}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>

                      <a
                        href={project.liveLink}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 border-2 rounded-lg font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="md:col-span-3 p-8">
                    <h4 className="text-lg font-bold mb-3">About This Project</h4>
                    <p className="mb-6">
                      {project.longDescription}
                    </p>

                    <h4 className="text-lg font-bold mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-bold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Upcoming Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-dashed"
              >
                <div className="flex justify-between mb-3">
                  <h4 className="font-bold">{project.title}</h4>
                  <span className="px-3 py-1 bg-purple-100 rounded-full text-xs">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4">
            More projects coming soon! Check out my GitHub for other work.
          </p>
          <a
            href="https://github.com/sneh011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg"
          >
            <Github className="mr-2" size={20} />
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
