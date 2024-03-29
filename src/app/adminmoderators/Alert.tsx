"use client";

import React from "react";
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
import { AiFillDelete } from "react-icons/ai";
import api from "@/lib/api";

const Alert = ({
  moderator,
  moderators,
  setModerators,
}: {
  moderator: any;
  moderators: any[];
  setModerators: any;
}) => {
  async function handleDelete() {
    try {
      await api.delete(`/auth/moderators/${moderator.id}`);
      setModerators(moderators.filter((mod) => mod.id != moderator.id));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <button
            className=" bg-red-600 mx-2 justify-self-end ring ring-red-700  rounded-md font-medium text-center  hover:scale-105 duration-75 hover:bg-red-700"
            title="Delete user"
          >
            <AiFillDelete
              size={15}
              className=" text-center text-white cursor-pointer  mx-2 my-2"
            />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              user from the moderator list
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Alert;
