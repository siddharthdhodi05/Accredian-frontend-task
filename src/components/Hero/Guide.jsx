import { useState, useEffect } from "react";
import how from "../../assets/how.svg";
import how2 from "../../assets/how2.svg"; // Smaller image for mobile
import ReferModal from "../ui/ReferModal"; // Import modal

const Guide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(() =>
    window.innerWidth < 768 ? how2 : how
  );

  // Handle responsive image change
  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth < 768 ? how2 : how);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure it runs initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        
        className="bg-[#EEF5FF] rounded-[29px] 
                 flex flex-col items-center justify-center text-center px-6 py-8 
                 w-full max-w-[1600px] mx-auto 
                 mt-[200px] md:mt-[640px]" // Reduced gap for small screens
        style={{ minHeight: "550px" }}
      >
        {/* Heading */}
        <h2 className="text-[24px] md:text-[28px] font-semibold mb-6 md:mb-8">
          How Do I <span className="text-[#1A73E8]">Refer?</span>
        </h2>

        {/* Image */}
        <div className="flex justify-center w-full">
          <img
            src={imageSrc}
            alt="How to refer"
            className={`h-auto max-w-full ${
              imageSrc === how2 ? "w-[70%] sm:w-[60%]" : "md:w-[1100px]"
            }`}
          />
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <button
            className="bg-[#1A73E8] text-white rounded-lg text-lg md:text-[20px] px-5 py-2 md:px-6 md:py-3"
            onClick={() => setIsModalOpen(true)}
          >
            Refer Now
          </button>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <ReferModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Guide;
