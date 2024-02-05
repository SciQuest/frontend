import React from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

import AuthorsInput from "./MultipleInputs/AuthorsInput";
import RefsInput from "./MultipleInputs/RefsInput";
import KeywordsInput from "./MultipleInputs/KeywordsInput";
import InstitutionsInput from "./MultipleInputs/InstitutionsInput";

import { Textarea } from "@/components/ui/textarea";

const Articleform = () => {
  const formSchema = z.object({
    title: z.string().max(255, "Title can't exceed 255 characters"),
    abstract: z.string(),
    text: z.string(),
    date: z.string().min(11, "Date must be at least 11 characters"),
    keywords: z.array(z.string()), // Define validation for array of strings
    authors: z.array(z.string()), // Define validation for array of strings
    institutions: z.array(z.string()), // Define validation for array of strings
    references: z.array(z.string()),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      abstract: "",
      text: "",
      date: "",
      keywords: [], // Initial value for array fields
      authors: [],
      institutions: [],
      references: [],
    },
  });

  //   const addAuthorField = () => {
  //     form.setValue("authors", [...form.getValues("authors"), ""]);
  //   };

  //   const removeAuthorField = (index: number) => {
  //     const updatedAuthors = form.getValues("authors").filter((_, i) => i !== index);
  //     form.setValue("authors", updatedAuthors);
  //   };

  //   const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data : any) => {
  //     // Handle form submission
  //     console.log(data);
  //   };
  return (
    <Form {...form}>
      <form
        //   onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-3  sm:space-y-0 md:space-y-1 lg:space-y-3"
      >
        <FormField
          // control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the new title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          // control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          // control={form.control}
          name="abstract"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Resume</FormLabel>
              <FormControl>
                {/* <Input type="textarea" {...field} /> */}
                <Textarea placeholder="Article's resume" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          // control={form.control}
          name="Authors"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Authors</FormLabel>
              <FormControl>
                <AuthorsInput />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          // control={form.control}
          name="Institutions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">
                Institutions
              </FormLabel>
              <FormControl>
                <InstitutionsInput />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          // control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Text</FormLabel>
              <FormControl>
                <Textarea placeholder="Integral text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          // control={form.control}
          name="Keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">
                Keywords
              </FormLabel>
              <FormControl>
                <KeywordsInput />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     

        <FormField
          // control={form.control}
          name="References"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">
                References
              </FormLabel>
              <FormControl>
                <RefsInput />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  */}

        <br />

        <Button type="submit" className="w-full  bg-blue-500">
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default Articleform;
