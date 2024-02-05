"use client";

import React, { useState, useEffect } from "react";
import SheetModifyArticle from "./sheetModifyArticle";
import Alert from "./Alert";
import api from "@/lib/api";
import Link from "next/link";

function PageContent() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/api/articles/");
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="mx-1 mt-5 overflow-x-auto">
      <table className="mx-auto mb-5 lg:w-3/4 md:w-4/5 w-11/12 items-center text-sm text-left rtl:text-right text-gray-500 border-2 border-gray-700">
        <thead className="text-gray-700 bg-gray-100">
          <tr className="bg-gray-400">
            <th scope="col" className="w-1/4 text-gray-900 px-8 py-3">
              Title
            </th>
            <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
              Date
            </th>
            <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
              open PDF
            </th>
            <th scope="col" className="w-1/4 text-gray-900 px-6 py-3">
              Manage
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, i) => (
            <tr
              className="bg-gray-200 border-t-2 border-gray-700 hover:bg-gray-50"
              key={i}
            >
              <td className="w-1/4 px-6 py-4 text-gray-900 whitespace-nowrap">
                <div className="text-base font-semibold">{article.title}</div>
              </td>
              <td className="w-1/4 px-6 py-4 text-gray-900 font-semibold whitespace-nowrap">
                {article.date.slice(0, 10)}
              </td>
              <td className="w-1/4 px-6 py-4">
                <div className="flex items-center text-gray-900 font-semibold whitespace-nowrap">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_API_URL}${article.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-700 text-red-600 font-semibold flex flex-row  items-center  gap-2 w-[130px]"
                  >
                    <p>View PDF</p>
                  </Link>
                </div>
              </td>
              <td className="w-1/4 px-6 py-4 flex flex-row">
                <SheetModifyArticle
                  article={article}
                  articles={articles}
                  setArticles={setArticles}
                />
                <Alert
                  article={article}
                  articles={articles}
                  setArticles={setArticles}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PageContent;
