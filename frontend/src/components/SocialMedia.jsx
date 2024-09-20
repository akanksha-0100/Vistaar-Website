import React, { useState, useEffect } from "react";

import SocialMedia2 from "../assets/SocialMedia2.png";
import SocialMedia3 from "../assets/SocialMedia3.png";
import SocialMedia4 from "../assets/SocialMedia4.png";

const images = [
  SocialMedia3,
  SocialMedia2,
  SocialMedia3,
  SocialMedia4,
  SocialMedia2,
];

const SocialMedia = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="py-40 container">
      <div className="text-center">
        <h2 className="font-semibold text-4xl">
          Vistaar Social Media Management
        </h2>
        <p className="text-sm mt-4 text-[#8A8A8A]">
          We are the best in the business in terms of social media management.
          Don’t believe us? here are a few samples!!
        </p>

        <div className="flex justify-center mt-2 relative max-w-5xl text-center ">
          <div className="grid grid-cols-5 gap-2 ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-1000 ease-in-out ${
                  index === activeImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: "100%",
                  bottom: -820,
                  left: 240,
                }}
              >
                <img
                  src={image}
                  alt={`Social Media ${index + 1}`}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
