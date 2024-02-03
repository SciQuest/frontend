"use client";
import React, { useState } from "react";

import {
  Bookmark,
  BookMarked,
  BookmarkCheck,
  User,
  Building2,
  Calendar,
  BookOpenCheck,
  FileKey2,
} from "lucide-react";
import { articles } from "@/components/data";
import { useRouter } from "next/router";

const Details = () => {
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
    keywords: [
      "aaaaaaaaa",
      "aaaaaaaaaaaaaab",
      "caaaaaaaaaaaaaaaaaa",
      " jjjjjjjjjjjjjjjj",
      "kkkkkkkkkkkkkkkkk",
    ],

    urlpdf: "",
    bibliographicReferences: [
      "Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em",
      "Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em",
      "Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em",
      "Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em",
      "Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em",
    ],
    integralText:
      " Lorem, ipsum dolor sit amet  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em,  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em,  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em,  ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam,em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam elig em, consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam eligendi inventore exercitationem commodi, aut illo aliquid iste, et officia.",
    image: "/assets/homeIMG.svg",
  };

  return (
    <>
      <div>
        <div
          key={article.id}
          className="bg-gray-300 shadow-xl max-w-[1250px] mx-2 xl:mx-auto p-4 rounded-md m-4 "
        >
          <div className="flex flex-col">
            <div>
              <h1 className=" font-semibold text-xl md:text-2xl text-black text-center my-4">
                {article.title}{" "}
              </h1>
            </div>

            <div className=""></div>
            <div className="flex flex-row justify-between items-baseline md:items-center mx-2 md:mx-5">
              <div className="flex flex-col md:flex-row justify-start md:space-x-6 text-sm md:text-base ">
                <div className=" mt-5 text-black font-light flex flex-row space-x-5 ">
                  <div className="flex flex-col items-center">
                    <User />
                    <div className="relative bg-blue-400 w-[2px]  h-full"></div>
                  </div>
                  <ul className="">
                    {article.authors.map((author, i) => (
                      <li key={i}>
                        <p className="font-semibold">
                          <span className="font-bold md:font- text-black md:text-gray-300">
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
                    <div className="relative bg-blue-400 w-[2px]  h-full"></div>
                  </div>
                  <ul className="">
                    {article.institutions.map((instituion, i) => (
                      <li key={i}>
                        <p className="font-semibold">
                          <span className="font-bold md:font-normal  text-black md:text-gray-300">
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
                {savedState ? (
                  <BookmarkCheck className="text-white" />
                ) : (
                  <Bookmark />
                )}
              </div>
            </div>

            <div className="ml-2 md:ml-5 mt-5 text-xs sm:text-sm flex flex-row items-center space-x-2">
              <Calendar />
              <div>
                <p>
                  {" "}
                  <span className="font-semibold">{article.date}</span>
                </p>
              </div>
            </div>
            <div className="mt-3 p-3 md:p-5 border-t-2 border-blue-400">
              <a
                href="/files/ResAnum.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-700 text-red-600 font-semibold flex flex-row  items-center  gap-2 w-[130px]"
              >
                <BookOpenCheck />
                <p>View PDF ?</p>
              </a>
              <div className="mt-4 text-black text-sm md:text-base ">
                <p>{article.integralText}</p>
              </div>
            </div>
            <div className="mt-3 p-3 md:p-5 border-t-2 border-blue-400">
              <div className="">
                <div className="">
                  <div className="flex flex-row justify-start items-center gap-2">
                    <BookMarked />{" "}
                    <h1 className=" font-bold text-gray-800  ">
                      Bibliographic References
                    </h1>
                  </div>

                  <div className="flex flex-col my-3">
                    {article.bibliographicReferences.map((refs, i) => (
                      <p key={i} className="">
                        <span className="font-semibold text-lg md:text-xl text-blue-500">
                          [
                        </span>{" "}
                        {refs}{" "}
                        <span className="font-bold text-lg md:text-xl text-blue-500">
                          ],
                        </span>
                      </p>
                    ))}
                  </div>
                  <div className="mt-5">
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <FileKey2 />
                      <h1 className="font-bold">Keywords</h1>
                    </div>
                    <div className=" mt-3 ">
                      {article.keywords.map((keyword, i) => (
                        <p key={i} className="">
                          <span className="font-semibold text-lg md:text-xl text-blue-500">
                            [
                          </span>{" "}
                          {keyword}{" "}
                          <span className="font-bold text-lg md:text-xl text-blue-500">
                            ],
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
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
