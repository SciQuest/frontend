"use client";

import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import UploadButton from "./upload";
import Articles from "./articles";

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
    <>
      <UploadButton articles={articles} setArticles={setArticles} />
      <Articles articles={articles} />
    </>
  );
}

export default PageContent;
