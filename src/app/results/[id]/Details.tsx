"use client";
import React, { useState, useEffect } from "react";

import {
  Bookmark,
  BookmarkCheck,
  User,
  Building2,
  Calendar,
  BookOpenCheck,
} from "lucide-react";

import api from "@/lib/api";

const Details = ({ id }: { id: string }) => {
  const [savedState, setSavedState] = useState(false);
  const [article, setArticle] = useState<any>(null);
  const [loading1, setLoading1] = useState<boolean>(true);
  const [loading2, setLoading2] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      setLoading1(true);
      try {
        const response = await api.get("/api/favorites/");
        const favorites = response.data;

        setSavedState(favorites.some((article: any) => article.id == id));
      } catch (e) {
        console.log(e);
        setError("something went wrong (todo: update this message)");
      }
      setLoading1(false);
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      setLoading2(true);
      try {
        const response = await api.get(`/api/articles/${id}`);
        setArticle(response.data);
      } catch (e: any) {
        console.log(e);
        setError(e.response.data.detail || e.message);
      }
      setLoading2(false);
    }

    fetchData();
  }, [id]);

  const handleSaveClick = async () => {
    const saved: boolean = savedState;
    if (saved) {
      await api.delete(`/api/favorites/${article.id}/`);
      setSavedState(false);
    } else {
      await api.post(`/api/favorites/${article.id}/`);
      setSavedState(true);
    }
  };

  if (loading1 || loading2) return <div>Loading</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <div
          key={article.id}
          className="bg-gray-200 shadow-xl max-w-[1250px] mx-auto  p-4 rounded-md m-4 "
        >
          <div className="flex flex-col">
            <div>
              <h1 className=" font-semibold text-xl md:text-2xl text-black text-center my-4">
                {article.title}{" "}
              </h1>
            </div>

            <div className=""></div>
            <div className="flex flex-row justify-between items-baseline md:items-center">
              <div className="flex flex-col md:flex-row justify-start md:space-x-6 text-sm md:text-base ">
                <div className=" mt-5 text-black font-light flex flex-row space-x-5 ">
                  <div className="flex flex-col items-center">
                    <User />
                    <div className="relative bg-gray-300 w-[2px]  h-full"></div>
                  </div>
                  <ul className="">
                    {article.authors.map((author: any, i: number) => (
                      <li key={i}>
                        <p className="font-semibold">
                          <span className="font-bold md:font- text-black md:text-gray-200">
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
                        <p className="font-semibold">
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
              <div
                className={`flex flex-row cursor-pointer ring-2 w-[50px] md:w-[100px] h-[40px] py-2 justify-center items-center rounded-xl hover:scale-105 hover:duration-100 
                  ${
                    savedState
                      ? "px-2 md:px-3 bg-blue-500 text-white ring-blue-500"
                      : "px-1 md:px-4 bg-gray-100 ring-gray-500"
                  }`}
                onClick={() => handleSaveClick()}
              >
                <p className="hidden md:block">
                  {savedState ? "Saved " : "Save"}
                </p>
                {savedState ? (
                  <BookmarkCheck className="text-white" />
                ) : (
                  <Bookmark />
                )}
              </div>
            </div>

            <div className=" mt-5 text-xs sm:text-sm flex flex-row items-center space-x-2">
              <Calendar />
              <div>
                <p>
                  {" "}
                  <span className="font-semibold">
                    {article.date.slice(0, 10)}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-3 p-3 md:p-5 border-t-2 border-blue-200">
              <a
                href={`${process.env.NEXT_PUBLIC_API_URL}${article.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-blue-500 font-semibold flex flex-row justify-end items-center  gap-2 "
              >
                <BookOpenCheck />
                <p>View PDF ?</p>
              </a>
              <div className="mt-4 text-black text-sm md:text-base ">
                <p>{article.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
