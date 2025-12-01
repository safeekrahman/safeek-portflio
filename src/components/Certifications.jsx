import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";
import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const certifications = [
    {
      title: "AI with Machine Learning",
      issuer: "AISECT",
      type: "Professional",
      icon: "🤖",
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Fundamentals of AI",
      issuer: "NPTEL",
      type: "Professional",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Advanced Diploma in Python",
      issuer: "CSC",
      type: "Professional",
      icon: "🐍",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Complete JavaScript Developer",
      issuer: "Udemy",
      type: "Udemy",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
      color: "from-white-400 to-yellow-600",
    },
    {
      title: "React.js Developer",
      issuer: "Udemy",
      type: "Udemy",
      icon: <FaReact className="text-[#61DAFB]" />,
      color: "from-white-500 to-blue-500",
    },
    {
      title: "Node.js Developer",
      issuer: "Udemy",
      type: "Udemy",
      icon: <SiNodedotjs className="text-[#539E43]" />,
      color: "from-white-500 to-emerald-500",
    },
    {
      title: "Tailwind CSS",
      issuer: "Udemy",
      type: "Udemy",
      icon: <SiTailwindcss className="text-[#38BDF8]" />,
      color: "from-white-500 to-blue-500",
    },
    {
      title: "MySQL for Beginners",
      issuer: "Udemy",
      type: "Udemy",
      icon: <SiMysql />,
      color: "from-white-500 to-indigo-500",
    },
  ];

  const professionalCerts = certifications.filter(
    (cert) => cert.type === "Professional"
  );
  const udemyCerts = certifications.filter((cert) => cert.type === "Udemy");

  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and professional development
          </p>

          {/* Professional Certifications */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HiBadgeCheck className="text-3xl text-purple-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalCerts.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glassmorphism p-6 hover-lift group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-full 
                                  flex items-center justify-center text-4xl mb-4 
                                  group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {cert.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {cert.title}
                    </h4>

                    {/* Issuer */}
                    <div
                      className="px-4 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                  border border-purple-500/30 rounded-full"
                    >
                      <p className="text-purple-700 font-semibold text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Udemy Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <HiAcademicCap className="text-3xl text-blue-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Udemy Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {udemyCerts.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: professionalCerts.length * 0.1 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glassmorphism p-6 hover-lift group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-full 
                                  flex items-center justify-center text-4xl mb-4 
                                  group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {cert.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h4>

                    {/* Issuer */}
                    <div
                      className="px-4 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                                  border border-blue-500/30 rounded-full"
                    >
                      <p className="text-blue-700 font-semibold text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 glassmorphism p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {professionalCerts.length}
                </div>
                <div className="text-gray-700">Professional Certs</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {udemyCerts.length}
                </div>
                <div className="text-gray-700">Udemy Courses</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {certifications.length}
                </div>
                <div className="text-gray-700">Total Certifications</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
