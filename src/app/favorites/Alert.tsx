"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Bookmark, BookmarkCheck, User, Building2, Dot } from "lucide-react";

const Alert = ({ onConfirm }: { onConfirm: () => {} }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div title="Remove from favorites" className="flex flex-row cursor-pointer ring-2 px-2 md:px-4 py-2 bg-blue-500 text-white ring-blue-500 justify-center items-center rounded-xl hover:scale-105 hover:duration-100">
            <p className="hidden md:block"> Saved </p>
            <BookmarkCheck className="text-white" />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              article from your favorites
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Alert;
