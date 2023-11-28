
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com">
            <FaFacebook size={22} />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter size={22} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram size={22} />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin size={22} />
          </a>
        </div>
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Developed By Irfan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
