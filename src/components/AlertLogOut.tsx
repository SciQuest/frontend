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

import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

const AlertLogOut = () => {
  const router = useRouter();

  function clickLogout(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    logout();
    router.refresh();
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className=" bg-gray-300 rounded-lg px-2 sm:px-3 md:px-5 py-2 md:py-3 text-sm sm:text-base  hover:bg-blue-500  hover:text-white hover:ring-blue-700">
            Log Out
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Clicking on confirm will log you off from your account
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={clickLogout}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertLogOut;
