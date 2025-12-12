import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion';
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About Us', 'Services', 'Volunteer', 'Contact'];

  // ✅ Logout handler
  const handleLogout = () => {
    // Token/cookie clear logic (example)
    localStorage.removeItem("token"); // अगर token localStorage में है
    navigate("/Login"); // Redirect to login
  };


  return (
  <>
    <nav className="bg-yellow-100 shadow-md hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 text-2xl font-bold text-orange-600">
           CampusConnect 
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="" className="text-gray-700 hover:text-orange-500 font-medium">Home</NavLink>
            <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium">About Us</a>
           <NavLink to="/QRScanner"> <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium">Services</a></NavLink>
            <NavLink to="/AdminLogin"><a href="#volunteer" className="text-gray-700 hover:text-orange-500 font-medium">Volunteer</a></NavLink>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/Login">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
             SignIn
            </button>
            </NavLink>
            <NavLink to="/SignUp">
              <button className="bg-white border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100 transition">
             SignUp
            </button>
            </NavLink>
            <NavLink to="">
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>

            </NavLink>
          </div>
        </div>
      </div>
    </nav>

{/* Mobile View  */}

 <nav className="bg-yellow-100 shadow-md block  md:hidden">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">Online Bhandara</div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-orange-600 text-3xl focus:outline-none md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
 className="md:hidden px-4 pb-4 space-y-2">
          {/* {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="block text-gray-700 font-medium hover:text-orange-500 text-center"
            >
              {item}
            </a>
          ))} */}
           <NavLink to="/QRScanner"> <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium">Services</a></NavLink>
          <div className="mt-4 space-y-2 ml-3">
            <Link to="/QRScanner"><button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition text-c">
              Donate Now
            </button></Link>
            <button className="w-full border border-orange-500 text-orange-500 py-2 rounded hover:bg-orange-100 transition">
              Become a Volunteer
            </button>
             <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>


          </div>
        </motion.div>
      )}
    </nav>
  </>
  )
}

export default Header;
