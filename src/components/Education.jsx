import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science (CS)",
    institution: "KIET Group of Institutions",
    location: "Ghaziabad, Uttar Pradesh",
    duration: "Oct 2023 – Apr 2027",
    cgpa: "8.01/10",
    status: "Currently Pursuing",
    relevantCoursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ],
    highlights: [
      "Strong academic performance with 8.01 CGPA",
      "Active participation in coding activities and technical events",
      "Focus on building practical skills alongside theoretical knowledge",
      "Regular practice on competitive programming platforms"
    ]
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation in Computer Science and Engineering
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                      {education.status}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-xl font-semibold mb-4 text-blue-100">
                      {education.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {education.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {education.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right hidden md:block">
                  <div className="text-4xl font-bold mb-1">{education.cgpa}</div>
                  <div className="text-sm text-blue-100">CGPA</div>
                </div>
              </div>
            </div>

            {/* CGPA Mobile */}
            <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 px-8 pb-6 text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl font-bold mb-1">{education.cgpa}</div>
                <div className="text-sm text-blue-100">Current CGPA</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Relevant Coursework */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {education.relevantCoursework.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600" />
                  Academic Highlights
                </h4>
                <div className="space-y-3">
                  {education.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg border border-blue-200 dark:border-blue-800"
                    >
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                2027
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Expected Graduation
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                B.Tech
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Computer Science
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                8.01
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                CGPA / 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;