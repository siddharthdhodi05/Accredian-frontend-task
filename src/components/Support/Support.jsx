import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "About",
      links: ["Company", "Team", "Careers", "Blog"],
    },
    {
      title: "Services",
      links: ["Web Development", "App Development", "SEO", "Marketing"],
    },
    {
      title: "Resources",
      links: ["Docs", "FAQs", "Support", "Community"],
    },
    {
      title: "Contact",
      links: ["Email", "Phone", "Address", "Social Media"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer
      id="Support"
      className="bg-[#282828] w-full pb-36 mt-24 text-white py-10 px-6 md:px-20"
    >
      {/* Accredian Heading */}
      <div className="text-center text-2xl font-bold mb-6 uppercase tracking-wide">
        Accredian
      </div>

      {/* Footer Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <button
              className="w-full flex justify-between items-center py-2 text-lg font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="space-y-2 mt-2">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-white cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-400">
        © 2025 Accredian. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
