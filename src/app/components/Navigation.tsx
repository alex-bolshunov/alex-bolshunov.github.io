import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F8F9FA]/80 border-b border-[#212529]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-semibold text-[#212529] text-lg">
            DataAnalyst
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-[#212529] hover:text-[#007A87] transition-colors">
              Projects
            </a>
            <a href="#about" className="text-[#212529] hover:text-[#007A87] transition-colors">
              About
            </a>
            <a
              href="#resume"
              className="px-6 py-2 bg-[#007A87] text-white rounded-lg hover:bg-[#006070] transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#212529]" />
            ) : (
              <Menu className="w-6 h-6 text-[#212529]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a
              href="#projects"
              className="block text-[#212529] hover:text-[#007A87] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="block text-[#212529] hover:text-[#007A87] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#resume"
              className="block px-6 py-3 bg-[#007A87] text-white rounded-lg hover:bg-[#006070] transition-colors text-center min-h-[48px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
