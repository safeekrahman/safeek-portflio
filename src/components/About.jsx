import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Vector/Art */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                {/* Glassmorphism Card with Image */}
                <div className="glassmorphism-strong p-8 hover:scale-105 transition-transform duration-500">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-64 h-64 md:w-80 md:h-80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background */}
                    <circle cx="200" cy="200" r="180" fill="url(#aboutGradient)" opacity="0.2" />
                    <defs>
                      <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>

                    {/* Person Silhouette */}
                    <circle cx="200" cy="140" r="50" fill="#a78bfa" />
                    <ellipse cx="200" cy="260" rx="80" ry="100" fill="#8b5cf6" />
                    
                    {/* Tech Icons Around */}
                    <circle cx="100" cy="100" r="15" fill="#3b82f6" opacity="0.8" />
                    <text x="92" y="107" fill="#fff" fontSize="16" fontWeight="bold">ML</text>
                    
                    <circle cx="300" cy="120" r="15" fill="#ec4899" opacity="0.8" />
                    <text x="289" y="127" fill="#fff" fontSize="16" fontWeight="bold">JS</text>
                    
                    <circle cx="90" cy="280" r="15" fill="#10b981" opacity="0.8" />
                    <text x="82" y="287" fill="#fff" fontSize="14" fontWeight="bold">PY</text>
                    
                    <circle cx="310" cy="300" r="15" fill="#f59e0b" opacity="0.8" />
                    <text x="299" y="307" fill="#fff" fontSize="14" fontWeight="bold">DB</text>
                  </svg>
                </div>

                {/* Floating Animation Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glassmorphism p-8 md:p-10 hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Passionate Developer
                  </h3>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed">
                  Passionate about building modern, scalable web applications using the  <span className="text-purple-700 font-semibold"> MERN stack</span>, with strong skills in
                  <span className="text-blue-700 font-semibold"> React.js front-end development</span>, and 
                  <span className="text-pink-700 font-semibold"> Node.js & Express.js for backend engineering</span>. 
                </p>

                <p className="text-gray-800 text-lg leading-relaxed">
                  Skilled in creating <span className="text-purple-700 font-semibold">interactive user interfaces</span>, 
                  <span className="text-blue-700 font-semibold"> efficient REST APIs</span>, and 
                  <span className="text-pink-700 font-semibold"> well-structured MongoDB databases</span>.
                </p>

                <p className="text-gray-800 text-lg leading-relaxed">
                  <span className="text-green-700 font-semibold">Quick learner</span>, 
                  <span className="text-orange-600 font-semibold"> adaptable</span>, and eager to contribute to 
                  <span className="text-purple-700 font-semibold"> real-world projects</span>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      8.41
                    </div>
                    <div className="text-gray-700 text-sm mt-1">MCA CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                      5+
                    </div>
                    <div className="text-gray-700 text-sm mt-1">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      5+
                    </div>
                    <div className="text-gray-700 text-sm mt-1">Certifications</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
