"use client";

import { ProtectedComponent } from "@/lib/auth";

import React, { useState } from "react";
import { Bookmark, BookmarkCheck, User, Building2, Dot } from "lucide-react";
import Details from "./Details";
import Navbar from "@/components/Navbar";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <ProtectedComponent roles={["USER"]}>
      <div>
        <Navbar />
        <Details id={params.id} />
      </div>
    </ProtectedComponent>
  );
};

export default page;
