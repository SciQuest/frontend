"use client";
import { useState } from "react";
import Image from "next/image";

// import { close, logo, menu } from "../../public/assets";
import logo from "../../public/assets/logo.svg";
import close from "../../public/assets/close.svg";
import menu from "../../public/assets/menu.svg";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  function clickLogout(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    logout();
    router.refresh();
  }

  const AlertLogOutXL = () => {
    return (
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="hover:bg-gray-400 rounded-lg ring-2  py-2 px-4 font-normal cursor-pointer text-[16px] text-black bg-gray-300 ring-gray-500 ">
              <p>Log Out</p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Clicking on confirm will log you off from your account
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={clickLogout}>
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };

  const AlertLogOutXS = () => {
    return (
      <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="font-medium cursor-pointer text-[16px] text-black mt-4 hover:text-red-600">
              <p>Log Out</p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Clicking on confirm will log you off from your account
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={clickLogout}>
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };

  const navLinks = [
    {
      id: "/home",
      title: "Home",
    },
    {
      id: "favorites",
      title: "Favorites",
    },
    // {
    //   id: "log out",
    //   title: "Log out ",
    // },
  ];

  return (
    <div className="">
      <nav className="w-full flex py-3  justify-between items-center  ">
        <Image
          priority
          src={logo}
          height={40}
          width={140}
          className="ml-5"
          alt="SciQuest"
        />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-6 md:mr-10 ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` rounded-lg ring-2  py-2 px-4 font-normal cursor-pointer text-[16px] text-black bg-gray-300 ring-gray-500 hover:bg-gray-400 ${
                index === navLinks.length - 1 ? "mr-10" : "mr-10"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <AlertLogOutXL />{" "}
          </li>
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
            } p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` font-medium cursor-pointer text-[16px] text-black ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <AlertLogOutXS />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
