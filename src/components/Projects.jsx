import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const projects = [
    {
      title: 'Smart Dashboard for Penguin Data Insights',
      description: 'Interactive dashboard to visualize and predict penguin species using machine learning models with dynamic charts and data analysis.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'ML'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      demo: '#',
      github: '#',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Lung Cancer Prediction Web App',
      description: 'ML-based cancer prediction system using SVM, Random Forest & Gradient Boosting. Includes SMOTETomek balancing and StandardScaler with clean UI.',
      tech: ['Python', 'Flask', 'HTML', 'CSS', 'SQLite', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      demo: '#',
      github: '#',
      gradient: 'from-pink-500 to-purple-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work in web development and machine learning</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glassmorphism overflow-hidden group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demo}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 hover:scale-110 transform"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-purple-600 text-xl" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 hover:scale-110 transform"
                      title="GitHub"
                    >
                      <FaGithub className="text-purple-600 text-xl" />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                 border border-purple-500/30 rounded-full text-purple-700 text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.demo}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 
                               rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 
                               transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 px-4 py-2 border-2 border-purple-500 rounded-lg font-semibold 
                               text-center hover:bg-purple-500/20 transition-all duration-300 
                               flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
                       rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 
                       transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <FaGithub className="text-2xl" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
