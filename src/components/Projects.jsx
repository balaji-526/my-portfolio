import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Train Ticket Booking System',
      type: 'Main Project',
      shortDesc: 'Real-time train reservation system with post-chart update feature',
      fullDesc: 'A comprehensive train reservation system that solves real-time booking inconsistency issues. The system handles dynamic seat allocation, chart publishing logic, and provides a smooth, fast user interface for seamless booking experience.',
      tech: ['Node.js', 'Express.js', 'MySQL', 'React Native'],
      features: [
        'Real-time seat availability tracking',
        'Post-chart update feature for dynamic allocation',
        'Chart publishing logic for train departures',
        'Smooth and responsive mobile UI',
        'Secure booking transaction handling',
        'User authentication and session management',
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🚂',
      github: 'https://github.com/balaji-526',
    },
    {
      id: 2,
      title: 'E-commerce Payment Integration',
      type: 'Web Development',
      shortDesc: 'Razorpay payment gateway integration with secure authentication',
      fullDesc: 'Developed a complete e-commerce payment solution integrating Razorpay payment gateway. Implemented secure user authentication, session management, and transaction handling to ensure safe and reliable payment processing.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Razorpay payment gateway integration',
        'Secure login and authentication system',
        'Session management for user security',
        'Transaction status tracking',
        'Responsive web interface',
        'Payment confirmation emails',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '💳',
      github: 'https://github.com/balaji-526',
    },
    {
      id: 3,
      title: 'AI Resume Analyzer',
      type: 'AI Project',
      shortDesc: 'AI-powered resume analysis and ATS Score Calculator',
      fullDesc: 'Developed an AI-powered resume analysis system that helps job seekers improve their resumes. The system analyzes resumes and provides feedback on ',
      tech: ['Python-Streamlit', 'API-key', 'Machine Learning'],
      features: [
        'Resume parsing and information extraction',
        'Keyword matching and relevance scoring',
        'ATS compatibility analysis',
        'Skill gap identification',
        'Actionable improvement suggestions',
        'PDF and DOCX upload support',
      ],
      gradient: 'from-green-500 to-emerald-500',
      icon: '🧮',
      github: 'https://github.com/balaji-526',
    },
    {
      id: 4,
      title: 'Age & Gender Detection',
      type: 'Python project',
      shortDesc: 'Age and gender detection using OpenCV in Python',
      fullDesc: 'Developed an Age and gender detection system that helps to detect age and gender from the face of the person in the Uploaded image. The system analyzes images and provides feedback in Visualization. ',
      tech: ['Python-Streamlit', 'API-key', 'Machine Learning'],
      features: [
        'Image upload and processing capabilities',
        'Facial feature extraction and analysis',
        'Age estimation from detected faces',
        'Gender classification from uploaded images',
        'Visualized feedback of analysis results',
      ],
      gradient: 'from-purple-500 to-orange-500',
      icon: '💻',
      github: 'https://github.com/balaji-526',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800/50">
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
              Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-6">
                    {/* Project Icon & Type */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{project.icon}</span>
                      <span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-semibold">
                        {project.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 text-gray-500">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <div className="flex items-center text-purple-500 font-semibold">
                      View Details
                      <FiExternalLink className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedProject.gradient} p-6 text-white relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <FiX size={24} />
                </button>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-5xl">{selectedProject.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <p className="text-white/80">{selectedProject.type}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {selectedProject.fullDesc}
                </p>

                {/* Features */}
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-purple-600 dark:text-purple-400 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
                  >
                    <FiGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
