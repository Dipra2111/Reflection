import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lime-400 text-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We're dedicated to supporting mental health and emotional well-being
            by providing resources, guidance, and a safe space to reflect,
            learn, and grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/about" className="hover:text-green-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-green-600 transition">
                Resources
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-green-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@reflectioncare.com</p>
          <p className="text-sm mt-2">Phone: +91 98765 43210</p>
          <p className="text-sm mt-2">Location: India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-lime-400 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Reflection Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
