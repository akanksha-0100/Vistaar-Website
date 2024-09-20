import React, { useState, useEffect } from "react";

const headings = [
  'Adapt',
  'Innovate',
  'Deliver'
];

const services = [
  { name: "Website design", delay: 0, span: "col-span-1" },
  { name: "Brand Strategy", delay: 1, span: "col-span-2" },
  { name: "Logo and merchandise", delay: 2, span: "col-span-2" },
  { name: "Packaging and design", delay: 3, span: "col-span-1" },
  { name: "Brand Communication", delay: 4, span: "col-span-1" },
  { name: "Video Marketing", delay: 5, span: "col-span-2" },
  { name: "UX/UI", delay: 6, span: "col-span-2" },
  { name: "Advertising", delay: 7, span: "col-span-1" },
];



const HeroSection = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const headingInterval = setInterval(() => {
      setActiveHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000); 
    return () => clearInterval(headingInterval);
  }, []);

  return (
    <div className="bg-white mt-44">
      {/* Header Section */}
      
      <div className="text-center py-10">
      <h1 className=" text-6xl font-bold lg:px-44 md:px-5 leading-snug ">
          <span className="text-yellow-500 transition-all duration-1000 ease-in-out">{headings[activeHeadingIndex]}</span> : Comprehensive Solutions for Your Brand's Success!
        </h1>
        <p className="mt-4 text-gray-500 lg:px-96 md:px-7 text-md">
          You are aware that there are better options. The competition is
          outpacing you by using the most recent marketing techniques to
          generate significantly more leads and sales.
        </p>
        {/* Buttons */}
        <div className="mt-6">
          <button className="text-white px-4 py-2 rounded-3xl bg-[#c00000] hover:bg-[#FFFFFF] hover:border-[#c00000] hover:text-[#c00000] hover:border-2">
            Contact Us
          </button>
          <button className="px-4 py-2 rounded-3xl hover:text-[#f0bd01]">
            Free Consult <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative h-72 mt-2 px-1 flex justify-center">
        <div className="absolute grid grid-cols-3 gap-3 w-full max-w-6xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-center   py-4 transition-all duration-500 ease-out ${
                service.span
              } ${
                index === activeServiceIndex
                  ? "text-lg"
                  : "text-gray-500 text-base"
              }`}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by Brands Section */}

      <div className="flex justify-center space-x-10 mt-4 py-16">
        <h3 className="text-center text-gray-500 text-sm">Trusted By Brands</h3>
        <img src="./src/assets/trustedBrands.png" className="h-6"></img>
      </div>
    </div>
  );
};

export default HeroSection;
