import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiPython, SiMysql, SiMongodb, SiJavascript, SiReact, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap,SiNodedotjs  } from 'react-icons/si'
import { FaDatabase, FaChartBar } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <SiPython />, color: 'from-blue-400 to-yellow-400' },
      ],
    },
    {
      title: 'ML Frameworks',
      skills: [
        { name: 'Pandas', icon: <FaDatabase />, color: 'from-purple-400 to-blue-400' },
        { name: 'NumPy', icon: <FaChartBar />, color: 'from-blue-400 to-cyan-400' },
        { name: 'Matplotlib', icon: <FaChartBar />, color: 'from-orange-400 to-red-400' },
        { name: 'Seaborn', icon: <FaChartBar />, color: 'from-teal-400 to-blue-400' },
      ],
    },
    {
      title: 'ML Techniques',
      skills: [
        { name: 'Classification', icon: '🎯', color: 'from-pink-400 to-purple-400' },
        { name: 'Feature Engineering', icon: '⚙️', color: 'from-green-400 to-teal-400' },
        { name: 'Data Preprocessing', icon: '🔄', color: 'from-blue-400 to-indigo-400' },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: <SiHtml5 />, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', icon: <SiCss3 />, color: 'from-blue-500 to-cyan-500' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: 'from-purple-500 to-pink-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React.js', icon: <SiReact />, color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', icon: <SiExpress />, color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-cyan-400 to-teal-500' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: 'from-green-500 to-emerald-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'from-blue-400 to-cyan-400' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glassmorphism p-6 hover-lift"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full 
                                 flex items-center gap-2 font-semibold text-white shadow-lg
                                 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Stats or Visual Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 glassmorphism p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  5
                </div>
                <div className="text-gray-700">Skill Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  13+
                </div>
                <div className="text-gray-700">Technologies</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  AI
                </div>
                <div className="text-gray-700">Focused</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  Web
                </div>
                <div className="text-gray-700">Full-Stack</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
