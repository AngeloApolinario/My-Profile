import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkBase =
    "relative inline-block px-2 py-1 text-sm font-medium transition duration-300";
  const linkHover = "hover:text-indigo-400";

  const activeLink =
    "text-indigo-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-indigo-500 after:rounded-full after:content-[''] after:transition-all after:duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-bold text-indigo-600">
            My Portfolio
          </NavLink>

          <div className="hidden md:flex space-x-8">
            {["/", "/about", "/contact", "/projects"].map((path, idx) => {
              const label = ["Home", "About", "Contact", "Projects"][idx];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `${linkBase} ${linkHover} ${
                      isActive ? activeLink : "text-gray-700"
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-6 shadow-md space-y-4 text-center">
          {["/", "/about", "/contact", "/projects"].map((path, idx) => {
            const label = ["Home", "About", "Contact", "Projects"][idx];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium ${
                    isActive ? "text-indigo-600" : "text-gray-700"
                  } hover:text-indigo-500`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
