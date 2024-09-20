import React from "react";
import { Card, CardContent } from "./ui/card";

const Blogs = () => {
  return (
    <div className="my-[150px]">
      <div>
        <h2 className="text-center font-bold text-4xl mb-14">Blogs</h2>
      </div>
      <div className="flex justify-center space-x-14 px-10 py-3">
        {/* Card 1 */}
        <Card className=" hover:shadow-lg transition-shadow duration-300 w-[361px] h-[443px] rounded-lg border-none">
          <CardContent className="  flex flex-col  justify-center   ">
            <div className="pt-8">
              <img
                src="./src/assets/Blogs3.png"
                alt="Tie Icon"
                className="h-[204px] w-[301px] rounded-[5px]"
              />
            </div>
            <p className="mt-4 text-gray-500 text-left text-sm font-normal">
              #Uncategorised
            </p>
            <h2 className="text-xl font-medium mt-4 text-left w-72">
              Key Element Of A Successful Brand Development <br></br>
              Plan
            </h2>
            <p className="my-6 text-gray-500 text-left text-sm font-normal">
              Sanskaar Singh &#x2022; 2023
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className=" hover:shadow-lg transition-shadow duration-300 w-[361px] h-[443px] rounded-lg border-none">
          <CardContent className="  flex flex-col  justify-center   ">
            <div className="pt-8">
              <img
                src="./src/assets/Blogs2.png"
                alt="Tie Icon"
                className="h-[204px] w-[301px] rounded-[5px]"
              />
            </div>
            <p className="mt-4 text-gray-500 text-left text-sm font-normal">
              #Uncategorised #Branding #Digitalmarketing
            </p>
            <h2 className="text-xl font-medium mt-4 text-left ">
              Crafting A Winning Brand: 5 Essential Tips For Long Term Success
            </h2>
            <p className="my-6 text-gray-500 text-left text-sm font-normal">
              Sanskaar Singh &#x2022; December 17, 2022
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className=" hover:shadow-lg transition-shadow duration-300 w-[361px] h-[443px] rounded-lg border-none">
          <CardContent className="  flex flex-col  justify-center   ">
            <div className="pt-8">
              <img
                src="./src/assets/Blogs1.png"
                alt="Tie Icon"
                className="h-[204px] w-[301px] rounded-[5px]"
              />
            </div>
            <p className="mt-4 text-gray-500 text-left text-sm font-normal">
              #Startups #Branding #Collaboration
            </p>
            <h2 className="text-xl font-medium mt-4 text-left ">
              Unlock New Opportunities: <br></br>Why Collaborating With{" "}
              <br></br>Startup Is The Key To Success
            </h2>
            <p className="my-6 text-gray-500 text-left text-sm font-normal">
              Sanskaar Singh &#x2022; December 15, 2022
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
