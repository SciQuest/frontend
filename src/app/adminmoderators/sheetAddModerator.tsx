import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import RegisterForm from "../register/register-form";
const sheetAddModerator = () => {
  return (
    <Sheet>
      <SheetTrigger><button
            className=" bg-blue-500 text-white   px-4 py-2   rounded-md font-medium text-center hover:scale-105 duration-75 hover:bg-blue-600"
            title="Add moderator"
          >
           Add +
          </button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add moderator</SheetTitle>
          <SheetDescription>
            <RegisterForm/>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default sheetAddModerator;
