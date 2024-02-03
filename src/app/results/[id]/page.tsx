"use client";

import React, { useState } from "react";
import { Bookmark, BookmarkCheck, User, Building2, Dot } from "lucide-react";
import { articles } from "@/components/data";
import Details from "./Details";
import Navbar from "@/components/Navbar";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Navbar />

      <Details id={params.id} />
    </div>
  );
};

export default page;
