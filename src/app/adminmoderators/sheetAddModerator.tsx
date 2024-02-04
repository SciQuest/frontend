"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import api from "@/lib/api";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(255, "First name can't exceed 255 characters"),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(255, "Last name can't exceed 255 characters"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirm_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const SheetAddModerator = ({
  moderators,
  setModerators,
}: {
  moderators: any[];
  setModerators: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    if (values.password !== values.confirm_password) {
      form.setError("confirm_password", {
        message: "password incorrect",
        type: "value",
      });

      setLoading(false);
      return;
    }

    api
      .post("/auth/register/", {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        setModerators([response.data, ...moderators]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        const errorData = error.response.data;
        errorData.first_name &&
          form.setError("first_name", {
            message: errorData.first_name[0],
            type: "value",
          });
        errorData.last_name &&
          form.setError("last_name", {
            message: errorData.last_name[0],
            type: "value",
          });
        errorData.email &&
          form.setError("email", {
            message: errorData.email[0],
            type: "value",
          });
        errorData.password &&
          form.setError("password", {
            message: errorData.password[0],
            type: "value",
          });

        console.error("Registration failed:", error);
      });
  }

  return (
    <Sheet>
      <SheetTrigger>
        <button
          className=" bg-blue-500 text-white   px-4 py-2   rounded-md font-medium text-center hover:scale-105 duration-75 hover:bg-blue-600"
          title="Add moderator"
        >
          Add +
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add moderator</SheetTitle>
          <SheetDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 sm:space-y-0 md:space-y-1 lg:space-y-3"
              >
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password again"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <br />

                <Button
                  type="submit"
                  className="w-full  bg-blue-500"
                  disabled={loading}
                >
                  Create Moderator Account
                </Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetAddModerator;
