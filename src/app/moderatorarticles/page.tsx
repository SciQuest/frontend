"use client";
// ./src/app/admin/page.tsx
// @ts-nocheck
// use client
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";

import PopUp from "./PopUp";
import Link from "next/link";

import { ProtectedComponent } from "@/lib/auth";

export default function AdminPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <ProtectedComponent roles={["MODERATOR"]}>
      <div className="flex h-screen">
        <div className=" bg-blue-500 items-center justify-center   w-1/5">
          <p className=" text-center text-3xl text-white font-semibold pt-[40%] pb-5  ">
            {" "}
            Benghanem Abderaouf{" "}
          </p>

          <p className=" text-center text-xl text-blue-500 font-semibold  py-5 bg-white ">
            {" "}
            List of articles{" "}
          </p>
        </div>

        <div className="relative overflow-x-auto w-4/5 px-2 bg-gray-100  shadow-md sm:rounded-lg">
          <p className=" text-center text-4xl  py-12  font-extrabold text-blue-500   mb-2 ">
            {" "}
            List of articles{" "}
          </p>

          <div className="flex items-center justify-center">
            <table className="w-3/5 border-collapse text-sm text-left rtl:text-right text-gray-500 border border-blue-500  dark:text-gray-400">
              <thead className=" text- text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className=" bg-blue-500">
                  <th scope="col" className=" text-white px-8 py-3">
                    Article&apos;s Name
                  </th>
                  <th scope="col" className="text-white px-6 py-3">
                    Author
                  </th>

                  <th scope="col" className="text-white px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white"
                  >
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        How to become a TOP G{" "}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-blue-500 whitespace-nowrap text-base font-semibold">
                    XXX YYY
                  </td>

                  <td className="px-6 py-4">
                    {showButton && (
                      <button
                        onClick={() => {
                          openPopup();
                        }}
                        className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600"
                        title="Modifier"
                      >
                        <AiFillEdit
                          size={15}
                          className=" text-center text-white cursor-pointer  mx-2 my-2"
                        />
                      </button>
                    )}
                    {showPopup && (
                      <PopUp
                        content={
                          <>
                            <div className="bg-black">jqfjsqfhqhf</div>
                          </>
                        }
                        closePopup={closePopup}
                      />
                    )}

                    <button
                      className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600"
                      title="Supprimer"
                    >
                      <AiFillDelete
                        size={15}
                        className=" text-center text-white cursor-pointer  mx-2 my-2"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white"
                  >
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        A systematic approach{" "}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-blue-500 whitespace-nowrap text-base font-semibold">
                    XXX YYY
                  </td>

                  <td className="px-6 py-4">
                    {showButton && (
                      <button
                        onClick={() => {
                          openPopup();
                        }}
                        className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600"
                        title="Modifier"
                      >
                        <AiFillEdit
                          size={15}
                          className=" text-center text-white cursor-pointer  mx-2 my-2"
                        />
                      </button>
                    )}
                    {showPopup && (
                      <PopUp
                        content={
                          <>
                            <div className="bg-black">jqfjsqfhqhf</div>
                          </>
                        }
                        closePopup={closePopup}
                      />
                    )}

                    <button
                      className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600"
                      title="Supprimer"
                    >
                      <AiFillDelete
                        size={15}
                        className=" text-center text-white cursor-pointer  mx-2 my-2"
                      />
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white"
                  >
                    <div className="ps-3">
                      <div className="text-base font-semibold">Earth Life </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-blue-500 whitespace-nowrap text-base font-semibold">
                    XXX YYY
                  </td>

                  <td className="px-6 py-4">
                    {showButton && (
                      <button
                        onClick={() => {
                          openPopup();
                        }}
                        className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600"
                        title="Modifier"
                      >
                        <AiFillEdit
                          size={15}
                          className=" text-center text-white cursor-pointer  mx-2 my-2"
                        />
                      </button>
                    )}
                    {showPopup && (
                      <PopUp
                        content={
                          <>
                            <div className="bg-black">jqfjsqfhqhf</div>
                          </>
                        }
                        closePopup={closePopup}
                      />
                    )}

                    <button
                      className=" bg-blue-500 mx-2 justify-self-end  rounded-md font-medium text-center  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-blue-600"
                      title="Supprimer"
                    >
                      <AiFillDelete
                        size={15}
                        className=" text-center text-white cursor-pointer  mx-2 my-2"
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProtectedComponent>
  );
}
