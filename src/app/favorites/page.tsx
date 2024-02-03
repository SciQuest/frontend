import React from "react";
import FavoritesArticles from "./FavoritesArticles";
import Navbar from "@/components/Navbar";
import { ProtectedComponent } from "@/lib/auth";

const page = () => {
  return (
    <ProtectedComponent roles={["USER"]}>
      <div>
        <Navbar />
        <div>
          <h1 className="text-center text-2xl md:text-3xl font-extralight my-5">
            {" "}
            Your Saved Articles{" "}
          </h1>
          <FavoritesArticles />
        </div>
      </div>
    </ProtectedComponent>
  );
};

export default page;
