import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Python Programming Trainee",
    company: "YBI Foundation",
    location: "Remote",
    duration: "Aug 2024 – Feb 2025",
    type: "Internship",
    description: "Completed a comprehensive Python programming training focused on building strong fundamentals and practical application development skills.",
    keyLearnings: [
      {
        title: "Python Fundamentals",
        details: "Mastered core Python concepts including syntax, control flow structures, functions, and various data structures (lists, tuples, dictionaries, sets)"
      },
      {
        title: "Hands-on Project Development",
        details: "Built multiple mini-projects applying theoretical concepts to real-world scenarios, gaining practical coding experience"
      },
      {
        title: "Problem-Solving & Logic Building",
        details: "Enhanced algorithmic thinking and problem decomposition skills through structured programming exercises"
      },
      {
        title: "Code Quality & Best Practices",
        details: "Learned to write clean, readable, and maintainable code following Python conventions and industry standards"
      }
    ],
    skills: ["Python", "Data Structures", "Problem Solving", "Code Documentation", "Debugging"],
    impact: "This internship significantly strengthened my programming foundation and improved my ability to translate problems into working code. The practical exposure helped bridge the gap between theoretical knowledge and real-world application development."
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practical learning experiences that shaped my development skills
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl text-white">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      {experience.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {experience.description}
            </p>

            {/* Key Learnings */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Key Learnings & Achievements
              </h4>
              <div className="space-y-4">
                {experience.keyLearnings.map((learning, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {learning.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {learning.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Gained */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Skills Developed
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Statement */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Impact & Growth
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {experience.impact}
              </p>
            </div>
          </div>

          {/* Timeline Indicator */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Currently seeking opportunities to apply and expand these skills in a professional environment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;