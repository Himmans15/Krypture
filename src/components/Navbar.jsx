import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-yellow-400">
              Krypture
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-400 ">
              Home
            </Link>
            <Link to="/news" className="hover:text-yellow-400 ">
              News
            </Link>
            <Link to="/converter" className="hover:text-yellow-400">
              Converter
            </Link>
            <Link to="/about" className="hover:text-yellow-400">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1 bg-gray-800">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Home
          </Link>
          <Link
            to="/news"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            News
          </Link>

          <Link
            to="/converter"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Converter
          </Link>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
