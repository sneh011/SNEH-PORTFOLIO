import React from 'react';
import { Award, Code2, TrendingUp, Target, Trophy, CheckCircle } from 'lucide-react';

const Achievements = () => {
  const codingStats = [
    {
      platform: "LeetCode",
      icon: <Code2 className="w-8 h-8" />,
      color: "orange",
      stats: [
        { label: "Problems Solved", value: "400+", icon: <CheckCircle className="w-5 h-5" /> },
        { label: "Max Rating", value: "1470", icon: <Trophy className="w-5 h-5" /> },
        { label: "Current Streak", value: "Active", icon: <TrendingUp className="w-5 h-5" /> }
      ],
      profileLink: "https://leetcode.com/u/sneh_2005/",
      description: "Consistent problem solver with focus on Data Structures and Algorithms",
      highlightColor: "from-orange-500 to-yellow-500"
    },
    {
      platform: "GeeksforGeeks",
      icon: <Target className="w-8 h-8" />,
      color: "green",
      stats: [
        { label: "Problems Solved", value: "Active", icon: <CheckCircle className="w-5 h-5" /> },
        { label: "Focus Areas", value: "DSA", icon: <Code2 className="w-5 h-5" /> },
        { label: "Practice", value: "Regular", icon: <TrendingUp className="w-5 h-5" /> }
      ],
      profileLink: "https://geeksforgeeks.org/user/sneh011",
      description: "Active practitioner focusing on algorithmic problem-solving",
      highlightColor: "from-green-500 to-emerald-500"
    }
  ];

  const whyItMatters = [
    {
      title: "Strong Problem-Solving Foundation",
      description: "400+ solved problems demonstrate ability to break down complex problems, identify patterns, and implement efficient solutions - crucial skills for any software engineering role.",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Consistent Learning & Growth",
      description: "Achieving a rating of 1470 on LeetCode reflects sustained effort, continuous improvement, and the discipline needed to tackle increasingly difficult challenges.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Technical Interview Readiness",
      description: "Extensive practice on competitive coding platforms means strong preparation for technical interviews at top product and service-based companies.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Core CS Fundamentals",
      description: "Regular DSA practice reinforces understanding of time complexity, space optimization, and choosing the right data structures - essential for writing production-quality code.",
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Demonstrating consistent growth through competitive programming and problem-solving
          </p>
        </div>

        {/* Coding Platform Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {codingStats.map((platform, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >

              {/* Platform Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-br ${platform.highlightColor} rounded-xl text-white`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {platform.platform}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {platform.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex justify-center mb-2 text-gray-600 dark:text-gray-400">
                      {stat.icon}
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${platform.highlightColor} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Profile Link */}
              <a
                href={platform.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center bg-gradient-to-r ${platform.highlightColor} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
              >
                View {platform.platform} Profile →
              </a>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why This Matters for Recruiters
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These achievements translate directly into valuable skills for software engineering roles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyItMatters.map((point, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Other Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Academic Excellence",
                value: "8.01 CGPA",
                description: "Strong academic performance in B.Tech CSE"
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Multi-Language Proficiency",
                value: "5+ Languages",
                description: "C, C++, Python, JavaScript, Java"
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Practical Projects",
                value: "Web Development",
                description: "Hands-on experience with real applications"
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
