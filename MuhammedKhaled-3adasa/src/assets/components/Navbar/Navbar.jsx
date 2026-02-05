import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [toggleManue, setToggleManue] = useState(false);
  return (
    <>
      <div className="bg-main flex items-center text-white z-50 fixed top-0 left-0 right-0 h-21 border-b border-gray-800">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex justify-between items-center py-2 relative ">
            <div>
              <Link
                className="flex justify-center items-center cursor-pointer group"
                to={"/"}
              >
                <img
                  src={logo}
                  alt="logo"
                  className="size-15 me-2 group-hover:scale-110 transition-all duration-300"
                />
                <div>
                  <h1 className="text-white font-bold text-2xl">عدسة</h1>
                  <p className="text-[#FF6900] hidden  md:block">
                    عالم التصوير الفوتوغرافي
                  </p>
                </div>
              </Link>
            </div>

            <div
              className={` bg-main border border-gray-800 lg:static rounded-xl lg:rounded-full absolute -top-100 left-0 right-0 ${toggleManue == true ? "top-21 duration-300" : "-top-100 duration-300"}`}
            >
              <ul
                className={`grid grid-cols-1 gap-2 p-1 lg:mt-0 lg:grid-cols-3 my-2 lg:my-0`}
              >
                <li className="mx-1.5 text-gray-500 hover:text-gray-300 transition-all duration-300 navbar ">
                  <NavLink
                    to={"/"}
                    className="px-5 py-2.5 block w-full font-bold"
                  >
                    الرئيسية
                  </NavLink>
                </li>
                <li className="mx-1.5 text-gray-500 hover:text-gray-300 transition-all duration-300 navbar ">
                  <NavLink
                    to={"/blog"}
                    className="px-5 py-2.5 block w-full font-bold"
                  >
                    المدونة
                  </NavLink>
                </li>
                <li className="mx-1.5 text-gray-500 hover:text-gray-300 transition-all duration-300 navbar ">
                  <NavLink
                    to={"/about"}
                    className="px-5 py-2.5 block w-full font-bold"
                  >
                    من نحن
                  </NavLink>
                </li>
                <Link
                  to={"/blog"}
                  className="btn rounded-full mb-2 px-5 py-3 text-sm font-bold cursor-pointer hover:-translate-y-1 transition-colors duration-300 w-2/4 mx-auto text-center lg:hidden"
                >
                  ابدأ القراءة
                </Link>
              </ul>
            </div>

            <div className="flex items-center justify-center ">
              <div className="hidden items-center justify-center transition-colors duration-300 me-3 text-2xl text-gray-400 cursor-pointer p-3 hover:text-main-orange/85 hover:border hover:border-gray-500 rounded-2xl hover:rounded-2xl lg:block">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <Link
                to={"/blog"}
                className="btn px-5 py-3 text-sm font-bold cursor-pointer hover:-translate-y-1 transition-colors duration-300 hidden lg:block"
              >
                ابدأ القراءة
              </Link>

              {toggleManue == false ? (
                <div
                  className="text-3xl cursor-pointer hover:border hover:border-gray-700 transition-all rounded-lg lg:hidden flex justify-center items-center p-2"
                  onClick={() => setToggleManue(!toggleManue)}
                >
                  <i className="fa-solid fa-bars"></i>
                </div>
              ) : (
                <div
                  className="text-3xl cursor-pointer hover:border hover:border-gray-700 transition-all rounded-lg lg:hidden flex justify-center items-center p-2"
                  onClick={() => setToggleManue(!toggleManue)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-black/80 fixed inset-0 z-10 ${!toggleManue && "hidden"}`}
        onClick={() => setToggleManue(false)}
      ></div>
    </>
  );
}
