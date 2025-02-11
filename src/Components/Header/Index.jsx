import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <FaReact className="mr-3 h-12 text-orange-700" size={"50px"} />
            <span className="text-xl font-bold text-gray-900">Alok's Portfolio</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/resume"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Download Resume
            </Link>
            <Link
              to="/contact"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              Hire Me
            </Link>
            <button
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block opacity-100 scale-100" : "hidden lg:block"
            } transition-all duration-300 justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["Home", "Skills", "Portfolio", "Resume", "About", "Contact", "Github"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        `${isActive ? "text-orange-700" : "text-gray-700"} 
                         block py-2 pr-4 pl-3 duration-300 border-b border-gray-100 
                         hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                         hover:text-orange-700 lg:p-0`
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Index;
