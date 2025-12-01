import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-700 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Mohamed Safeek Rahman S S. All Rights Reserved.</span>
          </p>
          <p className="text-gray-600 mt-2 text-sm flex items-center justify-center gap-2">
            Built with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
