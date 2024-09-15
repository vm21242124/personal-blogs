import React, { useEffect, useState } from "react";
import FullBlog from "./FullBlog";

const BlogPage = () => {


  return (
    <div>
      {/* <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        Full Blog View
      </h1> */}
      {/* Pass the Markdown file URL here */}
      <FullBlog markdownFile="/blog.md" />
    </div>
  );
};

export default BlogPage;
