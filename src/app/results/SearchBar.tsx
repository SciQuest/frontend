"use client";
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }: any) => {
  return (
    <div className="  mx-auto max-w-[850px] w-full  justify-center text-center text-black p-4">
      <div className=" flex flex-col">
        <div className=" flex ld:flex-row flex-col justify-center   ">
          <div className="w-full ">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
              Rechercher
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0  flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchQuery["search_multi_match"]}
                onChange={(e) =>
                  setSearchQuery({
                    ...searchQuery,
                    search_multi_match: e.target.value,
                  })
                }
                className="block w-full p-4 pl-10 text-sm  focus:outline-none ring-2 ring-gray-500 rounded-xl text-black bg-[#c4c4c478] "
                placeholder="Search for title, author, keywords, plaintext.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
