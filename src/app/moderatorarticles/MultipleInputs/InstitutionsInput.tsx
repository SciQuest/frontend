"use client";
import React, { useState } from "react";
import {
  MdOutlineClose,
  MdDeleteForever,
  MdAdd,
  MdCheck,
} from "react-icons/md";
import { Input } from "@/components/ui/input";
const InstitutionsInput = ({
  institutions,
  setInstitutions,
}: {
  institutions: any[];
  setInstitutions: any;
}) => {
  const addInstitution = () => {
    setInstitutions([...institutions, ""]);
  };

  const removeInstitution = (indexToRemove: any) => {
    if (indexToRemove !== 0) {
      const updatedInstitutions = institutions.filter(
        (_, index) => index !== indexToRemove
      );
      setInstitutions(updatedInstitutions);
    }
  };

  const handleInstitutionChange = (index: any, value: any) => {
    const updatedInstitutions = [...institutions];
    updatedInstitutions[index] = value;
    setInstitutions(updatedInstitutions);
  };

  return (
    <div>
      <div
        className="text-white cursor-pointer py-2 px-3 w-[50px] bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex gap-1 items-center"
        onClick={addInstitution}
        title="add institution"
      >
        <h2 className="">Add</h2>
      </div>
      <div>
        {institutions.map((institution, index) => (
          <div key={index} className="flex flex-row items-center my-4 gap-3">
            <Input
              className="ring-2 ring-gray-500"
              placeholder="Institution"
              value={institution}
              onChange={(e) => handleInstitutionChange(index, e.target.value)}
            />
            {index !== 0 && (
              <div className="">
                <div
                  title="delete institution"
                  className="text-white cursor-pointer place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0 "
                  onClick={() => removeInstitution(index)}
                >
                  <MdOutlineClose size={20} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionsInput;
