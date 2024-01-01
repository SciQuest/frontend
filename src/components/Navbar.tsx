"use client";
import { useState } from "react";
import Image from "next/image";

// import { close, logo, menu } from "../../public/assets";
import logo from "../../public/assets/logo.svg";
import close from "../../public/assets/close.svg";
import menu from "../../public/assets/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "favorites",
      title: "Favorites",
    },
    {
      id: "log out",
      title: "Log out ",
    },
  ];

  return (
    <div className="">
      <nav className="w-full flex py-3  justify-between items-center  ">
        <Image priority src={logo} height={40} width={140}className="ml-5" alt="SciQuest" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` rounded-lg ring ring-gray-500 py-2 px-4 font-normal cursor-pointer text-[16px] ${
                active === nav.title
                  ? "text-white bg-blue-500 ring-blue-500"
                  : "text-black bg-gray-300"
              } ${index === navLinks.length - 1 ? "mr-10" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-5"
          onClick={() => setToggle(!toggle)}
        /> */}

          <Image
            priority
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-5"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-blue-500" : "text-black"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
