import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-1.5 flex items-center transition outline-none focus:ring-0"
      >
        Courses
        <svg
          className={`w-2 h-2 ml-1 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-50">
          <ul className="py-1 text-xs text-gray-700">
            <li>
              <a
                href="#"
                className="block px-3 py-1 hover:bg-gray-100 transition"
              >
                Web Dev
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-1 hover:bg-gray-100 transition"
              >
                ML
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-1 hover:bg-gray-100 transition"
              >
                Data Sci
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-1 hover:bg-gray-100 transition"
              >
                Cyber Sec
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
