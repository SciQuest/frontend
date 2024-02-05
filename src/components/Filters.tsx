"use client";
import React, { useState, useEffect } from "react";
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

  const [keywords, setKeywords] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    let query = "";

    if (keywords) {
      for (const keyword of keywords) {
        query += `keywords__term=${keyword}&`;
      }
    }

    if (authors) {
      for (const author of authors) {
        query += `authors__term=${author}&`;
      }
    }

    if (institutions) {
      for (const institution of institutions) {
        query += `institutions__term=${institution}&`;
      }
    }

    if (startDate && endDate) {
      query += `date__range=${startDate}__${endDate}&`;
    }

    setFilterQuery(query);
  }, [keywords, institutions, authors, startDate, endDate, setFilterQuery]);

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

  const handleClose = (filterType: any) => {
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
          onClose={() => handleClose("Authors")}
          authors={authors}
          setAuthors={setAuthors}
        />
      )}
      {isKeywordsFilterVisible && (
        <KeywordsFilter
          onClose={() => handleClose("Keywords")}
          keywords={keywords}
          setKeywords={setKeywords}
        />
      )}
      {isInstitutionsFilterVisible && (
        <InstitutionsFilter
          onClose={() => handleClose("Institutions")}
          institutions={institutions}
          setInstitutions={setInstitutions}
        />
      )}
      {isDateFilterVisible && (
        <DateFilter
          onClose={() => handleClose("Date")}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      )}
    </div>
  );
};

export default Filters;
