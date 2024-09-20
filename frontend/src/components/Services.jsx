import React, { useState } from "react";
import ServiceImage1 from "../assets/ServiceImage1.png";
import ServiceImage2 from "../assets/ServiceImage2.png";
import ServiceImage3 from "../assets/ServiceImage3.png";
import ServiceImage4 from "../assets/ServiceImage4.png";
import ServiceImage5 from "../assets/ServiceImage5.png";
import ServiceImage6 from "../assets/ServiceImage6.png";
import ServiceImage7 from "../assets/ServiceImage7.png";
import ServiceImage8 from "../assets/ServiceImage8.png";


const services = [
  {
    name: "UI and UX",
    description:
      "The appearance of your website, the way it looks and feels, the layout, typography, colors, and design elements are part of the UI of a website, whereas UX is how your visitor navigates through your website. It refers to the ease of access of the website and it generally leaves an impression of the company/brand in minds of the visitors.",
    images: [ServiceImage1, ServiceImage2, ServiceImage3, ServiceImage4],
  },
  {
    name: "Social Media Marketing",
    description:
      "Social media marketing (SMM) uses social media and social networks like Facebook, Twitter, and Instagram to market products and services, engage with existing customers, and reach new ones. It is a form of internet marketing that uses social media as the medium to promote your product or service.",
    images: [ServiceImage5, ServiceImage6, ServiceImage7, ServiceImage8],
  },
  {
    name: "Logo and merchandise",
  },
  {
    name: "Brand Communication",
  },
  {
    name: "Packaging and design",
  },
  {
    name: "Brand strategy",
  },
  {
    name: "Video marketing",
  },
  {
    name: "Advertising",
  },
  {
    name: "Website design",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceClick = (service) => {
    // Move clicked service to the top
    const newServices = services.filter((s) => s.name !== service.name);
    newServices.unshift(service);
    setSelectedService(service);
  };

  return (
    <>
<div>
  <h2 className="text-center text-[36px] font-bold">Services we provide</h2>
    </div>
    <div className="flex flex-col md:flex-row px-10 py-10">
      
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4  p-8 mb-40 ">
        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              className={`py-2 px-5 mb-2 text-lg cursor-pointer ${
                selectedService.name === service.name
                  ? " text-black bg-[#ffffff] rounded-lg border-2 border-gray-300"
                  : "bg-[#fafafa] text-[#8a8a8a] font-normal rounded-lg  transition duration-200 ease-in"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 p-4 relative pl-44">
        <h2 className="text-[6rem]  font-bold text-[#E9E9E9] leading-[5.5rem] pb-6">
          {selectedService.name}
        </h2>
        <div>
          <div className="relative z-7 flex flex-col md:flex-row">
            {/* Left Images (L-shaped) */}
            <div className="flex flex-col space-y-4 ">
              <div className="flex"> 
                {/* Top Large Image */}
                <img
                  src={selectedService.images[0]}
                  alt="Main"
                  className=" shadow-lg mr-4 hover:opacity-50 "
                />
                <div className="w-96 pt-14"><p className="font-normal text-sm text-[#999898]">
                {selectedService.description}
              </p></div>
                
              </div>

              
              
            
              <div className="flex space-x-4">
                {/* Bottom Small Images (side by side) */}
                <img
                  src={selectedService.images[1]}
                  alt="Small 1"
                  className=" shadow-lg hover:opacity-50"
                />
                <img
                  src={selectedService.images[2]}
                  alt="Small 2"
                  className=" shadow-lg hover:opacity-50"
                />
                <img
                  src={selectedService.images[3]}
                  alt="Small 3"
                  className="shadow-lg hover:opacity-50"
                />
              </div>
            </div>

            
          </div>
          <div className="text-right ">
          <a href="#" className=" hover:text-yellow-500">
            View all &#8594;
          </a>
        </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Services;
