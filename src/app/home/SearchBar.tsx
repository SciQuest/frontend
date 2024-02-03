"use client";
import React, { useRef, useState } from "react";

import { SlidersHorizontal } from "lucide-react";

import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilter] = useState({});
  const [selectedjours, setSelectedjours] = useState([]);
  const [selectedservices, setSelectedservices] = useState([]);
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);

  const menuRef = useRef();
  const inputRef = useRef<any>(null);
  const formRef = useRef();

  const router = useRouter();

  function submitSearch(event: any) {
    event.preventDefault();

    const search_query: string = inputRef.current.value;
    router.push(`/results?search_multi_match=${search_query}`);
  }

  return (
    <div className="  mx-auto max-w-[850px] w-full  justify-center text-center text-black p-4">
      <div className=" flex flex-col">
        <form className=" flex ld:flex-row flex-col justify-center   ">
          <div className="w-full ">
            <label
              // for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
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
                // onClick={() => setOpen(!open)}
                ref={inputRef}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm  focus:outline-none ring-2 ring-gray-500 rounded-xl text-black bg-[#c4c4c478] "
                placeholder="Search for title, author, keywords, plaintext.."
                // onChange={handleTextChange}
              />
              <div className="  absolute right-2 md:right-3 bottom-[12px] md:bottom-[8px] ">
                <button
                  type="submit"
                  className="text-black  bg-[#f8f7f7] ring-2 ring-gray-500 hover:scale-105 duration-300 hover:bg-blue-500 hover:ring-blue-500 hover:text-white font-medium rounded-lg text-sm px-3 md:px-5 py-1 md:py-2   "
                  onClick={submitSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
