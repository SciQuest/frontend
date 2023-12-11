"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/api";

export function ProtectedComponent({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "USER" | "MODERATOR" | "ADMIN";
}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      const user = await getUser();

      if (user) {
        if (
          user.role === role ||
          user.role === "ADMIN" ||
          (user.role === "MODERATOR" && role !== "ADMIN")
        ) {
          setIsAuth(true);
        } else {
          router.push("/login");
        }
      } else {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/login");
      }
    };

    authenticate();
  }, [role, router]);

  return isAuth ? children : null;
}

export async function getUser() {
  try {
    const response = await api.get("/auth/user/");
    return response.data;
  } catch (error) {
    return null;
  }
}
