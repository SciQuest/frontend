"use client";

import React from "react";

function Articles({ articles }: { articles: any[] }) {
  return (
    <div className="mx-1 mt-5 overflow-x-auto">
      <table className="mx-auto lg:w-3/4 md:w-4/5 w-11/12 items-center text-sm text-left rtl:text-right text-gray-500 border-2 border-gray-700">
        <thead className="text-gray-700 bg-gray-100">
          <tr className="bg-gray-400">
            <th scope="col" className="text-gray-900 px-6 py-3">
              Article&apos;s Name
            </th>
            <th scope="col" className="text-gray-900 px-6 py-3">
              Date
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
    <tr className="bg-gray-200 border-t-2 border-gray-700 hover:bg-gray-50">
      <td
        scope="row"
        className="px-6 py-4 text-gray-900 whitespace-nowrap lg:w-3/4 md:w-4/5 w-11/12"
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{title} </div>
        </div>
      </td>
      <td className="px-6 py-4 cursor-pointer text-gray-900 whitespace-nowrap text-base font-semibold">
        {date}
      </td>
    </tr>
  );
}

export default Articles;
