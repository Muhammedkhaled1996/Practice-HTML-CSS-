import React, { useEffect } from "react";
import BlogHero from "./BlogHero/BlogHero.jsx";

export default function Blog({ categories, posts }) {

  return (
    <>
      <BlogHero categories={categories} posts={posts} />
    </>
  );
}
