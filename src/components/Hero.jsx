import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20 dark:from-purple-900/30 dark:via-slate-900 dark:to-pink-900/30">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-purple-500 dark:text-purple-400 text-lg mb-4 font-mono"
          >
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Balaji M
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6"
          >
            Backend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Aspiring backend developer passionate about building robust server-side applications
            and solving complex problems through clean, efficient code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Get In Touch
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <FiDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/balaji-526"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-slate-800 rounded-full text-gray-800 dark:text-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://linkedin.com/in/balaji521"
              target=""
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-slate-800 rounded-full text-gray-800 dark:text-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <FiLinkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:balajim1256@gmail.com"
              className="p-3 bg-gray-200 dark:bg-slate-800 rounded-full text-gray-800 dark:text-gray-200 hover:bg-purple-500 hover:text-white transition-colors"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500 dark:text-gray-400"
          >
            <FiArrowDown size={32} className="mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
