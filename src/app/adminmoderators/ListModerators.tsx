"use client";

import React, { useState, useEffect } from "react";
import SheetModifyModerator from "./sheetModifyModerator";
import SheetAddModerator from "./sheetAddModerator";
import Alert from "./Alert";
import api from "@/lib/api";

function ListModerators() {
  const [moderators, setModerators] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/auth/moderators/");
        setModerators(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto my-2 items-center justify-center">
        <p className=" mb-2 text-sm font-bold mx-2 text-gray-900 ">
          Add a moderator
        </p>

        <SheetAddModerator
          moderators={moderators}
          setModerators={setModerators}
        />
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
              <tr
                className="bg-gray-200 border-t-2 border-gray-700 hover:bg-gray-50"
                key={i}
              >
                <td className="w-1/4 px-6 py-4 text-gray-900 whitespace-nowrap">
                  <div className="text-base font-semibold">
                    {moderator.first_name}
                  </div>
                </td>
                <td className="w-1/4 px-6 py-4 text-gray-900 font-semibold whitespace-nowrap">
                  {moderator.last_name}
                </td>
                <td className="w-1/4 px-6 py-4">
                  <div className="flex items-center text-gray-900 font-semibold whitespace-nowrap">
                    {moderator.email}
                  </div>
                </td>
                <td className="w-1/4 px-6 py-4 flex flex-row">
                  <SheetModifyModerator
                    moderator={moderator}
                    moderators={moderators}
                    setModerators={setModerators}
                  />
                  <Alert
                    moderator={moderator}
                    moderators={moderators}
                    setModerators={setModerators}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListModerators;
