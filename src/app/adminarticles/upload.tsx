"use client";

import React from "react";
import { useState } from "react";
import api from "@/lib/api";

function UploadButton({
  articles,
  setArticles,
}: {
  articles: any[];
  setArticles: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files![0];

    if (file) {
      setLoading(true);

      const formData = new FormData();
      formData.append("pdf", file);

      try {
        const response = await api.post("/api/articles/", formData);
        setArticles([response.data, ...articles]);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    }
  };

  if (loading) return <div>Uploading ...</div>;

  return (
    <div className="flex mx-auto my-2 items-center justify-center">
      <label
        className=" mb-2 text-sm font-bold mx-2 text-gray-900 "
        htmlFor="file_input"
      >
        Upload PDF
      </label>
      <input
        className="text-blue-500 px-2 py-4 border border-gray-500 rounded-lg cursor-pointer bg-gray-100  focus:outline-none  "
        id="file_input"
        type="file"
        accept="pdf"
        onChange={handleChange}
      />
    </div>
  );
}

export default UploadButton;
