import React from "react";
import { Card, CardContent } from "./ui/card";

const Feature = () => {
  return (
    <div>
      <div className="flex justify-center space-x-14 px-10 py-3 gap-4">
        {/* Card 1 */}
        <Card className=" w-[477px] h-[246px] rounded-none border-none">
          <CardContent className=" flex flex-col  justify-center">
            <div className="pt-2">
              <img
                src="./src/assets/Feature1.png"
                alt=""
                className="h-14 w-16 "
              />
            </div>
            <h2 className="text-xl font-medium mt-6 text-gray-800 text-left ">
              See an increase in sales
            </h2>
            <p className="mt-4 text-gray-500 text-left text-[12px]  ">
            Your company is expanding, but not quickly enough. You work hard to figure out how to seize every lead and sale that is available online. You feel annoyed and stuck as a result. You are aware that there are better options. The competition is outpacing you by using the most recent marketing techniques to generate significantly more leads and sales. It’s time to “capture it all” by expanding beyond your internal or vendor-driven marketing.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className=" rounded-none w-[614px] h-[246px] border-none">
          <CardContent className=" flex flex-col  justify-center   ">
            <div className="pt-2">
              <img
                src="./src/assets/Feature2.png"
                alt="Thumbs Up Icon"
                className="h-14 w-16 "
              />
            </div>
            <h2 className="text-xl font-medium mt-6 text-gray-800 text-left ">
             Our No-Non Sense Team!
            </h2>
            <p className="mt-4 text-gray-500 text-left text-[12px] ">
            Introducing Vistaar WebX We think that no opportunity should be overlooked. Our team of experts will manage and deliver digital greatness as a powerful extension of your own branding department.That dream is now a reality. It’s the reason more senior officials of mid-sized companies select Vistaar WebX as their branding team for outsourcing, giving them the unmatched ability to expand and seize all available opportunities for leads and sales.
            We believe in long-term vision. We eye to grow together and reach new heights.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feature;
