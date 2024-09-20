import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-6">
        {/* Logo and Description */}
        <div className="text-center mb-8">
          <img src="./src/assets/logo.png" alt="Vistaar Webx" className="mx-auto mb-4" />
          <p className="justify-center text-center text-[#131313]">
            Vistaar Webx is your one-stop tailored destination for all your branding needs. Be it
            Website development or social media management,<br></br> Vistaar is a creative branding agency
            that works concurrently with your organization to enrich the brand and expand business
            affairs.
          </p>
          <div className='w-[32rem] h-[0.5px] bg-yellow-500 mx-auto my-14'></div>
        </div>  
  
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 text-center md:text-left mx-12">
          {/* Follow Us Here */}
          <div>
            <h3 className="text-lg  mb-4">Follow Us Here!</h3>
            <div className="space-y-2 grid grid-cols-2 mt-4 gap-5">
              <a href="#" className="block"><img src="./src/assets/Facebook.png" alt="Facebook" /></a>
              <a href="#" className="block"><img src="./src/assets/Twitter.png" alt="X" /></a>
              <a href="#" className="block"><img src="./src/assets/Instagram.png" alt="Instagram" /></a>
              <a href="#" className="block"><img src="./src/assets/Linkedin.png"/></a>
              <a href="#" className="block"><img src="./src/assets/Youtube.png" alt="YouTube" /></a>
              <a href="#" className="block"><img src="./src/assets/Pinterest.png" alt="YouTube" /></a>

            </div>
          </div>

          {/* Branding Service */}
          <div>
            <h3 className="text-lg   mb-4">Branding Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Brand Advertising</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Brand Strategy</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Brand Experience</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Social Media Marketing</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">UX/UI</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Video Marketing</a></li>
            </ul>
          </div>

          {/* Integrated Marketing */}
          <div>
            <h3 className="text-lg  mb-4">Integrated Marketing</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Brand Advertising</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Brand Name</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Brand Experience</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Marketing Strategy</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Website Design</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg  mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#8a8a8a] hover:underline">About Vistaar</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Contact & Support</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">FAQs</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Company History</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Get a Quote</a></li>
              <li><a href="#" className="text-[#8a8a8a] hover:underline">Hiring</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg   mb-4">Contact Information</h3>
            <ul className="space-y-2 ">
              <li className="text-[#8a8a8a]"><img src='./src/assets/Vector1.png'/> +91 955-990-3700</li>
              <li className="text-[#8a8a8a]"><img src='./src/assets/Vector3.png'/> hello@vistaarwebx.com</li>
              <li className="text-[#8a8a8a]"><img src='./src/assets/Vector2.png'/>
                2 Floor, Patel Complex, Nexus co-working Opposite DB Mall, MP Nagar, Bhopal-462011
              </li>
              
                
              
            </ul>
            <div className='mt-[30px] flex gap-1 items-end '>
              <img src='./src/assets/Arrow.png'/>
            <a href="#hero" className="text-[#C00000] hover:underline  text-center justify-center font-medium">Click Here to land on hero section</a>
            </div>
           
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 text-center ">
          © 2024 Made by SWS LLP
        </div>
      </div>
    </footer>
  );
};

export default Footer;
