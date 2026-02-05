import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <>
      <div className="bg-[url(../../../../public/gridBackground2.jpg)] bg-main bg-blend-multiply bg-cover border-b border-gray-600">
        {/* hero setion in about page */}
        <div className="relative mt-21 mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex justify-center items-center">
          <div className=" flex justify-center items-center py-6">
            <div className="flex flex-col justify-center items-center text-center md:mb-0 md:mt-0">
              <div className="flex items-center justify-center font-bold mb-4">
                <Link
                  to={"/"}
                  className="text-gray-500 me-3 hover:text-gray-300 duration-300 transition-all"
                >
                  الرئيسية
                </Link>
                <i className="fa-solid fa-chevron-left me-3 text-gray-400"></i>
                <p className="text-main-orange">سياسة الخصوصية</p>
              </div>
              <div className="rounded-2xl p-4 text-main-orange bg-main-orange/10 border border-main-orange mb-4">
                <i className="fa-solid fa-user-lock"></i>
              </div>
              <p className="text-white text-3xl md:text-7xl mb-5 font-bold">
                سياسة الخصوصية
              </p>
              <span className="text-gray-400 text-xl">
                آخر تحديث: 15 يناير 2026
              </span>
            </div>
          </div>
          <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
          <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[#111111] pt-10  border-b border-gray-600 ">
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12  flex flex-col">
          <div className=" border-b border-gray-600">
            <div className="flex items-center px-3 py-6 rounded-2xl bg-main-orange/20 border border-main-orange w-full ">
              <i className="fa-solid fa-file-shield me-3 text-2xl text-main-orange"></i>
              <div className="flex flex-col items-start">
                <p className="font-bold text-main-orange">خصوصيتك تهمنا</p>
                <span className="text-orange-300">
                  نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
                </span>
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>1</span>
                </div>
                <span className="text-white font-bold text-2xl">مقدمة</span>
              </div>
              <div className="ms-12 text-white leading-7">
                مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك
                الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك
                الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>2</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  المعلومات التي نجمعها
                </span>
              </div>
              <div className="ms-12 text-white leading-7">
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="font-bold text-white">بيانات الهوية :</span>
                  <span className="text-gray-300 ms-2">
                    تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="font-bold text-white">بيانات الاتصال :</span>
                  <span className="text-gray-300 ms-2">
                    تشمل عنوان البريد الإلكتروني.
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="font-bold text-white">
                    البيانات التقنية :
                  </span>
                  <span className="text-gray-300 ms-2">
                    تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="font-bold text-white">
                    بيانات الاستخدام :
                  </span>
                  <span className="text-gray-300 ms-2">
                    تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>3</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  كيف نستخدم معلوماتك
                </span>
              </div>
              <div className="ms-12 text-white leading-7">
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    لتقديم خدمتنا والحفاظ عليها
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    لإخطارك بالتغييرات في خدمتنا
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">لتقديم دعم العملاء</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    لمراقبة استخدام خدمتنا
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    لاكتشاف ومنع ومعالجة المشاكل التقنية
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>4</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  ملفات تعريف الارتباط
                </span>
              </div>
              <div className="ms-12 text-white leading-7">
                نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط
                على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو
                للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات
                تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>5</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  أمان البيانات
                </span>
              </div>
              <div className="ms-12 text-white leading-7">
                لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
                استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن
                نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية
                للمعرفة.
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>6</span>
                </div>
                <span className="text-white font-bold text-2xl">حقوقك</span>
              </div>
              <div className="ms-12 text-white leading-7">
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    طلب الوصول إلى بياناتك الشخصية
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    طلب تصحيح بياناتك الشخصية
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">لتقديم دعم العملاء</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    طلب مسح بياناتك الشخصية
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    الاعتراض على معالجة بياناتك الشخصية
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    طلب تقييد معالجة بياناتك الشخصية
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="size-6 text-sm rounded-full bg-main-orange text-white flex justify-center items-center me-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-gray-300 ms-2">
                    الحق في سحب الموافقة
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="my-4 flex items-center">
                <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                  <span>7</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  تواصل معنا
                </span>
              </div>
              <div className="ms-12 mb-4 text-white leading-7">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </div>
              <div className="ms-12 flex items-center group cursor-pointer">
                <i className="fa-regular fa-envelope text-main-orange me-2 group-hover:text-orange-400"></i>

                <a
                  href="mailto:hello@adasah.com"
                  className="text-main-orange group-hover:text-orange-400"
                >
                  hello@adasah.com
                </a>
              </div>
            </div>
          </div>
          <div className="my-6 text-gray-500 text-center flex items-center justify-center flex-wrap">
            <p className="me-2">
              باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه.انظر أيضاً
            </p>
            <Link
              to={"/terms"}
              className="w-full md:w-fit text-main-orange hover:text-orange-400 duration-300 transition-all"
            >
              شروط الخدمة.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
