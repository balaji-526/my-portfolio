import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: '🗄️', level: 90, color: 'from-red-500 to-orange-500' },
        { name: 'PostgreSQL', icon: '💻', level: 50, color: 'from-yellow-400 to-yellow-600' },
        { name: 'MongoDB', icon: '🗄️', level: 50, color: 'from-blue-500 to-blue-700' },
        { name: 'PowerBI', icon: '📊', level: 60, color: 'from-blue-500 to-blue-700' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: '🐍', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Java', icon: '☕', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'C', icon: '©️', level: 30, color: 'from-blue-500 to-blue-700' },
        { name: 'C++', icon: '➕', level: 40, color: 'from-blue-500 to-blue-700' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React Native', icon: '⚛️', level: 40, color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML', icon: '🌐', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', icon: '🎨', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Javascript', icon: '🟨', level: 65, color: 'from-yellow-400 to-yellow-600' },
        { name: 'PHP', icon: '🐘', level: 50, color: 'from-green-400 to-green-600' },
      ],
    },
  ];

  const otherSkills = [
    { name: 'Data Structures', icon: '📊' },
    { name: 'Algorithms', icon: '🧮' },
    { name: 'Debugging', icon: '🐛' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Git', icon: '🔀' },
    { name: 'Postman', icon: '📮' },
    { name: 'Teamwork', icon: '🤝' },
    { name: 'Communication', icon: '💬' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
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
              My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Technical Skills with Progress Bars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Skills - Tag Cloud */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">
              Additional <span className="text-purple-500">Skills</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full flex items-center gap-2 hover:border-purple-500 transition-colors"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Continuously learning and expanding my skill set through hands-on projects, 
              competitive programming, and staying updated with the latest backend technologies. 
              Always eager to take on new challenges and grow as a developer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;