import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

    
          <div>
            <h2 className="text-2xl font-bold text-orange-400">
              CampusConnect
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              A complete college event management platform for registrations,
              QR-based entry, volunteers, and seamless event coordination.
            </p>
          </div>

 
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-orange-400">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-400">Events</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Portals
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Login" className="hover:text-orange-400">
                  Student Login
                </Link>
              </li>
              <li>
                <Link to="/AdminLogin" className="hover:text-orange-400">
                  Admin Panel
                </Link>
              </li>
              <li>
                <Link to="/QRScanner" className="hover:text-orange-400">
                  QR Scanner
                </Link>
              </li>
            </ul>
          </div>

   
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p className="text-sm">📍 College Campus, India</p>
            <p className="text-sm mt-1">📧 campusconnect@gmail.com</p>
            <p className="text-sm mt-1">📞 +91 9XXXXXXXXX</p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © {new Date().getFullYear()} CampusConnect. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Built with ❤️ for College Events
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
