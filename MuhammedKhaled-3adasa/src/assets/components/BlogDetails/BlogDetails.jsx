import { Link, useParams } from "react-router-dom";
import MinCard from "../Card/MinCard";

export default function BlogDetails({ posts, siteInfo }) {
  const { slug } = useParams();

  const postDetails = posts.find((post) => {
    return post.slug === slug;
  });

  const formattedDate = new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    numberingSystem: "arab",
  }).format(new Date(postDetails.date));

  const sections = postDetails.content.split("\n\n## ");

  const articleData = {
    introduction: "",
    questions: [],
    answers: [],
  };

  sections.forEach((section, index) => {
    if (index === 0) {
      // النص قبل أول ## يكون المقدمة
      articleData.introduction = section.trim();
    } else {
      const lines = section.split("\n");
      const question = lines[0].trim(); // العنوان
      const answer = lines.slice(1).join("\n").trim(); // باقي المحتوى
      articleData.questions.push(question);
      articleData.answers.push(answer);
    }
  });

  const topThreePosts = posts.filter((post, index) => {
    return index > 3 && index <= 6;
  });

  return (
    <>
      <div
        className="bg-cover bg-center flex flex-col p-6 mt-21"
        style={{
          backgroundImage: `
                linear-gradient(to top, rgba(22,22,22,0.9) 30%, transparent),
                url(${postDetails.image})
                          `,
        }}
      >
        {/* breadcramp Section */}
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex  items-center px-4 py-2 rounded-full bg-main/60 w-fit border border-gray-600">
            <Link
              to={"/"}
              className="text-gray-300 hover:text-white duration-300 transition-colors me-2"
            >
              <i className="fa-solid fa-house"></i>
            </Link>
            <i className="fa-solid fa-angle-left text-white me-2"></i>
            <Link
              to={"/blog"}
              className="text-gray-300 hover:text-white duration-300 transition-colors font-semibold me-2"
            >
              المدونة
            </Link>
            <i className="fa-solid fa-angle-left text-white me-2"></i>
            <Link to={"/blog"} className="text-main-orange font-semibold">
              {postDetails.category}
            </Link>
          </div>
          <div className="p-5 lg:p-10 flex flex-col ">
            <div className="flex items-center text-center text-gray-300">
              <Link
                to={"/blog"}
                className="px-3 py-2 rounded-lg bg-main-orange text-white w-fit me-3 hover:bg-orange-600 duration-300 transition-colors cursor-pointer"
              >
                {postDetails.category}
              </Link>
              <i className="fa-regular fa-calendar me-3"></i>
              <p className="me-3">{formattedDate}</p>
              <i className="fa-regular fa-clock me-3"></i>
              <p>{postDetails.readTime}</p>
            </div>
            <p className="text-white text-center md:text-start text-3xl md:text-5xl lg:text-7xl font-bold my-4">
              {postDetails.title}
            </p>
            <div className="flex items-center self-center md:self-start px-5 py-3 rounded-2xl bg-main/60 w-fit border border-gray-600">
              <img
                src={postDetails.author.avatar}
                alt={`${postDetails.author.name} image`}
                className="size-20 rounded-full border-4 border-main-orange/30 me-3"
              />
              <div>
                <p className="text-white font-bold mb-1">
                  {postDetails.author.name}
                </p>
                <p className="text-gray-400">{postDetails.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className=" relative p-6 bg-black">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <p className="p-3 rounded-2xl bg-orange-300/20 border border-orange-500 italic text-white mb-6">
              {postDetails.excerpt}
            </p>
            <p className="p-3 text-white mb-6">{articleData.introduction}</p>
            {/*  */}
            {articleData.questions.map((question, index) => (
              <div
                key={index}
                className="mb-6 text-white scroll-mt-21"
                id={index}
              >
                <div className="flex items-center mb-1">
                  <div className="text-main-orange me-4 border border-main-orange rounded-lg text-lg size-8 flex items-center justify-center">
                    <i className="fa-solid fa-camera"></i>
                  </div>
                  <p className="font-bold text-lg">{question}</p>
                </div>
                <p className="ml-4">{articleData.answers[index]}</p>
              </div>
            ))}
            {/*  */}
            <div className="p-4 rounded-2xl bg-main/20 border border-gray-800 mb-6">
              <div className="flex items-center mb-4">
                <div className="text-main-orange me-4 border border-main-orange rounded-lg text-lg size-8 flex items-center justify-center">
                  <i className="fa-solid fa-tags"></i>
                </div>
                <p className="text-white">الوسوم</p>
              </div>
              <div className="flex flex-col md:flex-row items-center text-center">
                {postDetails.tags.map((tag) => {
                  return (
                    <p
                      key={tag}
                      className="mb:mb-0 mb-5 self-start px-3 py-1 rounded-full bg-gray-500/20 border border-gray-800 text-gray-500 me-3 hover:text-main-orange hover:border-main-orange duration-300 transition-all cursor-pointer"
                    >
                      {`#${tag}`}
                    </p>
                  );
                })}
              </div>
            </div>
            {/*  */}
            <div className="p-4 rounded-2xl bg-main/20 border border-gray-800 mb-6 flex justify-between items-center ">
              <div className="flex items-center">
                <div className="text-main-orange me-4 border border-main-orange rounded-lg text-lg size-8 flex items-center justify-center">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
                <p className="text-white font-bold text-xl">شارك المقال</p>
              </div>
              <div className="flex items-center text-center ">
                <a
                  href={siteInfo.social.twitter}
                  className="p-3 rounded-lg text-white bg-gray-500/20 border border-gray-500 flex justify-center items-center hover:bg-blue-600 duration-300 transition-colors cursor-pointer me-3"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href={siteInfo.social.linkedin}
                  className="p-3 rounded-lg text-white bg-gray-500/20 border border-gray-500 flex justify-center items-center hover:bg-blue-600 duration-300 transition-colors cursor-pointer me-3"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href={siteInfo.social.github}
                  className="p-3 rounded-lg text-white bg-gray-500/20 border border-gray-500 flex justify-center items-center hover:bg-green-600 duration-300 transition-colors cursor-pointer me-3"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href={siteInfo.social.youtube}
                  className="p-3 rounded-lg text-white bg-gray-500/20 border border-gray-500 flex justify-center items-center hover:bg-orange-500 duration-300 transition-colors cursor-pointer me-3"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            {/*  */}
            <div className="p-4 rounded-2xl bg-main/20 border border-gray-800 mb-6 flex justify-between items-center ">
              <div className="flex">
                <img
                  src={postDetails.author.avatar}
                  alt={`${postDetails.author.name} image`}
                  className=" size-30 rounded-2xl border-4 border-main-orange me-4"
                />
                <div className="self-center">
                  <p className="text-main-orange text-sm font-bold mb-1">
                    كاتب المقال
                  </p>
                  <p className="text-white font-bold text-xl">
                    {postDetails.author.name}
                  </p>
                  <p className="text-gray-600">{postDetails.author.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-21 left-0 h-fit text-white">
            <div className="p-3 rounded-xl bg-gray-700/30 border border-gray-700 mb-5">
              <div className="flex items-center mb-6">
                <div className="text-main-orange me-4 border border-main-orange rounded-lg text-lg size-8 flex items-center justify-center">
                  <i className="fa-solid fa-list"></i>
                </div>
                <p className="text-white font-bold text-xl">محتوي المقال</p>
              </div>
              {/*  */}

              {articleData.questions.map((question, index) => (
                <a
                  href={`#${index}`}
                  key={index}
                  className="ms-2 mb-3 text-white cursor-pointer hover:bg-orange-500/20 duration-300 transition-all p-1.5 flex items-center rounded-lg group "
                >
                  <div className="flex items-center">
                    <div className="text-white bg-gray-500/20 me-4 rounded-lg size-6 flex items-center justify-center group-hover:bg-orange-500/20 text-sm">
                      <p>{index + 1}</p>
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-amber-100">
                      {question}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            {/*  */}
            <div className="p-3 rounded-xl bg-gray-700/30 border border-gray-700 mb-5 grid grid-cols-2 gap-2 text-center">
              <div className=" p-2 bg-main-orange/10 rounded-xl flex flex-col justify-center items-center">
                <i className="fa-regular fa-clock text-orange-400 text-xl mb-1"></i>
                <p className="font-bold mb-1 ">{postDetails.readTime}</p>
                <span className="text-gray-400 text-sm">وقت القراءة</span>
              </div>
              <div className=" p-2 bg-main-orange/10 rounded-xl flex flex-col justify-center items-center">
                <i className="fa-regular fa-clock text-orange-400 text-xl mb-1"></i>
                <p className="font-bold mb-1 ">{formattedDate}</p>
                <span className="text-gray-400 text-sm">تاريخ النشر</span>
              </div>
            </div>
            {/*  */}
            <div className="p-3 rounded-xl bg-main-orange/10 border border-main-orange mb-8 text-center flex flex-col justify-center items-center">
              <div className="w-fit  flex justify-center items-center p-2 rounded-lg bg-main-orange/20 mb-2">
                <i className="fa-solid fa-envelope text-main-orange text-xl"></i>
              </div>
              <p className="font-bold text-white text-lg mb-3">لاتفوت جديدنا</p>
              <p className="text-gray-300 text-sm mb-3">
                اشترك للحصول على أحدث المقالات
              </p>
              <Link
                to={"/blog"}
                className="w-full p-1.5 hover:bg-amber-700 duration-300 transition-all mb-2 rounded-lg bg-main-orange text-white font-bold"
              >
                تصفح المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#120E0A]">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="p-6 flex justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="text-main-orange me-4 border border-main-orange rounded-lg text-xl size-8 flex items-center justify-center p-6">
                <i className="fa-solid fa-images"></i>
              </div>
              <div>
                <p className="text-white text-3xl font-bold">مقالات قد تعجبك</p>
                <p className="text-gray-500 text-2xl">
                  استكشف المزيد من المحتوى المميز
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link
                className="flex items-center text-main-orange p-4 text-2xl font-bold hover:-translate-y-1 transition-all duration-300 group"
                to={"/blog"}
              >
                <span>عرض الكل</span>
                <i className="fa-solid fa-angle-left group-hover:-translate-x-1.5 duration-300 transition-all"></i>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 w-full">
            {topThreePosts.map((post) => {
              return <MinCard post={post} key={post.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
