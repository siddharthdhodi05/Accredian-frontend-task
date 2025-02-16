import { useState } from "react";

const MainNavbar = () => {
  const [active, setActive] = useState("Refer");

  return (
    <nav
      className="hidden md:flex fixed bg-[#1A73E81C] backdrop-blur-lg border border-white/10 shadow-lg shadow-gray-200/20 
                 rounded-full items-center justify-center px-6 py-2 z-10 
                 left-1/2 transform -translate-x-1/2"
      style={{
        width: "697px",
        height: "50px",
        top: "70px",
      }}
    >
      {["Refer", "Benefits", "FAQs", "Support"].map((item) => (
        <div key={item} className="relative m-6 px-6 py-2">
          <a
            href={`#${item}`}
            onClick={() => setActive(item)}
            className={`capitalize text-[#4B4B4B] text-[20px] transition-all ${
              active === item ? "text-blue-500" : "hover:text-blue-500"
            }`}
          >
            {item}
          </a>
          {/* Dot Indicator */}
          {active === item && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-blue-400 rounded-full"></span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MainNavbar;
