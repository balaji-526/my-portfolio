import React from 'react';
import profileImg from '../assets/my-image.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiServer } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: <FiServer className="text-purple-500" size={32} />,
      title: 'Backend Development',
      description: 'Building scalable server-side applications with Node.js and Express.js',
    },
    {
      icon: <FiDatabase className="text-pink-500" size={32} />,
      title: 'Database Design',
      description: 'Crafting efficient database schemas and optimizing queries with MySQL',
    },
    {
      icon: <FiCode className="text-blue-500" size={32} />,
      title: 'Problem Solving',
      description: 'Active competitive programmer with 5-star Java badge on HackerRank',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800/50">
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
              About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image/Card */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110">
                      <img
                        src={profileImg}
                        alt="Balaji"
                    className="w-full h-full object-cover rounded-xl border-4 border-purple-500"  />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Balaji M</h3>
                    <p className="text-purple-500 font-semibold">Backend Developer</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am an aspiring backend developer with a strong passion for building robust server-side 
                applications and understanding how systems work behind the scenes. I thrive on the challenge 
                of solving complex problems with elegant, efficient code.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in software development is driven by continuous learning through hands-on projects. 
                From building real-time train reservation systems to integrating payment gateways, I enjoy 
                transforming ideas into functional applications that solve real-world problems.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me practicing Data Structures and Algorithms on LeetCode, 
                exploring new backend technologies, or working on personal projects that push my boundaries.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">5★</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Java Badge</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">2024</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">DSA Start</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
