"use client";
import React, { useState } from "react";
import {
  MdOutlineClose,
  MdDeleteForever,
  MdAdd,
  MdCheck,
} from "react-icons/md";
import { Input } from "@/components/ui/input"
const AuthorsInput = () => {
    const [authors, setAuthors] = useState([""]);

    const addAuthor = () => {
      setAuthors([...authors, ""]);
    };
  
    const removeAuthor = (indexToRemove: any) => {
      if (indexToRemove !== 0) {
        const updatedAuthors = authors.filter(
          (_, index) => index !== indexToRemove
        );
        setAuthors(updatedAuthors);
      }
    };

    const handleAuthorChange = (index: any, value: any) => {
        const updatedAuthors = [...authors];
        updatedAuthors[index] = value;
        setAuthors(updatedAuthors);
      };
    
  return (
    <div>    <div
    className="text-white cursor-pointer py-2 px-3 w-[50px] bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex gap-1 items-center"
    onClick={addAuthor}
  >
    <h2 className="">Add</h2>
   
  </div>
  
  <div>
            {authors.map((author, index) => (
              <div
                key={index}
                className="flex flex-row items-center my-4 gap-3"
              >
                <Input
                  className="ring-2 ring-gray-500"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => handleAuthorChange(index, e.target.value)}
                />
                {index !== 0 && (
                  <div className="">
                    <div
                      title="delete author"
                      className=" text-white cursor-pointer place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0 "
                      onClick={() => removeAuthor(index)}
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

export default AuthorsInput