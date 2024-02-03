"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Filters from "@/components/Filters";
import SearchResults from "@/app/results/SearchResults";

import api from "@/lib/api";

function PageContent({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [searchQuery, setSearchQuery] = useState<any>(searchParams);
  const [filterQuery, setFilterQuery] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      let query = "";

      Object.entries(searchQuery).forEach(([key, val]) => {
        query += `${key}=${val}&`;
      });

      Object.entries(filterQuery).forEach(([key, val]) => {
        query += `${key}=${val}&`;
      });

      query = query.slice(0, -1);

      try {
        const response = await api.get(`/api/articles/search/?${query}`);
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, [searchQuery, filterQuery]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-x-2">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filters filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
      </div>
      <SearchResults articles={articles} />
    </div>
  );
}

export default PageContent;
