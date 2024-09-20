import React from 'react';

const PopularBrands = () => {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <div className="flex items-center space-x-8">
        
        {/* Left Side - Text Section */}
        <div className="w-1/2 p-16">
        <div className='pl-[180px]'>
      <img src='./src/assets/PopularBrand2.png'className=''/>

        </div>
          <div className="bg-yellow-500 p-8 rounded-3xl lg:h-[335px] lg:w-[1350px] ">
            <div className='h-[245px] w-[552px] pl-8 mt-4'>
            <button className="bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold hover:text-white hover:bg-[#f0bd01] border
          hover:border-white">
              Explore More
            </button>
            <h2 className="text-[64px] font-bold text-white mt-6 leading-snug">
              Popular Brands With Us
            </h2>
            </div>
            
          
            
          </div>
          <div className="absolute mt-7 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-1/2 flex justify-center items-center relative bottom-15 ">
          {/* Phone Mockup */}
          <img
            src="./src/assets/PopularBrand1.png"
            alt="Phone Mockup"
            className="w-[3600px] h-auto "
          />
          {/* Image inside Phone */}
          <div className="absolute  w-[128px] h-[440px] flex items-center justify-center ">
            <img
              src="./src/assets/PopularBrand3.png"
              alt="Shop Image"
              className="rounded-lg"
            />
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default PopularBrands;
