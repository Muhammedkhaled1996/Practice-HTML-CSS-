import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";
import List from "../../List/List";
import { useSearchParams } from "react-router-dom";

export default function BlogHero({ categories, posts }) {
  const [view, setView] = useState("grid");
  const [articales, setArticales] = useState(posts);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    Category: "جميع المقالات",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const category = searchParams.get("Category") || "جميع المقالات";

  // للتحكم البحث والفلترة
  useEffect(() => {
    let filtered = posts;

    // filter by category
    if (category !== "جميع المقالات") {
      filtered = filtered.filter((post) => post.category === category);
    }

    // filter by search input
    if (search.trim() !== "") {
      const value = search.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(value) ||
          post.excerpt.toLowerCase().includes(value),
      );
    }

    setArticales(filtered);
    setCurrentPage(1);
  }, [posts, category, search]);

  // تعريف الترقيم الخاص بال pagination
  const totalPages = Math.ceil(articales.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articales.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <div className="bg-main">
        <div className="bg-[url(./public/gridBackground2.jpg)] bg-main bg-blend-multiply bg-cover  border-b border-gray-500">
          <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-21">
            <div className="relative h-full flex justify-center items-center ">
              <div className=" flex flex-col justify-center items-center text-center py-6">
                <div className="bg-main-orange/20 border border-main-orange rounded-xl w-fit p-3 flex justify-center items-center mb-6">
                  <i className="fa-solid fa-circle me-3 text-[10px] text-main-orange animate-pulse  "></i>
                  <div className="relative">
                    <i className="fa-solid absolute top-1/2 -translate-y-1/2  fa-circle me-3 text-sm text-main-orange"></i>
                    <i className="fa-solid fa-circle me-3 text-sm text-main-orange animate-ping  "></i>
                  </div>
                  <p className="font-bold text-white">مدونتنا</p>
                </div>
                <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
                <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
                <div className="text-white font-extrabold text-3xl md:text-7xl text-center mb-2">
                  استكشف <span className="linerGradiantText">مقالاتنا</span>
                </div>
                <div className="text-xl md:text-2xl text-gray-400 my-4 mb-4">
                  اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Search section by category or input feild  */}
          <section className="grid grid-cols-1 md:grid-cols-4 items-center w-full bg-[#0A0A0A] p-6 z-40 sticky top-21 left-0 border-b border-gray-500">
            <div className=" flex justify-between items-center md:w-full relative my-4 bg-gray-500/20 rounded-2xl text-xl ">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="ابحث فى المقالات..."
                className="p-3 w-full rounded-2xl placeholder:text-gray-500 border border-gray-400 text-white focus:outline-2 focus:outline-main-orange h-fit"
              />
              <i className="fa-solid fa-magnifying-glass text-white absolute top-1/2 left-3 -translate-y-1/2"></i>
            </div>

            <div className="flex flex-wrap justify-center items-center justify-self-end gap-3 text-xl md:col-span-3">
              <div
                data-category="جميع المقالات"
                onClick={(e) => {
                  setSearchParams({ Category: "جميع المقالات" });
                }}
                className={`${category == "جميع المقالات" ? "activeC" : ""} border border-gray-500  text-white p-3 bg-gray-500/20 rounded-lg cursor-pointer hover:border-main-orange duration-300 transition-all`}
              >
                جميع المقالات
              </div>
              {categories.map((cat) => {
                return (
                  <div
                    data-category={cat.name}
                    key={cat.name}
                    onClick={(e) => {
                      setSearchParams({ Category: cat.name });
                    }}
                    className={`${category == cat.name ? "activeC" : ""} border border-gray-500  text-white p-3 bg-gray-500/20 rounded-lg cursor-pointer hover:border-main-orange duration-300 transition-all`}
                  >
                    {cat.name}
                  </div>
                );
              })}
            </div>
          </section>

          <div
            key={currentPage}
            className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 transition-all duration-300 ease-in-out animate-fade"
          >
            <div>
              {/* Change view from grid to list */}
              <div className="flex justify-between items-center my-4">
                <p className="text-gray-300 text-2xl font-bold">
                  عرض <span>{articales.length || 0}</span> مقالات
                </p>
                <div className="flex justify-center items-center p-2 rounded-lg bg-gray-500/20 text-gray-300 border border-gray-400 text-2xl">
                  <div
                    onClick={() => {
                      setView("grid");
                    }}
                    className={`${view == "grid" ? "bg-main-orange" : ""} size-10 rounded-lg me-2 flex items-center justify-center`}
                  >
                    <i className="fa-solid fa-table-cells-large cursor-pointer hover:text-white duration-300 transition-colors"></i>
                  </div>
                  <div
                    onClick={() => {
                      setView("list");
                    }}
                    className={`${view == "list" ? "bg-main-orange" : ""} size-10 rounded-lg me-2 flex items-center justify-center`}
                  >
                    <i className="fa-solid fa-list cursor-pointer hover:text-white duration-300 transition-colors"></i>
                  </div>
                </div>
              </div>
              {/* Articales grid view */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12 w-full my-10 ${view !== "grid" ? "hidden" : ""}`}
              >
                {currentArticles.map((post) => {
                  return (
                    <div key={post.id}>
                      {view == "grid" ? <Card post={post} key={post.id} /> : ""}
                    </div>
                  );
                })}
              </div>
              {/* Articales list view */}
              <div className="mb-12 w-full my-10 list">
                {currentArticles.map((post) => {
                  return (
                    <div key={post.id} className=" mb-6">
                      {view !== "grid" ? (
                        <List post={post} key={post.id} />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
              {/* Pagination  totalPages > 1 &&  */}
              {
                <div className="flex justify-center items-center gap-2 pb-10">
                  {/* Prev */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() => {
                      setCurrentPage((prev) => prev - 1);
                      window.scrollTo({ top: 270, behavior: "smooth" });
                    }}
                    className={`px-3 py-2  rounded-lg border text-gray-500 border-gray-500 cursor-pointer ${
                      currentPage === 1
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:border-main-orange hover:bg-main-orange/20"
                    }`}
                    np
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>

                  {/* Pages */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 270, behavior: "smooth" });
                        }}
                        className={`px-4 py-2 rounded-lg  border cursor-pointer text-gray-500 border-gray-500 ${
                          currentPage === page
                            ? "bg-main-orange text-white border-none font-bold"
                            : "hover:border-main-orange hover:bg-main-orange/20"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}

                  {/* Next */}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setCurrentPage((prev) => prev + 1);
                      window.scrollTo({ top: 270, behavior: "smooth" });
                    }}
                    className={`px-3 py-2 rounded-lg border cursor-pointer text-gray-500 border-gray-500 ${
                      currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:border-main-orange hover:bg-main-orange/20"
                    }`}
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
