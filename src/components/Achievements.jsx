import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCode, FiTrendingUp, FiZap } from 'react-icons/fi';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <FiAward className="text-yellow-500" size={40} />,
      title: '5-Star Java Badge',
      platform: 'HackerRank',
      description: 'Achieved 5-star proficiency in Java programming through solving complex algorithmic challenges',
      color: 'from-yellow-400 to-orange-500',
      stats: '5★',
    },
    {
      icon: <FiCode className="text-green-500" size={40} />,
      title: 'Active Problem Solver',
      platform: 'LeetCode',
      description: 'Regularly solving Data Structures and Algorithms problems to strengthen problem-solving skills',
      color: 'from-green-400 to-emerald-500',
      stats: '99+',
    },
    {
      icon: <FiTrendingUp className="text-blue-500" size={40} />,
      title: 'DSA Journey',
      platform: 'Since 2024',
      description: 'Consistently practicing algorithms and data structures to build strong foundational skills',
      color: 'from-blue-400 to-cyan-500',
      stats: '2024',
    },
    {
      icon: <FiZap className="text-purple-500" size={40} />,
      title: 'Project Builder',
      platform: 'Hands-on Learning',
      description: 'Built multiple full-stack projects including train reservation and payment integration systems',
      color: 'from-purple-400 to-pink-500',
      stats: '4+',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Continuous learning and growth through competitive programming and hands-on project development
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-300 blur rounded-2xl"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg h-full">
                  {/* Icon */}
                  <div className="mb-4">{achievement.icon}</div>
                  
                  {/* Stats Badge */}
                  <div className={`inline-block px-4 py-1 bg-gradient-to-r ${achievement.color} text-white rounded-full text-sm font-bold mb-3`}>
                    {achievement.stats}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  
                  {/* Platform */}
                  <p className="text-purple-500 dark:text-purple-400 font-semibold text-sm mb-3">
                    {achievement.platform}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Commitment to <span className="text-purple-500">Continuous Learning</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My journey in software development is marked by a strong commitment to continuous improvement. 
                From achieving competitive programming badges to building real-world applications, each milestone 
                represents countless hours of learning, practicing, and pushing beyond my comfort zone. I believe 
                in learning by doing and constantly challenging myself with new technologies and complex problems.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">5★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">HackerRank Java</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">99+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">2024</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">DSA Journey Start</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
