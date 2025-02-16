const FAQ = () => {
  return (
    <div id="FAQs" className="w-full max-w-[1360px] mx-auto px-4 py-8 mt-9">
      {/* Heading */}
      <h2 className="text-center font-semibold text-[27.66px] leading-[36px] mb-20">
        Frequently Asked Questions
      </h2>

      {/* FAQ Sections */}
      <div className="flex flex-col md:flex-row gap-8 mb-20">
        {/* Sidebar (Buttons Replaced with Divs) */}
        <div className="flex flex-col gap-4">
          <div className="w-[259px] h-[68px] text-lg border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100">
            Eligibility
          </div>
          <div className="w-[259px] h-[68px] text-lg border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100">
            How to use
          </div>
          <div className="w-[259px] h-[68px] text-lg border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100">
            Terms & conditions
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[918px] space-y-4">
          <p className="text-[16.88px] pt-7">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </p>
          <p className="text-[16.88px] pt-9">
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </p>
          <p className="text-[16.88px] pt-7 font-semibold">
            What is the minimum system configuration required?
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-[1250px] h-[170px] bg-[#1A73E8] text-white p-8 rounded-lg flex items-center justify-between">
        <div>
          <h3 className="text-[28.01px] font-semibold mb-2">
            Want to delve deeper into the program?
          </h3>
          <p className="text-base">
            Share your details to receive expert insights from our program team!
          </p>
        </div>

        {/* Get in Touch Button */}
        <button className="w-[200px] h-[52px] border-2 border-white text-[#1A73E8] bg-white rounded-lg text-lg font-semibold">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
