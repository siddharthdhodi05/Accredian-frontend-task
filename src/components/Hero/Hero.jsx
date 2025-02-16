import { useState } from "react";
import hero from "../../assets/hero.png";

import ReferModal from "../ui/ReferModal"; // Import modal component

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Main Hero Section */}
      <section
        
        className={`absolute bg-[#EEF5FF] rounded-[29px] flex items-center justify-between 
                   left-1/2 top-[50px] transform -translate-x-1/2 shadow-2xl px-12 
                   ${isModalOpen ? "backdrop-blur-md" : ""} 
                   scale-90 md:scale-75 w-[95%] md:w-[1360px] h-auto md:h-[692px]`}
      >
        {/* Left Content */}
        <div className="flex flex-col space-y-2">
          {/* Main Heading */}
          <h1 className="font-roboto font-bold text-[50px] md:text-[88px] leading-[60px] md:leading-[88px] tracking-[0%] mb-6 md:mb-12">
            Let’s Learn <br /> & Earn
          </h1>

          {/* Subheading */}
          <h3 className="font-roboto text-[28px] md:text-[40px] leading-[40px] md:leading-[65px] tracking-[0%] font-normal mb-0">
            Get a chance to win <br /> up-to{" "}
            <span className="font-bold text-[#1A73E8] text-[36px] md:text-[54px]">
              Rs 1500
            </span>
          </h3>

          {/* Button */}
          <button
            className="mt-8 md:mt-16 bg-[#1A73E8] text-white rounded-lg text-lg px-3"
            style={{
              width: "160px",
              height: "48px",
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Refer Now
          </button>
        </div>

        {/* Right Image - Hidden on small screens */}
        <div className="hidden md:block">
          <img src={hero} alt="Hero" className="w-[814px] h-[725px]" />
        </div>
      </section>

      {/* Render modal when state is true */}
      <ReferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
