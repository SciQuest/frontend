"use client";
import React from "react";
import { MdOutlineClose, MdAdd } from "react-icons/md";
import { Input } from "../ui/input";

export default function AuthorsFilter({ onClose, authors, setAuthors }: any) {
  //add an author input
  const addAuthor = () => {
    setAuthors([...authors, ""]);
  };

  //remove an author input
  const removeAuthor = (indexToRemove: any) => {
    const updatedAuthors = authors.filter(
      (_: any, index: number) => index !== indexToRemove
    );
    setAuthors(updatedAuthors);
  };

  const handleAuthorChange = (index: any, value: any) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = value;
    setAuthors(updatedAuthors);
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[360px] lg:w-[1000px]">
        <div className="bg-gray-200 rounded-lg py-5 px-3 lg:p-8 lg:flex lg:flex-col lg:items-center text-sm lg:text-base">
          <h1 className="text-center text-lg text-gray-900">
            Filter by Authors
          </h1>
          <div className="flex justify-center py-3 w-full gap-2 items-center px-2">
            <button
              className="text-white py-2 px-3 bg-blue-500 hover:bg-blue-600 hover:ease-in-out duration-100 rounded-lg flex gap-1 items-center"
              onClick={addAuthor}
            >
              <h2 className="">Add</h2>
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
            {authors.map((author: any, index: number) => (
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

                <div className="">
                  <button
                    title="delete author"
                    className="text-white place-self-end hover:bg-red-500 bg-red-600 hover:ease-in-out duration-100 rounded  p-2 lg:p-0 "
                    onClick={() => removeAuthor(index)}
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
