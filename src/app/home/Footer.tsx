import React from "react";

const Footer = () => {
  return (
    <div className=" mt-10 bg-gray-300 text-black">
    <div className="  mx-auto w-full max-w-screen-xl">
    <div className="  grid grid-cols-3 gap-3 px-4 py-6 lg:py-8 md:grid-cols-3">
      <div>
        <h2 className="mb-6 text-sm font-semibold  uppercase ">
          Our team
        </h2>
        <ul className=" font-medium">
          <li className="mb-4">
            <a href="/AboutUs" className=" hover:underline">
             About Us
            </a>
          </li>

          <li className="mb-2">
            <h2> Contact Us</h2>
            <p className="text-xs text-blue-500">+2130799099338</p>
          </li>
        </ul>
       
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold  uppercase ">
          Find Us
        </h2>
        <ul className="font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Twitter
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase ">
          Legal
        </h2>
        <ul className="font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>

          <li className="mb-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-6 bg-gray-400  rounded-lg ">
    <p className="text-sm text-center   ">
        © 2023 <a href="/">SciQuest™</a>. All rights reserved.</p>
        
    </div>
    </div>
    </div>
  );
};

export default Footer;