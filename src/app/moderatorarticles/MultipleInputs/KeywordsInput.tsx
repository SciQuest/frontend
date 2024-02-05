"use client";
import React, { useState } from "react";
import {
  MdOutlineClose,
  MdDeleteForever,
  MdAdd,
  MdCheck,
} from "react-icons/md";
import { Input } from "@/components/ui/input"
const KeywordsInput = () => {
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
    <div>    <div
    className="text-white cursor-pointer py-2 px-3 w-[50px] bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex gap-1 items-center"
    onClick={addKeyword}
    title="Add keyword"
  >
    <h2 className="">Add</h2>
   
  </div>
  
  <div>
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="flex  flex-row items-center my-4 gap-3"
              >
                <Input
                  className="ring-2 ring-gray-500"
                  placeholder="Keyword"
                  value={keyword}
                  onChange={(e) => handleKeywordChange(index, e.target.value)}
                />
                {index !== 0 && (
                  <div className="">
                    <div
                      title="delete keyword"
                      className="text-white cursor-pointer place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0 "
                      onClick={() => removeKeyword(index)}
                    >
                      <MdOutlineClose size={20} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
  </div>
  )
}

export default KeywordsInput