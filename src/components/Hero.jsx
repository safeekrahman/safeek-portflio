import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { HiDownload, HiCode } from "react-icons/hi";
import myPhoto from "../assets/pic1.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Mohamed Safeek Rahman S S
                </span>
                <br />
                {/* <span className="text-gray-900">Rahman S S</span> */}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                MCA Graduate
              </p>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                Aspiring MERN Stack Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-700 max-w-xl italic"
            >
              "Passionate about building interactive web experiences and
              continuously learning modern JavaScript technologies."
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2"
              >
                <HiCode className="text-xl" />
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                <HiDownload className="text-xl" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <a
                href="mailto:safeeksafeek903@gmail.com"
                className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
                title="Email"
              >
                <FaEnvelope className="text-2xl" />
                <span className="hidden sm:inline">
                  safeeksafeek903@gmail.com
                </span>
              </a>
              <a
                href="tel:+918825594475"
                className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
                title="Phone"
              >
                <FaPhone className="text-2xl" />
                <span className="hidden sm:inline">+91 8825594475</span>
              </a>
              <a
                href="https://www.linkedin.com/in/safeek-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
                title="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/safeek_6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
                title="Instagram"
              >
                <FaInstagram className="text-2xl" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://github.com/safeekrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
                title="GitHub"
              >
                <FaGithub className="text-2xl" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="relative animate-float-custom flex justify-center">
            {/* Background Glow Circle */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-2xl"></div>

            {/* Profile Image */}
            <img
              src={myPhoto}
              alt="Profile"
              className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-full shadow-2xl border-4 border-white/30"
            />
          </div>

          {/* Right Side - Animated Developer Illustration */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating/Standing Developer SVG */}
          {/* <div className="animate-float-custom">
            <svg
              viewBox="0 0 500 500"
              className="w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              xmlns="http://www.w3.org/2000/svg"
            > */}
              {/* Background Circle */}
              {/* <circle
                cx="250"
                cy="250"
                r="200"
                fill="url(#gradient1)"
                opacity="0.3"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#9333ea", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs> */}

              {/* Developer Character */}
              {/* Head */}
              {/* <circle cx="250" cy="180" r="40" fill="#fbbf24" /> */}

              {/* Body */}
              {/* <rect
                x="220"
                y="220"
                width="60"
                height="80"
                rx="10"
                fill="#6366f1"
              /> */}

              {/* Arms */}
              {/* <rect
                x="180"
                y="230"
                width="40"
                height="15"
                rx="7"
                fill="#6366f1"
              />
              <rect
                x="280"
                y="230"
                width="40"
                height="15"
                rx="7"
                fill="#6366f1"
              /> */}

              {/* Laptop */}
              {/* <rect
                x="200"
                y="250"
                width="100"
                height="60"
                rx="5"
                fill="#1f2937"
              />
              <rect
                x="205"
                y="255"
                width="90"
                height="40"
                fill="#3b82f6"
                opacity="0.8"
              /> */}

              {/* Legs */}
              {/* <rect
                x="230"
                y="300"
                width="15"
                height="60"
                rx="7"
                fill="#4b5563"
              />
              <rect
                x="255"
                y="300"
                width="15"
                height="60"
                rx="7"
                fill="#4b5563"
              /> */}

              {/* Code Symbols */}
              {/* <text
                x="220"
                y="275"
                fill="#fff"
                fontSize="20"
                fontFamily="monospace"
              >
                &lt;/&gt;
              </text> */}

              {/* Floating Code Elements */}
              {/* <text x="150" y="150" fill="#9333ea" fontSize="24" opacity="0.6">
                {}
              </text>
              <text x="330" y="180" fill="#3b82f6" fontSize="24" opacity="0.6">
                &lt;/&gt;
              </text>
              <text x="160" y="330" fill="#ec4899" fontSize="24" opacity="0.6">
                [ ]
              </text>
              <text x="340" y="300" fill="#10b981" fontSize="24" opacity="0.6">
                ( )
              </text> */}
            {/* </svg> */}
          {/* </div> */}

          {/* Decorative Circles */}
          {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div> */}
          {/* <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div> */}
          {/* </div> */}
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
