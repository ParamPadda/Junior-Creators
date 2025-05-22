import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const Footer = () => {
// scrolling functionality function
const scrollToAndHighlight = (targetId) => {
  const navbar = document.getElementById('navbar');
  const targetNavbarLink = document.getElementById(`navbar-${targetId}`);

  if (navbar) {
    navbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Remove underline from all navbar links
  const navbarLinks = document.querySelectorAll('#navbar ul a');
  navbarLinks.forEach(link => {
    link.classList.remove('underline');
  });

  // Add underline to the target navbar link
  if (targetNavbarLink) {
    targetNavbarLink.classList.add('underline');
  }
};





  return (
    <footer className="bg-[#2d122e] text-[#ffff]  shadow-inner">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Junior Creator</h2>
          <p className="text-sm">
            A blogging platform that sparks creativity in kids. Write stories, share your thoughts, and let your imagination grow!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link to='/home' onClick={() => scrollToAndHighlight('home')} className=" hover:underline decoration-solid cursor-pointer">Home</Link>
            <Link to='/home/exploreBlogs' onClick={() => scrollToAndHighlight('blogs')} className=" hover:underline decoration-solid cursor-pointer">Blogs</Link>
            <Link to="/home/about" onClick={() => scrollToAndHighlight('about')} className=" hover:underline decoration-solid cursor-pointer">About Us</Link>
            <Link to='/home/quiz' onClick={() => scrollToAndHighlight('quiz')} className=" hover:underline decoration-solid cursor-pointer">Quiz Zone</Link>
            <Link to='/home/tasks' onClick={() => scrollToAndHighlight('tasks')} className=" hover:underline decoration-solid cursor-pointer">Daily Tasks</Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} /> support@juniorcreator.com
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} /> +91 12345 67890
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} /> Mohali, Punjab, India
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#dad3d9] text-center py-4 text-md text-[#2d122e] font-bold">
        © {new Date().getFullYear()} Junior Creator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
