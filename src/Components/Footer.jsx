import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-6 mt-16 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold text-[#00a3e7] mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            Since 2014, Zeusmanpower has been empowering individuals and organizations with top-notch HR consultancy and placement services. We connect talent to opportunities and help businesses achieve success.

          </p>
          <p className="mt-4 text-[#00a3e7]">Tue - Sun: 9:30 AM - 6:30 PM</p>
          <p className="text-[#00a3e7]">Sunday - CLOSED</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#00a3e7] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-[#00a3e7] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#00a3e7] transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-[#00a3e7] transition">Projects</Link></li>
            <li><Link to="/" className="hover:text-[#00a3e7] transition">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-[#00a3e7] transition">Contact Us</Link></li>
          </ul>

        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold text-[#00a3e7] mb-4">Our Office</h3>

          <div className="flex items-start gap-3 mb-3">
            <MdLocationOn className="text-[#00a3e7] text-2xl flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed">
              Zeusmanpower Services Pvt, Ltd. K.P. Stellar,
              NIBM Road, Near Royal Heritage Mall, Pune – 411060
            </p>


          </div>

          <div className="flex items-center gap-3 mb-3">
            <MdPhone className="text-[#00a3e7] text-xl flex-shrink-0" />
            <p className="text-gray-300 hover:text-[#00a3e7] transition-colors duration-300">
              +91 878 860 3290
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail className="text-[#00a3e7] text-xl flex-shrink-0" />
            <p className="text-gray-300 hover:text-[#00a3e7] transition-colors duration-300">
              info@zeusmanpower.co.in
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#00a3e7] mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://wa.me/918788603290"  // WhatsApp with country code
              className="text-[#25D366] hover:text-[#00a3e7] transition"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.facebook.com/majesticrealties?mibextid=LQQJ4d"  // Replace with actual Facebook page
              className="text-[#1877F2] hover:text-[#00a3e7] transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/majesticrealtiespune?igshid=MzRlODBiNWFlZA%3D%3D"  // Replace with actual Instagram
              className="text-[#E4405F] hover:text-[#00a3e7] transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/majesticrealti"  // Replace with actual Twitter handle
              className="text-[#1DA1F2] hover:text-[#00a3e7] transition"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/majesticrealties/?originalSubdomain=in"  // Replace with LinkedIn company page
              className="text-[#0A66C2] hover:text-[#00a3e7] transition"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA"  // Replace with YouTube channel
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#00a3e7] transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} <span className="text-[#00a3e7] font-semibold">zeusmanpower.co.in</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
