import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
 import Images from '../assets/images/images';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    // { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-50 top-0">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-1">
        {/* Logo */}
        <div className="flex flex-col items-start space-y-1 h-auto">
          <img
            src={Images.zeusmanpowerWhite}
            alt="Zeus Manpower Company Logo"
            title="Zeus Manpower Company Logo"
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black dark:text-white rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D9BD6A]"
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Nav Links */}
        <div
          className={`${menuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 font-medium border border-[#BF9039] md:border-0 rounded-lg bg-white md:bg-transparent dark:bg-black md:dark:bg-transparent md:space-x-8 p-4 md:p-0">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className="block py-2 px-3 rounded-md text-black dark:text-white hover:bg-[#00a3e7] md:hover:bg-transparent md:hover:text-[#00a3e7] dark:hover:bg-[#00a3e7] md:dark:hover:bg-transparent transition duration-300"
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Social Icons for Mobile */}
            <div className="justify-center flex md:hidden items-center space-x-6 py-10">
              <a
                href="https://wa.me/917843077794"
                className="text-[#25D366] hover:text-[#D9BD6A] transition"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d"
                className="text-[#1877F2] hover:text-[#D9BD6A] transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D"
                className="text-[#E4405F] hover:text-[#D9BD6A] transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/majesticrealti"
                className="text-[#1DA1F2] hover:text-[#D9BD6A] transition"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in"
                className="text-[#0A66C2] hover:text-[#D9BD6A] transition"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA"
                className="text-[#FF0000] hover:text-[#D9BD6A] transition"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
