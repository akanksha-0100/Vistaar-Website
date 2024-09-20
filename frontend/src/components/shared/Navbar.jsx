import React, { useState } from "react";

const Navbar = () => {
  // Use an object to track the state of each dropdown
  const [dropdownState, setDropdownState] = useState({
    brandingServices: false,
    integratedMarketing: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow-md p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center pl-10">
          <a src="https://vistaarwebx.com/">
            <img src="./src/assets/logo.png" alt="Logo" className="max-w-32" />
          </a>
        </div>

        <div className="ml-36">
          <ul className="flex space-x-10 pl-12">
            <li className="relative">
              <button
                className="font-semibold flex items-center text-gray-500 hover:text-black"
                onClick={() => toggleDropdown("brandingServices")}
              >
                Branding Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    dropdownState.brandingServices ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownState.brandingServices && (
                <ul className="absolute top-full mt-2 bg-white border rounded-md shadow-lg w-48">
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Overview</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Brand Name</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Brand Advertising</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Brand Strategy</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Brand Experience</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Social Media Marketing</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">UX/UI</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Video Marketing</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                className="font-semibold flex items-center text-gray-500 hover:text-black"
                onClick={() => toggleDropdown("integratedMarketing")}
              >
                Integrated Marketing
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    dropdownState.integratedMarketing
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownState.integratedMarketing && (
                <ul className="absolute top-full mt-2 bg-white border rounded-md shadow-lg w-48">
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Overview</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Marketing Strategy</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Website Design</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Digital Marketing</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Graphic Designing</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Social Media Marketing</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100 text-gray-500 hover:text-black">
                    <a href="#">Logo & Merchandise</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="font-semibold text-gray-500 hover:text-black">
              <a href="#">About Us</a>
            </li>
            <li className="font-semibold text-gray-500 hover:text-black ">
              <a href="#">Projects</a>
            </li>
            <li className="font-semibold text-gray-500 hover:text-black">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4 pr-10">
          <button className="text-white px-4 py-2 rounded-3xl bg-[#c00000] hover:bg-[#FFFFFF] hover:border-[#c00000] hover:text-[#c00000] hover:border-2">
            Contact Us
          </button>
          <button className="px-4 py-2 rounded-3xl hover:text-[#f0bd01]">
            Free Consult <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
