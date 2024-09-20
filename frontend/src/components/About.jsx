import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-32 px-6 md:px-8 lg:px-12">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row mb-40 m-5">
        {/* Left Column */}
        <div className="md:w-1/4 p-4 mr-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-gray-500 leading-relaxed text-xl ">
            In terms of Branding, content marketing, SMM, and SEO, we are one of
            the most valuable agencies since 2020.
          </p>
          <div className="mt-10">
            <a href="#" className="font-medium transition duration-200">
              Know More &#8594;
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-3/4 flex flex-col space-y-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              At Vistaar WebX
            </h2>
            <div className="bg-gray-100 border-l-4 border-yellow-500 p-5 rounded-md shadow-sm">
              <p className="text-gray-600 leading-relaxed text-[sm]">
                Many other enterprises and small to midsize businesses are just
                a few of the most popular and rapidly expanding companies we’ve
                helped in branding. Our results are exceptional. Others may
                focus on templated approaches or design, but we in full-proof
                marketing strategies and brand development. We have catered to
                more than 30 clients where we demonstrate the effectiveness and
                accountability of our methodology.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Since 2020
            </h2>
            <div className="bg-gray-100 border-l-4 border-red-500 p-5 rounded-md shadow-sm">
              <p className="text-gray-600 leading-relaxed text-sm">
                We have developed over 40-50 effective campaigns in various
                industry categories. Our campaigns are documented in our
                methodology data files, ensuring assurance about the strategies
                and tactics that produce results in each vertical.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-14 px-10 py-3">
        {/* Card 1 */}
        <Card className="group hover:shadow-lg transition-shadow duration-300 w-64 h-80 rounded-none hover:bg-black hover:text-white">
          <CardContent className="group flex flex-col  justify-center   ">
            <div className="pt-8">
              <img
                src="./src/assets/handshake.png"
                alt="Handshake Icon"
                className="h-14 w-16 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 text-left group-hover:text-white">
              We have worked with companies just like yours
            </h2>
            <p className="mt-4 text-gray-500 text-left text-sm group-hover:text-white">
              We have experience with popular online brands across various
              industries, ensuring expertise in what you're selling.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="group hover:shadow-lg transition-shadow duration-300 w-64 h-80 rounded-none hover:bg-black hover:text-white">
          <CardContent className="group flex flex-col  justify-center   ">
            <div className="pt-8">
              <img
                src="./src/assets/thumbsUp.png"
                alt="Thumbs Up Icon"
                className="h-14 w-14 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 text-left group-hover:text-white">
              Performance is the center of everything we do
            </h2>
            <p className="mt-4 text-gray-500 text-left text-sm group-hover:text-white">
              We provide you with complete assurance of our work, so you feel
              confident that we are the best choice.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="group hover:shadow-lg transition-shadow duration-300 w-64  h-80 rounded-none hover:bg-black hover:text-white">
          <CardContent className=" group flex flex-col  justify-center   ">
            <div className="pt-8 ">
              <img
                src="./src/assets/tieIcon.png"
                alt="Tie Icon"
                className="h-14 w-14 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 text-left group-hover:text-white">
              We are a Leading Brand Development Company
            </h2>
            <p className="mt-4 text-gray-500 text-left text-sm group-hover:text-white">
              We validate the effectiveness of our strategic recommendations by
              comparing them to existing standards.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
