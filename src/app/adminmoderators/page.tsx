"use client";

import AlertLogOut from "@/components/AlertLogOut";

import User from "./user";
import { ProtectedComponent } from "@/lib/auth";
import ListModerators from "./ListModerators";

export default function AdminPage() {
  return (
    <ProtectedComponent roles={["ADMIN"]}>
      <div className="flex flex-row items-center justify-between my-5  ">
        <div className="ml-1 md:ml-5  rounded-lg px-5 py-1 ">
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
            Moderators
          </div>
        </div>
      </div>

      <div className="  px-2  sm:rounded-lg">
        <h1 className=" text-center text-4xl  py-12  font-light text-black  ">
          List of moderators
        </h1>

        <ListModerators />
      </div>
    </ProtectedComponent>
  );
}
