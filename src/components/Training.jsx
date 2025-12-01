import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt } from 'react-icons/hi'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'

const Training = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const mernStack = [
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-300' },
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
  ]

  return (
    <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Training & Workshops</h2>
          <p className="section-subtitle">Professional development and hands-on learning</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism-strong p-8 md:p-12 glow-hover relative overflow-hidden"
          >
            {/* Background Glow Effects */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full 
                                flex items-center justify-center shadow-lg">
                    <HiLightningBolt className="text-3xl text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    NextGen Employability Training
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-700 text-sm font-semibold">
                      EY-GDS
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-700 text-sm font-semibold">
                      Edunet Foundation
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-700 text-sm font-semibold">
                      2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  Completed <span className="text-purple-700 font-semibold">6-day intensive training</span> on 
                  <span className="text-blue-700 font-semibold"> Building Modern Web Applications</span> using the 
                  <span className="text-pink-700 font-semibold"> MERN Stack</span>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Gained hands-on experience in full-stack JavaScript development, learning industry best practices 
                  for building scalable, production-ready web applications.
                </p>
              </div>

              {/* MERN Stack Icons */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Covered:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {mernStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="glassmorphism p-4 flex flex-col items-center gap-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className={`text-5xl ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <p className="text-gray-900 font-semibold">{tech.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-800">
                    <span className="font-semibold text-gray-900">Full-Stack Development:</span> End-to-end application development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-gray-800">
                    <span className="font-semibold text-gray-900">RESTful APIs:</span> Building scalable backend services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <p className="text-gray-800">
                    <span className="font-semibold text-gray-900">Modern UI:</span> React components and state management
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-gray-800">
                    <span className="font-semibold text-gray-900">Database Design:</span> MongoDB schema and queries
                  </p>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
                              rounded-full shadow-lg">
                  <HiLightningBolt className="text-2xl text-yellow-300" />
                  <span className="text-white font-bold text-lg">6-Day Intensive Workshop</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Training
