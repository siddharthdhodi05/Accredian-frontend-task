import { useState } from "react";
import DropDown from "../ui/DropDown";
import { FiMenu, FiX } from "react-icons/fi";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      id="Refer"
      className="w-full bg-white py-3 px-6 flex justify-between items-center max-w-[1000px] mx-auto relative z-50"
    >
      {/* Left Side - Logo & Dropdown */}
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold text-blue-500">accredian</h2>
        <DropDown />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 text-2xl"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Right Side - Links & Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex space-x-2 text-[13px] text-[#1A202C] px-4">
          <a href="#" className="hover:text-blue-500 transition px-3">
            Refer & Learn
          </a>
          <a href="#" className="hover:text-blue-500 transition px-3">
            Resources
          </a>
          <a href="#" className="hover:text-blue-500 transition px-3">
            About Us
          </a>
        </div>
        <div className="space-x-2">
          <button className="text-gray-700 bg-gray-200 px-3 py-1 rounded-lg text-[13px] hover:bg-gray-300 transition">
            Login
          </button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-[13px] hover:bg-blue-600 transition">
            Try for Free
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden max-h-60 overflow-y-auto backdrop-blur-md z-50 border-t border-gray-200">
          <a href="#" className="hover:text-blue-500 transition text-lg">
            Refer & Learn
          </a>
          <a href="#" className="hover:text-blue-500 transition text-lg">
            Resources
          </a>
          <a href="#" className="hover:text-blue-500 transition text-lg">
            About Us
          </a>
          <button className="text-gray-700 bg-gray-200 px-6 py-2 rounded-lg text-[13px] hover:bg-gray-300 transition">
            Login
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-[13px] hover:bg-blue-600 transition">
            Try for Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
