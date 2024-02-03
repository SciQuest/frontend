"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/api";

export const onLoginRoutesMap = {
  ADMIN: "/adminmoderators",
  MODERATOR: "/moderatorarticles",
  USER: "/",
};

export function ProtectedComponent({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles: ("USER" | "MODERATOR" | "ADMIN")[];
}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      const user = await getUser();

      if (user) {
        if (roles.includes(user.role)) {
          setIsAuth(true);
        } else {
          router.push("/login");
        }
      } else {
        logout();
        router.push("/login");
      }
    };

    authenticate();
  }, [roles, router]);

  return isAuth ? children : null;
}

export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export async function getUser() {
  try {
    const response = await api.get("/auth/user/");
    return response.data;
  } catch (error) {
    return null;
  }
}
