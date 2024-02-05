"use client";
"use client";
import React from "react";
import { MdOutlineClose, MdDeleteForever, MdCheck } from "react-icons/md";
import { Input } from "../ui/input";

export default function DateFilter({ onCancel, onApply }: any) {
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[360px] lg:w-[1000px]">
        <div className="bg-gray-200 rounded-lg py-5 px-3 lg:p-8 lg:flex lg:flex-col lg:items-center text-sm lg:text-base">
          <h1 className="text-center text-gray-900">Filter by Date</h1>
          <div className="flex justify-center py-3 w-full items-center px-2">
            <button
            onClick={onCancel}
            className="text-white ml-2 py-2 px-3 bg-red-500 hover:bg-red-600 hover:ease-in-out duration-100 rounded-lg flex items-center">
              <h2 className="">Cancel</h2>
              <MdDeleteForever size={25} />
            </button>
            <button
              className="text-white ml-2 py-2 px-3 bg-green-500 hover:bg-green-600 hover:ease-in-out duration-100 rounded-lg flex items-center"
              
              onClick={onApply}
            >
              <h2 className="">Apply</h2>

              <MdCheck size={25} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center my-4 ">
            <label>From</label>
            <Input
              type="date"
              className="ring-2 ring-gray-500"
              placeholder="Start Date"
            />
            <label>To</label>
            <Input
              type="date"
              className="ring-2 ring-gray-500"
              placeholder="End Date"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
