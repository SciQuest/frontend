"use client";

import User from "./user";
import AlertLogOut from "@/components/AlertLogOut";
import { ProtectedComponent } from "@/lib/auth";

import PageContent from "./page-content";

export default function AdminPage() {
  return (
    <ProtectedComponent roles={["MODERATOR"]}>
      <div className="flex flex-row items-center justify-between my-5  ">
        <div className="ml-1 md:ml-5  rounded-lg px-5 py-1 ">
          <User />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-5 mr-2 md:mr-10">
          <AlertLogOut />
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

          <PageContent />
        </div>
      </div>
    </ProtectedComponent>
  );
}
