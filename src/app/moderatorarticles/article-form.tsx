import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import * as z from "zod";

import AuthorsInput from "./MultipleInputs/AuthorsInput";
import RefsInput from "./MultipleInputs/RefsInput";
import KeywordsInput from "./MultipleInputs/KeywordsInput";
import InstitutionsInput from "./MultipleInputs/InstitutionsInput";

import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/api";

const Articleform = ({
  article,
  articles,
  setArticles,
}: {
  article: any;
  articles: any[];
  setArticles: any;
}) => {
  const [authors, setAuthors] = useState(["", ...article.authors]);
  const [keywords, setKeywords] = useState(["", ...article.keywords]);
  const [institutions, setInstitutions] = useState([
    "",
    ...article.institutions,
  ]);
  const [refs, setRefs] = useState(["", ...article.references]);

  const formSchema = z.object({
    title: z.string(),
    abstract: z.string(),
    text: z.string(),
    date: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: article.title,
      abstract: article.abstract,
      text: article.text,
      date: article.date.slice(0, 10),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const new_article = {
      ...values,
      authors: authors.slice(1),
      institutions: institutions.slice(1),
      keywords: keywords.slice(1),
      references: refs.slice(1),
    };

    if (new_article.authors.length == 0) {
      new_article.authors = [""];
    }

    if (new_article.institutions.length == 0) {
      new_article.institutions = [""];
    }

    if (new_article.keywords.length == 0) {
      new_article.keywords = [""];
    }

    if (new_article.references.length == 0) {
      new_article.references = [""];
    }

    try {
      const response = await api.put(
        `/api/articles/${article.id}/`,
        new_article
      );

      let arts = articles.filter((a) => a.id != article.id);
      arts = [response.data, ...arts];
      setArticles(arts);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-3  sm:space-y-0 md:space-y-1 lg:space-y-3"
      >
        <FormField
          control={form.control}
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
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Date</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
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
          name="Authors"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">Authors</FormLabel>
              <FormControl>
                <AuthorsInput authors={authors} setAuthors={setAuthors} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="Institutions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">
                Institutions
              </FormLabel>
              <FormControl>
                <InstitutionsInput
                  institutions={institutions}
                  setInstitutions={setInstitutions}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
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
          name="Keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">
                Keywords
              </FormLabel>
              <FormControl>
                <KeywordsInput keywords={keywords} setKeywords={setKeywords} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="References"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-gray-900">
                References
              </FormLabel>
              <FormControl>
                <RefsInput refs={refs} setRefs={setRefs} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <br />

        <Button type="submit" className="w-full  bg-blue-500">
          Save
        </Button>
      </form>
    </Form>
  );
};

export default Articleform;
