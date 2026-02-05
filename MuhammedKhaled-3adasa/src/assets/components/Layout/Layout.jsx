import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";

export default function Layout({ siteInfo }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Outlet />

      <Footer siteInfo={siteInfo} />
    </>
  );
}
