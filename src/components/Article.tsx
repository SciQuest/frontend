"use client";
import React, { useState } from "react";
import { Bookmark, BookmarkCheck, User, Building2, Dot } from "lucide-react";
import Filters from "./Filters";

const Article = () => {
  const [savedStates, setSavedStates] = useState(Array(3).fill(false)); // Assuming 3 articles initially

  const handleSaveClick = (index: number) => {
    setSavedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const articles = [
    {
      id: "1",
      title: "Computer Science",
      resume:
        "Lorem labore voluptatem quase voluptates consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis lorem totaconsectetur adipisicing elit. Velit ea itaque ad aliquam lorem veritatis tota asperiores ipsum perferendis delectus",
      year: "2024",
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
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam eligendi inventore exercitationem commodi, aut illo aliquid iste, et officia.",
    },
    {
      id: "2",
      title: "Programming Languages",
      resume:
        "Lorem labore voluptatem  consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totaconsectetur adipisicing lorem elit. Velit ea itaque ad aliquam veritatis tota  similique officia magni distinctio explicabo nihil? Quam quasi dignissimos dolor tempore voluptates asperiores ipsum perferendis delectus",
      year: "2023",

      authors: [
        { id: "1", name: "benghanem Abderaouf" },
        { id: "2", name: "wassim cheref" },
      ],
      institutions: [
        {
          id: "1",
          name: "Higher National School of Computer Scicence Algiers ESI",
        },
        {
          id: "2",
          name: "Higher National School of Computer Scicence Bejaia ESTIN",
        },
        {
          id: "3",
          name: "Higher National School of Computer Scicence Sidi Bel Abbes SBA",
        },
      ],
      keywords: ["a", "b", "c"],

      urlpdf: "",
      bibliographicReferences: "",
      integralText:
        " Lorem, ipsum dolor sit amet consectetur  consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis tota consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis tota adipisicing elit. Velit ea itaque ad aliquam veritatis tota consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam eligendi inventore exercitationem commodi, aut illo aliquid iste, et officia.",
    },
    {
      id: "3",
      title: "Virtual Reality",
      resume:
        "Lorem labore voluptatem quas consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis tota similique officia magni distinctio explicabo lorem nihil? Quam quasi dignissimos dolor tempore voluptates asperiores lorem  ipsum perferendis delectus",
      year: "2022",
      authors: [
        { id: "2", name: "melzi mounir" },
        { id: "3", name: "benghanem Abderaouf" },
      ],
      institutions: [
        {
          id: "1",
          name: "Higher National School of Computer Scicence Algiers",
        },
        { id: "2", name: "Higher National School of Architecture Algiers" },
      ],
      keywords: ["a", "b", "c"],

      urlpdf: "",
      bibliographicReferences: "",
      integralText:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ea itaque ad aliquam veritatis totam, rem ducimus expedita illum ipsam eligendi inventore exercitationem commodi, aut illo aliquid iste, et officia.",
    },
  ];

  // # int id
  // # String titre
  // # String resume
  // # String[] auteurs
  // # String[] institutions
  // # String[] motscles
  // # String texteintegral
  // # String urlpdf
  // # String[] référencesbibliographiques

  return (
    <div>
      {articles.map((article, index) => (
        <div
          key={article.id}
          className="bg-gray-200 shadow-xl max-w-[1000px] mx-5 md:mx-auto h-min-[300px] h-full max-h-[600px] md:h-max-[400px]  p-4 rounded-sm mt-4 "
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
            </div>

            <div className=" mt-1  ">
              <div className="text-xs sm:text-sm">
                <p className="font-normal  ">
                  posted in{" "}
                  <span className="font-semibold">{article.year}</span>
                </p>
              </div>
              {/* <div>
                {/* <p className=" text-black font-light">{article.institutions}</p> 
              </div> */}
            </div>
            <div className="flex flex-row justify-start space-x-6 text-sm md:text-base ">
              <div className=" mt-5 text-black font-light flex flex-row space-x-5 ">
                <div className="flex flex-col items-center">
                  <User />
                  <div className="relative bg-gray-300 w-[2px]  h-full"></div>
                </div>
                <ul className="">
                  {article.authors.map((author, i) => (
                    <li key={i}>
                      <p>
                        <span className="font-bold md:font-normal text-black md:text-gray-200">
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
                      <p>
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

            <div className="mt-3 border-t-2 border-blue-200">
              <div className="mt-4 text-black  ">
                <p>{article.resume}</p>
                <div className="mt-4 mb-2"><a
                  href="#"
                  className="border-b-2 border-blue-500 text-blue-500 font-normal "
                >
                  {" "}
                  Read more
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
