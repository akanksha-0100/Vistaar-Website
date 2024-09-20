import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left font-medium text-gray-400 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`text-2xl transform transition-transform ${isOpen ? '' : 'rotate-0'}`}>
          {isOpen ? '×' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-600">
        
        <p>{children}</p>
      </div>
      )}
    </div>
  );
};

const Methodology = () => {
  return (
    <div className="max-w-7xl px-1 mx-[60px] py-16 mt-[600px]">
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="w-2/5">
          <h2 className="text-3xl font-bold mb-10">Our Methodology Characteristics</h2>
          <p className="text-gray-600 mb-9">
            Methodology can be defined as a scientific and systematic search for pertinent information or facts.
            </p>
            <p className="text-gray-600 ">
            In fact, it is an art of information. Research in common parlance refers to a search for knowledge.
          </p>
          </div>
          <div>
          <div className="bg-[#fafafa] shadow-md text-gray-400
           overflow-hidden w-[388px] h-[314px] mx-32">
            {/* Accordion Items */}
            <AccordionItem title="Pre-onboarding">
              This is the pre-onboarding process where we set up the basic requirements.
            </AccordionItem>
            <AccordionItem title="The onboarding process">
              The onboarding process helps familiarize you with the organization’s structure.
            </AccordionItem>
            <AccordionItem title="Before we begin the posting process">
              In this step, we define the guidelines for posting.
            </AccordionItem>
            <AccordionItem title="The Vistaar way">
              Learn the specifics of the Vistaar methodology to ensure consistency.
            </AccordionItem>
            <AccordionItem title="The publishing process">
              Steps and workflows followed during the publishing process.
            </AccordionItem>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/5 pb-10">
        <span className="">‟</span>
          <blockquote className="pl-4 text-sm">
            You can undertake research within most professions, more than a set of skills, it is a way of thinking, 
            examining more critically the various aspects of your professional work."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
