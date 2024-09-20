import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Quote1 from "./Quote1";
import Quote2 from "./Quote2";
import Feature from "./Feature";
import PopularBrands from "./PopularBrands";

import SocialMedia from "./SocialMedia";
import Blogs from "./Blogs";
import Methodology from "./Methodology";
import Process from "./Process";


const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <About />
      <Quote1 />
      <Services />

      <Feature />
      <PopularBrands/>
      <Quote2 />
      <Process/>
      <SocialMedia/>
      <Methodology/>
      <Blogs/>
    </div>
  );
};

export default Home;
