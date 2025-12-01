import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show success toast
    setShowSuccess(true)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    // Hide toast after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'safeeksafeek903@gmail.com',
      link: 'mailto:safeeksafeek903@gmail.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 8825594475',
      link: 'tel:+918825594475',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'safeek-rahman',
      link: 'https://www.linkedin.com/in/safeek-rahman/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      value: '@safeek_6',
      link: 'https://www.instagram.com/safeek_6/',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com',
      link: 'https://github.com/safeekrahman',
      color: 'from-gray-700 to-gray-500'
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's collaborate and build something amazing together</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glassmorphism p-8 relative"
            >
              {/* Floating Envelope Animation */}
              <div className="absolute -top-6 -right-6 text-6xl opacity-20">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaEnvelope className="text-purple-400" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-2 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                             text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 
                             focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Mohamed Safeek"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-2 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                             text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 
                             focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-800 mb-2 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg 
                             text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 
                             focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Let's discuss your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
                           rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 
                           transition-all duration-300 hover:scale-[1.02] shadow-lg 
                           hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glassmorphism p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-lg 
                               hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full 
                                    flex items-center justify-center text-white text-xl 
                                    group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm">{info.label}</p>
                        <p className="text-gray-900 font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="glassmorphism p-6 text-center"
              >
                <p className="text-gray-800 mb-4">
                  Available for freelance projects and full-time opportunities
                </p>
                <div className="flex justify-center gap-3">
                  <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-green-300 font-semibold text-sm">● Available Now</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 right-8 glassmorphism-strong p-4 shadow-2xl z-50 
                   border-l-4 border-green-500"
        >
          <div className="flex items-center gap-3">
            <HiCheckCircle className="text-3xl text-green-400" />
            <div>
              <p className="text-gray-900 font-semibold">Message Sent!</p>
              <p className="text-gray-700 text-sm">I'll get back to you soon.</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Contact
