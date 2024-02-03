"use client";

import React from "react";

function Articles({ articles }: { articles: any[] }) {
  return (
    <div className="flex items-center justify-center my-8">
      <table className="w-3/5 border-collapse items-center text-sm text-left rtl:text-right text-gray-500 border border-blue-500  dark:text-gray-400">
        <thead className="text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className=" bg-blue-500">
            <th scope="col" className=" text-white px-8 py-3">
              Article&apos;s Name
            </th>
            <th scope="col" className="text-white px-6 py-3">
              Author
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a: any) => (
            <Article key={a.id} title={a.title} date={a.date.slice(0, 10)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Article({ title, date }: { title: string; date: string }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td
        scope="row"
        className="flex items-center px-6 py-4 text-blue-500 whitespace-nowrap dark:text-white"
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{title} </div>
        </div>
      </td>
      <td className="px-6 py-4  cursor-pointer  text-blue-500 whitespace-nowrap text-base font-semibold">
        {date}
      </td>
    </tr>
  );
}

export default Articles;
