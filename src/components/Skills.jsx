import React from 'react';
import { Code, Palette, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "blue",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      color: "green",
      skills: [
        { name: "SQL", level: 75 },
        { name: "DBMS Concepts", level: 80 },
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Frontend Technologies",
      color: "purple",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "React", level: 75 },
        { name: "JavaScript ES6+", level: 75 }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "CS Fundamentals",
      color: "orange",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "OOPs", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "DBMS", level: 75 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-400",
      purple: "from-purple-600 to-purple-400",
      green: "from-green-600 to-green-400",
      orange: "from-orange-600 to-orange-400"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through consistent practice, coursework, and hands-on project development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${getColorClasses(category.color)} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Also familiar with
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'Problem Solving', 'Team Collaboration', 'Code Review', 'Debugging'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;