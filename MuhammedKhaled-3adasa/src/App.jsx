import { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./assets/components/Layout/Layout";
import Home from "./assets/components/Home/Home";
import Blog from "./assets/components/Blog/Blog";
import About from "./assets/components/About/About";
import NotFound from "./assets/components/NotFound/NotFound";
import BlogDetails from "./assets/components/BlogDetails/BlogDetails";
import data from "../posts.json";
import Privacy from "./assets/components/privacy/Privacy";
import Terms from "./assets/components/terms/terms";

function App() {
  // حفظ بيانات البوسات
  const [posts, setPosts] = useState(data.posts);
  // حفظ بيانات الموقع
  const [siteInfo, setSiteInfo] = useState(data.siteInfo);
  // حفظ التصنيفات الخاصة بالتصوير
  const [categories, setCategories] = useState(data.categories);
  // الراوتينج الخاص بالموقع
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout siteInfo={siteInfo} />,
      children: [
        {
          index: true,
          element: <Home posts={posts} categories={categories} />,
        },
        {
          path: "blog",
          element: <Blog categories={categories} posts={posts} />,
        },
        { path: "about", element: <About posts={posts} /> },
        {
          path: `blog/:slug`,
          element: <BlogDetails posts={posts} siteInfo={siteInfo} />,
        },
        {
          path: `privacy`,
          element: <Privacy />,
        },
        {
          path: `terms`,
          element: <Terms />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <div
        dir="rtl"
        className="font-tajawal relative selection:bg-main-orange selection:text-white "
      >
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
