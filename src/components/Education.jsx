import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap } from 'react-icons/hi'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const educationData = [
    {
      degree: 'MCA (Master of Computer Applications)',
      institution: 'BSA Crescent Institute of Science and Technology',
      period: 'Aug 2023 – Jun 2025',
      score: '8.41 CGPA',
      icon: '🎓',
    },
    {
      degree: 'BSc Mathematics',
      institution: 'Sadakathullah Appa College, Tirunelveli',
      period: 'Jul 2020 – May 2023',
      score: '8.39 CGPA',
      icon: '🎓',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'TIME Matric Hr. Sec. School, Araikulam',
      period: 'Jun 2018 – May 2020',
      score: '71.83%',
      icon: '📚',
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'The Golden Jubilee Matric School',
      period: 'Jul 2006 – May 2018',
      score: '72.2%',
      icon: '📖',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey</p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glassmorphism p-6 hover-lift group">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {edu.icon}
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-purple-700 font-semibold mb-2">
                            {edu.institution}
                          </p>
                          <p className="text-gray-700 text-sm mb-2">{edu.period}</p>
                          <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full">
                            <span className="text-purple-700 font-semibold">{edu.score}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Icon at Bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className="glassmorphism p-6 rounded-full">
              <HiAcademicCap className="text-6xl text-purple-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
