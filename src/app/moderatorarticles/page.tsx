"use client";
// ./src/app/admin/page.tsx
// @ts-nocheck
// use client
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import Alert from "./Alert";

import PopUp from "./PopUp";
import User from "./user";
import AlertLogOut from "@/components/AlertLogOut";
import { ProtectedComponent } from "@/lib/auth";
import SheetModifyArticle from "./sheetModifyArticle";

export default function AdminPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const articles = [
    {
      id: "1",
      title: "title 1",
      date: " 11/11/1111 ",
      url : "element.pdf",
      
    },
    {
      id: "2",
      title: "title 2",
       date: "22/22/2222 ",
       url : "element.pdf",
      
    },
    {
      id: "3",
      title: "title 3",
      date: "33/33/3333",
      url : "element.pdf",
    },
  ];

  return (
    <ProtectedComponent roles={["MODERATOR"]}>
          
          <div className="flex flex-row items-center justify-between my-5  ">
        <div className="ml-1 md:ml-5  rounded-lg px-5 py-1 ">
          {" "}
          <User />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-5 mr-2 md:mr-10">
          
          <AlertLogOut/>
          <div className=" bg-white text-base md:text-xl px-2 sm:px-3 md:px-5 py-2 md:py-3">
            Articles
          </div>
        </div>
      </div>

      <div className="">
      
        <div>
        <p className="text-center text-4xl py-12 font-light text-gray-900   mb-2 ">
            List of articles
          </p>

          <div className="mx-1 mt-5 overflow-x-auto">
        <table className="mx-auto  lg:w-3/4 md:w-4/5 w-11/12 items-center text-sm text-left rtl:text-right text-gray-500 border-2 border-gray-700">
          <thead className="text-gray-700 bg-gray-100">
            <tr className="bg-gray-400">
              <th scope="col" className="w-1/4 text-gray-900 px-8 py-3">
                Title
              </th>
              <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
               Date
              </th>
              <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
                open PDF
              </th>
              <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => (
              <tr className="bg-gray-200 border-t-2 border-gray-700 hover:bg-gray-50" key={i}>
                <td className="w-1/4 px-6 py-4 text-gray-900 whitespace-nowrap">
                  <div className="text-base font-semibold">
                    {article.title}
                  </div>
                </td>
                <td className="w-1/4 px-6 py-4 text-gray-900 font-semibold whitespace-nowrap">
                  {article.date}
                </td>
                <td className="w-1/4 px-6 py-4">
                  <div className="flex items-center text-gray-900 font-semibold whitespace-nowrap">
                  <a
                href={`${process.env.NEXT_PUBLIC_API_URL}${article.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-700 text-red-600 font-semibold flex flex-row  items-center  gap-2 w-[130px]"
              >
                
                <p>View PDF</p>
              </a>
                  </div>
                </td>
                <td className="w-1/4 px-6 py-4 flex flex-row">
                  <SheetModifyArticle />
                  <Alert />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
          {/* <div className="flex items-center justify-center">
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
          </div> */}
        </div>
      </div>
    </ProtectedComponent>
  );
}
