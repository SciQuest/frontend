import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";

import homeImg from "../../../public/assets/homeIMG.svg"
import logo from "../../../public/assets/logo.svg"


import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mt-[-50px] h-screen  ">
        <div className="mx-auto ">
        <Image 
        priority 
        src={logo} 
        className="w-[300px] h-[200px] md:w-[590px] md:h-[310px]"
        alt="HomeImg "></Image>
        </div>
        <div className="mx-5">
          <h1 className="font-extralight  text-center text-4xl">
            Welcome to your library of scientifique articles
          </h1>
        </div>
        <div className=" ld:mx-[18%] md:mx-[14%] sm:mx-[10%]  xxs:mx-[2%]">
          <SearchBar />
          {/* <Filters /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
