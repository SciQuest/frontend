"use client";
import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Filters = ({ filterQuery, setFilterQuery }: any) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilter] = useState({});
  const [selectedjours, setSelectedjours] = useState([]);
  const [selectedservices, setSelectedservices] = useState([]);
  const [data, setData] = useState(null);
  const [text, setText] = useState(null);

  const serviceSupp = [
    { name: "Services", value: "Transport", label: "Transport" },
    { name: "Services", value: "Alimentation", label: "Alimentation" },
    { name: "Services", value: "Medecin", label: "Médecin" },
    {
      name: "Services",
      value: "Enfants-Handicapes",
      label: "Enfants-Handicapes",
    },
    {
      name: "Services",
      value: "Classes-Preparatoires",
      label: "Classes-Préparatoires",
    },
  ];
  const langues = [
    { name: "Langue", value: "Aucun", label: "Aucun" },
    { name: "Langue", value: "Francais", label: "Francais" },
    { name: "Langue", value: "Anglais", label: "Anglais" },
    {
      name: "Langue",
      value: "Francais et Anglais",
      label: "Francais et Anglais",
    },
  ];
  return (
    <div>
      <div>
        <div
          onClick={() => setOpen(!open)}
          className="text-black mx-auto bg-[#f8f7f7] ring-2 cursor-pointer ring-gray-500 hover:scale-105 duration-300 hover:bg-blue-500 hover:ring-blue-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2 w-[160px]   "
        >
          <div className="flex flex-row justify-center items-center space-x-2">
            <p>Filter results</p>
            <SlidersHorizontal />
          </div>
        </div>
      </div>
      {open && (
        <div className="flex justify-center mx-auto  items-center bg-white font-medium text-blue-950 ring-2 ring-gray-500 w-full   mt-3 rounded-xl max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]">
          <div
            className=" items-center mx-2"
            //  ref={formRef}
          >
            {/* <div className=" mx-3 my-3">
                       <label
                         htmlFor="capacité"
                         className="block text-sm font-medium leading-6 text-gray-900"
                       >
                         Mixité
                       </label>
                       <div className="mt-2">
                         <Select
                           className="z-[59] "
                           name="Mixite"
                           options={Mixité} // onChange={handleInputChange}
                         />
                       </div>
                     </div> */}
            <div className="font-xl  text-gray-500">
              <div className="my-3 block lg:hidden text-center">
                <h2 className=" "> Filter by :</h2>
              </div>
              <div className="hidden lg:block   text-left ">
                <h2 className="  mt-3 ml-3"> Filter by :</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3   ">
              <div className="my-1 mx-2 sm:m-3  flex flex-row space-x-2">
                <input
                  //onClick={() => setOpen(!open)}
                  type="checkbox"
                  className=" h-5 w-4"
                />
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Keywords
                </label>
              </div>

              <div className="my-1 mx-2 sm:m-3 flex flex-row space-x-2">
                <input
                  // onClick={() => setOpen(!open)}
                  type="checkbox"
                  className=" h-5 w-4 "
                />
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Authors
                </label>
              </div>
              <div className="my-1 mx-2 sm:m-3 flex flex-row space-x-2">
                <input
                  // onClick={() => setOpen(!open)}
                  type="checkbox"
                  className=" h-5 w-4"
                />
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Institutions
                </label>
              </div>
              <div className="mt-1 mb-3 mx-1 sm:m-3 flex flex-row items-center space-x-2">
                <input
                  //onClick={() => setOpen(!open)}
                  type="checkbox"
                  className=" h-5 w-4"
                />
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Time
                </label>
                {/* <div className="">
                         <Select
                           isMulti={true}
                           name="Services"
                           className="z-[57]"
                           options={ServiceSupp}
                           //   onChange={handleServicesChange}
                         />
                       </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
