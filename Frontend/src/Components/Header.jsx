import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP VIEW ================= */}
      <nav className="bg-yellow-100 shadow-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="text-2xl font-bold text-orange-600">
              CampusConnect
            </div>

            {/* Links */}
            <div className="flex space-x-6">
              <NavLink to="/" className="text-gray-700 hover:text-orange-500 font-medium">
                Home
              </NavLink>
              <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium">
                About Us
              </a>
              <a href="#mission" className="text-gray-700 hover:text-orange-500 font-medium">
               Missions
              </a>
              <NavLink to="/AdminLogin" className="text-gray-700 hover:text-orange-500 font-medium">
                Volunteer
              </NavLink>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium">
                Contact
              </a>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              <NavLink to="/Login">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Sign In
                </button>
              </NavLink>
              <NavLink to="/SignUp">
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100">
                  Sign Up
                </button>
              </NavLink>
              {/* <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button> */}
            </div>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE VIEW ================= */}
      <nav className="bg-yellow-100 shadow-md block md:hidden ">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-600">
            CampusConnect
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-600 text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="px-4 pb-4 space-y-3"
          >
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-center text-gray-700 font-medium hover:text-orange-500"
            >
              Home
            </NavLink>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-center text-gray-700 font-medium hover:text-orange-500"
            >
              About Us
            </a>

            <a href="#mission"
              onClick={() => setIsOpen(false)}
              className="block text-center text-gray-700 font-medium hover:text-orange-500"
            >
             Missions
            </a>

            <NavLink
              to="/AdminLogin"
              onClick={() => setIsOpen(false)}
              className="block text-center text-gray-700 font-medium hover:text-orange-500"
            >
              Volunteer
            </NavLink>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center text-gray-700 font-medium hover:text-orange-500"
            >
              Contact
            </a>

            {/* Buttons */}
            <div className="pt-3 space-y-2">
              <Link to="/Login" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                  Sign In
                </button>
              </Link>

              <Link to="/SignUp" onClick={() => setIsOpen(false)}>
                <button className="w-full border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-100">
                  Sign Up
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

export default Header;
