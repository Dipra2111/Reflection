import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSpa } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-lime-400 w-full px-6 py-4 flex justify-between items-center shadow-md relative">
      {/* Left - Logo and Website Name */}
      <Link to="/" className="flex items-center space-x-2">
        <FaSpa className="text-2xl text-black" />
        <span className="font-bold text-xl text-black tracking-wide">Reflection</span>
      </Link>

      {/* Center - Navigation Links */}
      <div className="space-x-6 text-black font-medium">
        <Link to="/meditate" className="hover:text-gray-700">Meditate</Link>
        <Link to="/panic-help" className="hover:text-gray-700">Panic Help</Link>
        <Link to="/therapy" className="hover:text-gray-700">Therapy</Link>
        <Link to="/contact" className="hover:text-gray-700">Contact Us</Link>
      </div>

      {/* Right - User */}
      {user ? (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 text-black hover:text-gray-700"
          >
            <FaUser className="text-lg" />
            <span className="font-medium">{user.name}</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 text-black">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/mymoods"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                My Moods
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/user" className="flex items-center space-x-2 text-black hover:text-gray-700">
          <FaUser className="text-lg" />
          <span className="font-medium">Sign In</span>
        </Link>
      )}
    </nav>
  );
}
