// Navbar.jsx
import { useState } from "react";

export default function Navbar({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Documentation", ref: refs.documentRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const handleNavigation = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-xl fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center space-x-2 group transform transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <svg
                className="h-8 w-8 text-blue-200 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                AnimalAI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.ref)}
                className="px-4 py-2 text-blue-100 hover:text-white font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white focus:outline-none transition duration-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <div className="pt-2 pb-3 space-y-3">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.ref)}
                className="w-full px-4 py-3 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white transition duration-300 backdrop-blur-sm"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
