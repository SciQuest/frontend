// // app/details/[id].tsx

// import { GetStaticPaths, GetStaticProps } from 'next';
// import { articles } from "@/components/data"; // Adjust this import based on your project structure

// // Define the type for the article object
// interface Article {
//     id: string;
//     title: string;
//     resume: string;
//     // ... other properties
//   }

//   const ArticleDetail = ({ article }: { article: Article }) => {
//     return (
//       <div>
//         <h1>{article.title}</h1>
//         <p>{article.resume}</p>
//         {/* Display other article details */}
//       </div>
//     );
//   };
  
//   export const getStaticPaths: GetStaticPaths = async () => {

//     const paths = articles.map((article) => ({
      
//       params: { id: article.id },
     
//     } ));
  
//     console.log('Generated paths:', paths);
//     return {
//       paths,
//       fallback: false,
//     };
//   };
  
//   export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const articleId = params?.id;
    
//     console.log('Requested article ID:', articleId);
//     // Fetch the specific article based on the ID from the imported articles data
//     const article = articles.find((a) => a.id === articleId);

//     console.log('Fetched article:', article);
  
//     if (!article) {
//       return {
//         notFound: true,
//       };
//     }
  
//     return {
//       props: {
//         article,
//       },
//     };
//   };



// export default ArticleDetail;
"use client";
import React, { useState } from "react";
import { Bookmark, BookmarkCheck, User, Building2, Dot } from "lucide-react";
import { articles } from "@/components/data";
import Details from "./Details";
import Navbar from "@/components/Navbar";


const page = () => {
  return (
  <div>
    <Navbar/>
  
    <Details/>
    
  </div>
  )
}

export default page