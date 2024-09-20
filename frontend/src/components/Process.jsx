import React, { useState, useEffect } from "react";

const processes = [
  {
    id: 1,
    title: "CUSTOM STRATEGY",
    description:
      "We have extensive experience with popular online brands across various industries, including your niche, ensuring reliable expertise in what you're selling.",
  },
  {
    id: 2,
    title: "EXCELLENT EXECUTION",
    description:
      "The Vistaar WebX team of experts uses the latest, new technology to implement and carry out the most cutting-edge digital marketing.",
  },
  {
    id: 3,
    title: "TIME-TESTED TRACK RECORD",
    description:
      "The case studies and testimonials are authentic. Referrals are the best indicator that you’re doing a great job.",
  },
  {
    id: 4,
    title: "SOCIAL MEDIA RELATIONS",
    description:
      "Staying connected pays off. We have more access to mainstream media outlets and top-tier journalists, which results in better content.",
  },
  {
    id: 5,
    title: "IT IS CENTERED ABOUT YOU",
    description:
      "Our unique, highly accurate solutions are created to address your needs. How do we know what you need, furthermore? Easy: We pay attention.",
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % processes.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full px-20 py-12">
      {/* Large "01" background number */}
      <div className="absolute top-[-40px] left-8 text-9xl text-gray-200 font-bold opacity-30 z-8">
        {processes[activeIndex].id < 10
          ? `0${processes[activeIndex].id}`
          : processes[activeIndex].id}
      </div>

      {/* Main Content */}
      <div className="relative z-9">
        <h2 className="text-4xl font-semibold mb-9">Process We Follow</h2>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className={`p-6 border rounded-lg transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "bg-white shadow-lg"
                  : " border-gray-300"
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`h-8 w-8 flex items-center justify-center rounded-full text-white font-bold ${
                    activeIndex === index ? "bg-red-100 text-red-500" : "bg-gray-200"
                  }`}
                >
                  {process.id}
                </div>
                <h3
                  className={`ml-4 text-lg font-medium ${
                    activeIndex === index ? "text-red-500" : "text-[#8a8a8a]"
                  }`}
                >
                  {process.title}
                </h3>
              </div>
              <p className="text-sm text-[#8a8a8a]">{process.description}</p>
            </div>
          ))}
          <div className="mt-24">
          <div className="flex flex-row  space-x-4 space-y-4 mb-2">
          <button className="text-white px-4 py-2 rounded-3xl bg-[#c00000] hover:bg-[#FFFFFF] hover:border-[#c00000] hover:text-[#c00000] hover:border-2 h-12 w-32">
            Contact Us
          </button>
          <button className="px-4 py-[0.25px] rounded-lg  hover:text-[#f0bd01] ">
            Free Consult <span className="text-xl ">&#8594;</span>
          </button>
          </div>
          </div>
          
        </div>

        {/* Buttons */}
        <div className="flex flex-row  space-x-4 ">
          
        </div>
      </div>
    </div>
  );
};

export default Process;
