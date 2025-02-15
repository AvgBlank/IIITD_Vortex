import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000] text-white p-10">
      <h2 className="text-4xl font-bold mb-10">Our Uniqueness?</h2>

      {/* Interlinked Circles */}
      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        <div className="absolute w-[100px] h-[100px] flex items-center justify-center text-center border border-white rounded-full top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:bg-white hover:text-black">
          High Standard
        </div>
        <div className="absolute w-[100px] h-[100px] flex items-center justify-center text-center border border-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:bg-white hover:text-black">
          Value for Design
        </div>
        <div className="absolute w-[100px] h-[100px] flex items-center justify-center text-center border border-white rounded-full left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:bg-white hover:text-black">
          Cost Effective
        </div>
        <div className="absolute w-[100px] h-[100px] flex items-center justify-center text-center border border-white rounded-full right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:bg-white hover:text-black">
          Innovation
        </div>
        <div className="absolute w-[100px] h-[100px] flex items-center justify-center text-center border border-white rounded-full top-1/3 left-1/3 transform transition-all duration-300 hover:bg-white hover:text-black">
          Customer Focus
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 flex gap-10">
        <div className="w-64 p-6 bg-[#1A1A2E] rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-white hover:text-black">
          <h3 className="text-lg font-semibold">TECH VISIONARY</h3>
          <p className="text-sm mt-4">Revolutionizing fintech with seamless digital solutions.</p>
        </div>
        <div className="w-64 p-6 bg-[#1A1A2E] rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-white hover:text-black">
          <h3 className="text-lg font-semibold">GROWTH ARCHITECT</h3>
          <p className="text-sm mt-4">Driving financial access and inclusion for all.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
