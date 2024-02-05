"use client";
import React from "react";
import {
  MdOutlineClose,
  MdDeleteForever,
  MdAdd,
  MdCheck,
} from "react-icons/md";

import { Input } from "../ui/input";

export default function InstitutionsFilter({
  onClose,
  institutions,
  setInstitutions,
}: any) {
  const addInstitution = () => {
    setInstitutions([...institutions, ""]);
  };

  const removeInstitution = (indexToRemove: any) => {
    const updatedInstitutions = institutions.filter(
      (_: any, index: number) => index !== indexToRemove
    );
    setInstitutions(updatedInstitutions);
  };

  const handleInstitutionChange = (index: any, value: any) => {
    const updatedInstitutions = [...institutions];
    updatedInstitutions[index] = value;
    setInstitutions(updatedInstitutions);
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[360px] lg:w-[1000px]">
        <div className="bg-gray-200 rounded-lg py-5 px-3 lg:p-8 lg:flex lg:flex-col lg:items-center text-sm lg:text-base">
          <h1 className="text-center text-gray-900">Filter by Institutions</h1>
          <div className="flex flex-row gap-1 w-full justify-center py-3 items-center px-2">
            <button
              className="text-white py-2 px-3 bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex items-center"
              onClick={addInstitution}
            >
              <h2>Add</h2>
              <MdAdd size={15} />
            </button>
            <button
              className="text-white ml-2 py-2 px-3 bg-red-500 hover:bg-red-600 hover:ease-in-out duration-100 rounded-lg flex items-center"
              onClick={onClose}
            >
              <h2 className="">Close</h2>

              <MdOutlineClose size={20} />
            </button>
          </div>
          <div>
            {institutions.map((institution: any, index: number) => (
              <div
                key={index}
                className="flex flex-row  items-center my-4 gap-3"
              >
                <Input
                  className="ring-2 ring-gray-500"
                  placeholder="Institution"
                  value={institution}
                  onChange={(e) =>
                    handleInstitutionChange(index, e.target.value)
                  }
                />
                <div className="">
                  <button
                    className="text-white place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0"
                    onClick={() => removeInstitution(index)}
                  >
                    <MdOutlineClose size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
