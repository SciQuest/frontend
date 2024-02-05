"use client";
import React, { useState } from "react";
import {
  MdOutlineClose,
  MdDeleteForever,
  MdAdd,
  MdCheck,
} from "react-icons/md";
import { Input } from "@/components/ui/input";
const RefsInput = ({ refs, setRefs }: { refs: any[]; setRefs: any }) => {
  const addRef = () => {
    setRefs([...refs, ""]);
  };

  const removeRef = (indexToRemove: any) => {
    if (indexToRemove !== 0) {
      const updatedRefs = refs.filter((_, index) => index !== indexToRemove);
      setRefs(updatedRefs);
    }
  };

  const handleRefChange = (index: any, value: any) => {
    const updatedRefs = [...refs];
    updatedRefs[index] = value;
    setRefs(updatedRefs);
  };

  return (
    <div>
      <div
        className="text-white cursor-pointer py-2 px-3 w-[50px] bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex gap-1 items-center"
        onClick={addRef}
        title="add reference"
      >
        <h2 className="">Add</h2>
      </div>
      <div>
        {refs.map((ref, index) => (
          <div key={index} className="flex flex-row items-center my-4 gap-3">
            <Input
              className="ring-2 ring-gray-500"
              placeholder="References"
              value={ref}
              onChange={(e) => handleRefChange(index, e.target.value)}
            />
            {index !== 0 && (
              <div className="">
                <div
                  title="delete reference"
                  className="text-white cursor-pointer place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0 "
                  onClick={() => removeRef(index)}
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

export default RefsInput;
