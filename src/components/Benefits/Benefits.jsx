const Benefits = () => {
  return (
    <section
      id="Benefits"
      className="rounded-[29px]  w-full max-w-[1600px] mx-auto px-6 py-8 mt-10"
    >
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-[27.66px] md:text-[27.66px] font-semibold text-[#1A73E8]">
          <span className=" text-black">What are the</span> Referral Benefits?
        </h2>
      </div>

      {/* Tables Container */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Left Table */}
        <div className="w-[270px] h-[503px] bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="bg-[#1A73E8] text-white text-lg font-semibold py-4 px-3 text-left">
            All Programs
          </h3>
          <ul className="p-3 space-y-2 ">
            {[
              "Product Management",
              "Data Science",
              "Web Development",
              "Cyber Security",
              "UI/UX Design",
              "Cloud Computing",
              "Digital Marketing",
              "AI & ML",
            ].map((course, index) => (
              <li
                key={index}
                className="p-2 pb-2.5 text-sm text-left text-[18px] text-[#3C4852] border-b "
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Table */}
        <div className="w-[921px] h-[503px] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Table Headings */}
          <div className="bg-[#1A73E859] text-[#1350A0] font-semibold text-lg grid grid-cols-[60%_20%_20%]">
            <div className="py-4 pl-6 text-left">Programs</div>
            <div className="py-4 text-left">Referral Bonus</div>
            <div className="py-4 text-left">Referee Bonus</div>
          </div>

          {/* Table Content with Vertical Line Division */}
          <div className="grid grid-cols-[60%_20%_20%] text-[18px] text-[#3C4852] border-t border-[#3C4852]">
            {[
              ["Program in Product Management", "Rs 7000", "Rs 5000"],
              ["Data Science Bootcamp", "Rs 7000", "Rs 2500"],
              ["Full Stack Web Development", "Rs 7500", "Rs 6000"],
              ["Cyber Security Expert Program", "Rs 5000", "Rs 1000"],
              ["UI/UX Design Masterclass", "Rs 3000", "Rs 2000"],
              ["Cloud Computing Course", "Rs 2000", "Rs 1500"],
              ["Digital Marketing Certification", "Rs 1000", "Rs 500"],
              ["Web-Development Certification", "Rs 3000", "Rs 1500"],
            ].map((row, index) => (
              <div key={index} className="contents border-b border-[#3C4852]">
                <div className="py-3 px-6 text-left border-r border-[#3C4852]">
                  {row[0]}
                </div>
                <div className="py-3 px-6 text-left border-r border-[#3C4852]">
                  {row[1]}
                </div>
                <div className="py-3 px-6 text-left">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refer Now Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-[#1A73E8] text-white rounded-lg text-lg px-6 py-3">
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default Benefits;
