"use client";
// ./src/app/admin/page.tsx
// @ts-nocheck
// use client
import User from "./user";
import SheetModifyModerator from "./sheetModifyModerator";
import Alert from "./Alert";
import AlertLogOut from "@/components/AlertLogOut";

import SheetAddModerator from "./sheetAddModerator";

import { useState } from "react";

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

  const moderators = [
    {
      id: "1",
      lastname: " wassim",
      firstname: "cheref ",
      email: "neil.sims@ddd.com",
    },
    {
      id: "2",
      lastname: " mounir",
      firstname: "melzi ",
      email: "qqqqq.bbbbb@ddd.com",
    },
    {
      id: "3",
      lastname: " hhhhh",
      firstname: "jjjjjj ",
      email: "zzzzzzz.aaaa@ddd.com",
    },
  ];

  return (
    <ProtectedComponent roles={["ADMIN"]}>
      <div className="flex flex-row items-center justify-between my-5  ">
        <div className="ml-1 md:ml-5  rounded-lg px-5 py-1 ">
          {" "}
          <User />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-5 mr-2 md:mr-10">
          <a href="adminarticles">
            <div className=" bg-gray-300 text-sm sm:text-base rounded-lg px-2 sm:px-3 md:px-5 py-2 md:py-3  hover:bg-blue-500 hover:text-white hover:ring-blue-700">
              Articles
            </div>
          </a>

          <AlertLogOut />

          <div className="bg-white text-base md:text-xl px-3 md:px-5 py-2 md:py-3">
            Moderators{" "}
          </div>
        </div>
      </div>

      <div className="  px-2  sm:rounded-lg">
        <h1 className=" text-center text-4xl  py-12  font-light text-black  ">
          {" "}
          List of moderators{" "}
        </h1>

        <div className="flex flex-col md:flex-row mx-auto my-2 items-center justify-center">
          <p className=" mb-2 text-sm font-bold mx-2 text-gray-900 ">
            Add a moderator
          </p>
        
          <SheetAddModerator/>
        </div>
        <div className="mx-1 mt-5 overflow-x-auto">
        <table className="mx-auto  lg:w-3/4 md:w-4/5 w-11/12 items-center text-sm text-left rtl:text-right text-gray-500 border-2 border-gray-700">
          <thead className="text-gray-700 bg-gray-100">
            <tr className="bg-gray-400">
              <th scope="col" className="w-1/4 text-gray-900 px-8 py-3">
                First Name
              </th>
              <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
                Email
              </th>
              <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {moderators.map((moderator, i) => (
              <tr className="bg-gray-200 border-t-2 border-gray-700 hover:bg-gray-50" key={i}>
                <td className="w-1/4 px-6 py-4 text-gray-900 whitespace-nowrap">
                  <div className="text-base font-semibold">
                    {moderator.firstname}
                  </div>
                </td>
                <td className="w-1/4 px-6 py-4 text-gray-900 font-semibold whitespace-nowrap">
                  {moderator.lastname}
                </td>
                <td className="w-1/4 px-6 py-4">
                  <div className="flex items-center text-gray-900 font-semibold whitespace-nowrap">
                    {moderator.email}
                  </div>
                </td>
                <td className="w-1/4 px-6 py-4 flex flex-row">
                  <SheetModifyModerator />
                  <Alert />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </ProtectedComponent>
  );
}
