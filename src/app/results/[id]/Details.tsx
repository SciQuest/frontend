"use client";
import React, { useState } from "react";

import {
  Bookmark,
  BookmarkCheck,
  User,
  Building2,
  Calendar,
 BookOpenCheck 
} from "lucide-react";
import { articles } from "@/components/data";
import { useRouter } from "next/router";

const Details = () => {
  // const router = useRouter();
  // console.log(router.query.id)
  // const [savedStates, setSavedStates] = useState(Array(3).fill(false)); // Assuming 3 articles initially

  // const handleSaveClick = (index: number) => {
  //   setSavedStates((prevStates) => {
  //     const newStates = [...prevStates];
  //     newStates[index] = !newStates[index];
  //     return newStates;
  //   });
  // };

    
  const [savedState, setSavedState] = useState(false);

  const handleSaveClick = () => {
    setSavedState((prevState) => !prevState);
  };

  const article = {
    id: "1",
    title: "Computer Science",
    resume:
      "Lorem labore voluptatem quase voluptates consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis lorem totaconsectetur adipisicing elit. Velit ea itaque ad aliquam lorem veritatis tota asperiores ipsum perferendis delectus",
    date: "04.11.2024",
    authors: [
      { id: "1", name: "wassim cheref" },
      { id: "2", name: "melzi mounir" },
      { id: "3", name: "benghanem Abderaouf" },
    ],
    institutions: [
      {
        id: "1",
        name: "Higher National School of Computer Scicence Algiers",
      },
      { id: "2", name: "University Of Algiers 3" },
    ],
    keywords: ["a", "b", "c"],

    urlpdf: "",
    bibliographicReferences: "",
    integralText:
      " Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em,  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em,  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em,  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam eligendi inventore exercitationem commodi, aut illo aliquid iste, et officia.",
    image: "/assets/homeIMG.svg",
  };

  return (
    <>
      <div>
        {/* {articles.map((article, index) => ( */}
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
                      {article.authors.map((author, i) => (
                        <li key={i}>
                          <p className="font-semibold">
                            <span className="font-bold md:font- text-black md:text-gray-200">
                              .
                            </span>
                            {author.name}
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
                      {article.institutions.map((instituion, i) => (
                        <li key={i}>
                          <p className="font-semibold">
                            <span className="font-bold md:font-normal  text-black md:text-gray-200">
                              .
                            </span>
                            {instituion.name}
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
                  {savedState? (
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
                    <span className="font-semibold">{article.date}</span>
                  </p>
                </div>
              </div>
              <div className="mt-3 p-3 md:p-5 border-t-2 border-blue-200">
                <a
                  href="/files/ResAnum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-blue-500 font-semibold flex flex-row justify-end items-center  gap-2 "
                >
                    <BookOpenCheck/>
                  <p>View PDF ?</p>
                 

                </a>
                <div className="mt-4 text-black text-sm md:text-base ">
                  <p>{article.integralText}</p>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>
      
    </>
  );
};

export default Details;
