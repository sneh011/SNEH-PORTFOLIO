import React from 'react';
import { Code, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Strong DSA Foundation",
      description: "Solved 400+ problems across LeetCode and GeeksforGeeks with consistent practice",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Achieved max rating of 1470 on LeetCode through strategic problem-solving",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Web Development",
      description: "Building responsive web applications using modern frontend technologies",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving technical skills",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-6xl font-bold text-white">SK</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Building the future, one line at a time
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              B.Tech Computer Science (CS) Student
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I am a passionate Computer Science student with a strong foundation in Data Structures
              and Algorithms. I enjoy solving complex problems and building modern, responsive web
              applications using the latest technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800"
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
