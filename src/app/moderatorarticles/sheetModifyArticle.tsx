import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiFillEdit } from "react-icons/ai";

import ArticleForm from "./article-form";
const sheetModifyArticle = ({
  article,
  articles,
  setArticles,
}: {
  article: any;
  articles: any[];
  setArticles: any;
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <button
          className=" bg-blue-500 mx-2  justify-self-end  rounded-md font-medium text-center  ring ring-blue-700   hover:scale-105 duration-75 hover:bg-blue-600"
          title="Modifier"
        >
          <AiFillEdit
            size={15}
            className=" text-center text-white cursor-pointer  mx-2 my-2"
          />{" "}
        </button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit Article</SheetTitle>
          <SheetDescription>
            <ArticleForm
              article={article}
              articles={articles}
              setArticles={setArticles}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default sheetModifyArticle;
