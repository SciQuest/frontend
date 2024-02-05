"use client";
import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import AuthorsFilter from "./Filtering/AuthorsFilter";
import InstitutionsFilter from "./Filtering/InstitutionsFilter";
import KeywordsFilter from "./Filtering/KeywordsFilter";
import DateFilter from "./Filtering/DateFilter";

interface FiltersProps {
  filterQuery: any; // Adjust the type based on your requirements
  setFilterQuery: React.Dispatch<React.SetStateAction<any>>; // Adjust the type based on your requirements
}

const Filters: React.FC<FiltersProps> = ({ filterQuery, setFilterQuery }) => {
  const [isAuthorsFilterVisible, setIsAuthorsFilterVisible] = useState(false);
  const [isKeywordsFilterVisible, setIsKeywordsFilterVisible] = useState(false);
  const [isInstitutionsFilterVisible, setIsInstitutionsFilterVisible] =
    useState(false);
  const [isDateFilterVisible, setIsDateFilterVisible] = useState(false);

  const toggleAuthorsFilter = () => {
    setIsAuthorsFilterVisible(!isAuthorsFilterVisible);
  };

  const toggleKeywordsFilter = () => {
    setIsKeywordsFilterVisible(!isKeywordsFilterVisible);
  };

  const toggleInstitutionsFilter = () => {
    setIsInstitutionsFilterVisible(!isInstitutionsFilterVisible);
  };

  const toggleDateFilter = () => {
    setIsDateFilterVisible(!isDateFilterVisible);
  };

  const handleCancel = (filterType: any) => {
    // Close the modal without saving inputs
    switch (filterType) {
      case "Authors":
        setIsAuthorsFilterVisible(false);
        break;
      case "Keywords":
        setIsKeywordsFilterVisible(false);
        break;
      case "Institutions":
        setIsInstitutionsFilterVisible(false);
        break;
      case "Date":
        setIsDateFilterVisible(false);
        break;

      default:
        break;
    }
  };

  const handleApply = (filterType: any, filterData: any) => {
    // Apply the inputs and close the modal
    setFilterQuery((prevFilterQuery: any) => ({
      ...prevFilterQuery,
      [filterType]: filterData,
    }));

    switch (filterType) {
      case "Authors":
        setIsAuthorsFilterVisible(false);
        break;
      case "Keywords":
        setIsKeywordsFilterVisible(false);
        break;
      case "Institutions":
        setIsInstitutionsFilterVisible(false);
        break;
      case "Date":
        setIsDateFilterVisible(false);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <div className="hidden lg:block   text-left ">
        <h2 className="  mt-3 ml-3"> Filter by :</h2>
      </div>
      <div className="flex flex-row items-center justify-center py-4 px-6 mx-auto gap-5 bg-white font-medium text-blue-950 ring-2 ring-gray-500  mt-3 rounded-xl w-full  lg:w-[550px]">
        <button
          className=" bg-gray-200 rounded-md ring-2 ring-gray-400 py-1 px-2 hover:text-white hover:bg-blue-500  text-gray-900 hover:ring-0   "
          onClick={toggleAuthorsFilter}
        >
          Authors
        </button>

        <button
          className=" bg-gray-200 rounded-md ring-2 ring-gray-400 py-1 px-2 hover:text-white hover:bg-blue-500  text-gray-900 hover:ring-0   "
          onClick={toggleKeywordsFilter}
        >
          Keywords
        </button>

        <button
          className="  bg-gray-200 rounded-md ring-2 ring-gray-400 py-1 px-2 hover:text-white hover:bg-blue-500  text-gray-900 hover:ring-0   "
          onClick={toggleInstitutionsFilter}
        >
          Institutions
        </button>

        <button
          className="  bg-gray-200 rounded-md ring-2 ring-gray-400 py-1 px-2 hover:text-white hover:bg-blue-500  text-gray-900 hover:ring-0   "
          onClick={toggleDateFilter}
        >
          Date
        </button>
      </div>

      {isAuthorsFilterVisible && (
        <AuthorsFilter
          onCancel={() => handleCancel("Authors")}
          onApply={(data: any) => handleApply("Authors", data)}
        />
      )}
      {isKeywordsFilterVisible && (
        <KeywordsFilter
          onCancel={() => handleCancel("Keywords")}
          onApply={(data: any) => handleApply("Keywords", data)}
        />
      )}
      {isInstitutionsFilterVisible && (
        <InstitutionsFilter
          onCancel={() => handleCancel("Institutions")}
          onApply={(data: any) => handleApply("Institutions", data)}
        />
      )}
      {isDateFilterVisible && (
        <DateFilter
          onCancel={() => handleCancel("Date")}
          onApply={(data: any) => handleApply("Date", data)}
        />
      )}
    </div>
  );
};

export default Filters;
