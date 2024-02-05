import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" mt-10 bg-gray-300 text-black">
      <div className="  mx-auto w-full max-w-screen-xl">
        <div className="  grid grid-cols-3 gap-3 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-bold  uppercase ">Our team</h2>
            <ul className=" ">
              <li className="mb-4">
                <Link href="/" className=" hover:underline">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <h2> Contact Us</h2>
                <p className="text-xs font-medium text-blue-700">
                  +213799099338
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold  uppercase ">Find Us</h2>
            <ul className="">
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase ">Legal</h2>
            <ul className="">
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-400  rounded-lg ">
          <p className="text-sm text-center">
            © 2023{" "}
            <Link href="/" className="text-blue-700 font-bold">
              SciQuest™
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
