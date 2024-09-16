import React from "react";
import { FaReact } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Index = () => {
  return (
    /* <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <FaReact size={"30px"} />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
            <li>
              <Link
                to={"/"}
                className="nav-link px-2 text-secondary text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} className="nav-link px-2 text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={"/resume"} className="nav-link px-2 text-white">
                Resume
              </Link>
            </li>
            <li>
              <Link to={"/skills"} className="nav-link px-2 text-white">
                Skills
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link px-2 text-white">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link px-2 text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/github"} className="nav-link px-2 text-white">
                Github
              </Link>
            </li>f
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          ></form>
        </div>
      </div>
    </header>*/
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="/public/rl-01.webp" className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 nav-link`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/skills"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 git`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/portfolio"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 contact`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/resume"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 about`
                  }
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 nav-link`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 contact`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/github"}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 git`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Index;
