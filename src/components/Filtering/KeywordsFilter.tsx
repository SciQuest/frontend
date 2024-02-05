"use client";
import React from "react";
import {
  MdOutlineClose,
  MdDeleteForever,
  MdAdd,
  MdCheck,
} from "react-icons/md";
import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Input } from "../ui/input";

export default function KeywordsFilter({ onCancel, onApply }: any) {
  const [keywords, setKeywords] = useState([""]);

  const addKeyword = () => {
    setKeywords([...keywords, ""]);
  };

  const removeKeyword = (indexToRemove: any) => {
    if (indexToRemove !== 0) {
      const updatedKeywords = keywords.filter(
        (_, index) => index !== indexToRemove
      );
      setKeywords(updatedKeywords);
    }
  };

  const handleKeywordChange = (index: any, value: any) => {
    const updatedKeywords = [...keywords];
    updatedKeywords[index] = value;
    setKeywords(updatedKeywords);
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[360px] lg:w-[1000px]">
        <div className="bg-gray-200 rounded-lg py-5 px-3 lg:p-8 lg:flex lg:flex-col lg:items-center text-sm lg:text-base">
          <h1 className="text-center text-gray-900">Filter by Keywords</h1>
          <div className="flex flex-row gap-1 justify-center py-3 w-full items-center px-2">
            <button
              className="text-white py-2 px-3 bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex items-center"
              onClick={addKeyword}
            >
              <h2>Add</h2>
              <MdAdd size={15} />
            </button>
            <button
              className="text-white ml-2 py-2 px-3 bg-red-500 hover:bg-red-600 hover:ease-in-out duration-100 rounded-lg flex items-center"
              onClick={onCancel}
            >
              <h2 className="">Cancel</h2>

              <MdDeleteForever size={15} />
            </button>
            <button
              className="text-white ml-2 py-2 px-3 bg-green-500 hover:bg-green-600 hover:ease-in-out duration-100 rounded-lg flex items-center"
              // onClick={() => {setFilters([])}}
              onClick={onApply}
            >
              <h2 className="">Apply</h2>

              <MdCheck size={15} />
            </button>
          </div>
          <div>
            {keywords.map((keyword: any, index: any) => (
              <div
                key={index}
                className="flex flex-row items-center my-4 gap-3"
              >
                <Input
                  className="ring-2 ring-gray-500"
                  placeholder="Keyword"
                  value={keyword}
                  onChange={(e) => handleKeywordChange(index, e.target.value)}
                />
                {index !== 0 && (
                  <div className="relative lg:static">
                    <button
                      className="text-white place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0 "
                      onClick={() => removeKeyword(index)}
                    >
                      <MdOutlineClose size={20} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
