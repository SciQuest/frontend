"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Bookmark,
  BookmarkCheck,
  User,
  Building2,
  Dot,
  FileQuestion,
} from "lucide-react";
import Filters from "@/components/Filters";
import Alert from "./Alert";

import api from "@/lib/api";

const FavoritesArticles = () => {
  const [savedStates, setSavedStates] = useState(Array(3).fill(true)); // Assuming 3 articles initially

  const [articles, setArticles] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  async function removeFavoriteArticle(article: any) {
    try {
      await api.delete(`/api/favorites/${article.id}/`);
      setArticles((prev) => prev.filter((a) => a.id !== article.id));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/api/favorites/");
        setArticles(response.data);
      } catch (e) {
        console.log(e);
        setError("something went wrong (todo: update this message)");
      }
    }

    fetchData();
  }, []);

  const handleSaveClick = (index: number) => {
    setSavedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div>
      {articles.map((article, index) => (
        <div
          key={article.id}
          className="bg-gray-200 shadow-xl max-w-[1000px] mx-5 md:mx-auto h-min-[300px] h-full  p-4 rounded-sm mt-4 "
        >
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className=" font-semibold text-xl text-blue-500">
                  {article.title}{" "}
                </h1>
              </div>
              {/* <div
                    className={`flex flex-row cursor-pointer ring-2  py-2 justify-center items-center rounded-xl hover:scale-105 hover:duration-100 ${
                      savedStates[index]
                        ? "px-2 md:px-3 bg-blue-500 text-white ring-blue-500"
                        : "px-3 md:px-4 bg-gray-100 ring-gray-500"
                    }`}
                    onClick={() => handleSaveClick(index)}
                  >
                    <p>{savedStates[index] ? "Saved" : "Save"}</p>
                    {savedStates[index] ? (
                      <BookmarkCheck className="text-white" />
                    ) : (
                      <Bookmark />
                    )}
                  </div> */}
              {/* <div
                    className={`px-2 md:px-3 bg-blue-500 text-white ring-blue-500 flex flex-row cursor-pointer ring-2  py-2 justify-center items-center rounded-xl hover:scale-105 hover:duration-100`}
                
                    onClick={() => handleSaveClick(index)}
                  >
                    <p>Read More</p>
                    
                  </div> */}
              <Alert onConfirm={() => removeFavoriteArticle(article)} />
            </div>

            <div className=" mt-1  ">
              <div className="text-xs sm:text-sm">
                <p className="font-normal  ">
                  posted on the{" "}
                  <span className="font-semibold">
                    {article.date.slice(0, 10)}
                  </span>
                </p>
              </div>
              {/* <div>
                    {/* <p className=" text-black font-light">{article.institutions}</p> 
                  </div> */}
            </div>
            <div className="flex flex-col md:flex-row justify-start md:space-x-6 text-sm md:text-base ">
              <div className=" mt-5 text-black font-light flex flex-row space-x-5 ">
                <div className="flex flex-col items-center">
                  <User />
                  <div className="relative bg-gray-300 w-[2px]  h-full"></div>
                </div>
                <ul className="">
                  {article.authors.map((author: any, i: number) => (
                    <li key={i}>
                      <p>
                        <span className="font-bold md:font-normal text-black md:text-gray-200">
                          .
                        </span>
                        {author}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" mt-5 text-black font-light flex flex-row space-x-5 ">
                <div className="flex flex-col items-center">
                  <Building2 />
                  <div className="relative bg-gray-300 w-[2px]  h-full"></div>
                </div>
                <ul className="">
                  {article.institutions.map((instituion: any, i: number) => (
                    <li key={i}>
                      <p>
                        <span className="font-bold md:font-normal  text-black md:text-gray-200">
                          .
                        </span>
                        {instituion}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 border-t-2 border-blue-200">
              <div className="mt-4 text-black  ">
                <p>{article.abstract}</p>
                <div className="mt-4 mb-2">
                  <Link
                    href={`/results/${article.id}`}
                    passHref
                    className="border-b-2 border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700 font-semibold"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesArticles;