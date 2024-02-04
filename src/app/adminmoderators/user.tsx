"use client";

import React from "react";
import { useState, useEffect } from "react";

import { getUser } from "@/lib/auth";

function User() {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        setUser(await getUser());
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <p className=" text-center text-xl md:text-2xl text-black ">
      {user.first_name} {user.last_name}
    </p>
  );
}

export default User;
