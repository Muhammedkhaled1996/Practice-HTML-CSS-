import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import Articales from "./Articales/Articales";
import Categories from "./Categories/Categories";
import RecentArticales from "./RecentArticales/RecentArticales";
import Supescripe from "./Supescripe/Supescripe";

export default function Home({ posts, categories }) {
  return (
    <>
      <Hero />
      <Articales posts={posts} />
      <Categories categories={categories} />
      <RecentArticales posts={posts} />
      <Supescripe />
    </>
  );
}
