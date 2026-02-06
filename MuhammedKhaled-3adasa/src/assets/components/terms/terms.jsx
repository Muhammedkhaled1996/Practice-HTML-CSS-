import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <>
      <div className="relative bg-[url(/gridBackground.jpg)] bg-contain border-b border-gray-600">
        <div className="inset-0 bg-black/80 absolute z-10"></div>
        {/* hero setion in about page */}

        <div className="relative z-10">
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
                  <p className="text-main-orange">شروط الخدمة</p>
                </div>
                <div className="rounded-2xl p-4 text-main-orange bg-main-orange/10 border border-main-orange mb-4">
                  <i className="fa-regular fa-file-lines"></i>
                </div>
                <p className="text-white text-3xl md:text-7xl mb-5 font-bold">
                  شروط الخدمة
                </p>
                <span className="text-gray-400 text-xl">
                  آخر تحديث: 15 يناير 2026
                </span>
              </div>
            </div>
            <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute top-5 left-5"></div>
            <div class="h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.15)_30%,rgba(249,115,22,0.05)_50%,transparent_70%)] absolute bottom-5 right-5"></div>
          </div>
          {/* Second Section */}
          <div className="bg-[#111111] pt-10  border-b border-gray-600 ">
            <div className="mx-auto w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12  flex flex-col">
              <div className="border-b border-gray-600">
                <div className="flex items-center px-3 py-6 rounded-2xl bg-yellow-500/20 border border-yellow-500 w-full ">
                  <i className="fa-solid fa-triangle-exclamation me-3 text-2xl text-yellow-500"></i>
                  <div className="flex flex-col items-start">
                    <p className="font-bold text-yellow-500">إشعار مهم</p>
                    <span className="text-yellow-500">
                      يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا.
                      بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه
                      الشروط.
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="my-4 flex items-center">
                    <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                      <span>1</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      الموافقة على الشروط
                    </span>
                  </div>
                  <div className="ms-12 text-white leading-7">
                    بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط
                    الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق
                    على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو
                    الوصول إليه.
                  </div>
                </div>
                <div className="mb-5">
                  <div className="my-4 flex items-center">
                    <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                      <span>2</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      رخصة الاستخدام
                    </span>
                  </div>
                  <div className="ms-12 text-white leading-7">
                    <p className="text-gray-400 mb-3">
                      يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض
                      الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
                    </p>
                    <p className="text-white font-bold mb-2">
                      بموجب هذا الترخيص لا يجوز لك:
                    </p>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">تعديل أو نسخ المواد</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        استخدام المواد لأي غرض تجاري أو للعرض العام
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        محاولة فك أو عكس هندسة أي برنامج على الموقع
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        إزالة أي حقوق نشر أو علامات ملكية من المواد
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر
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
                      إخلاء المسؤولية
                    </span>
                  </div>
                  <div className="ms-12 text-white leading-7">
                    المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة
                    لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع
                    الضمانات الأخرى.
                  </div>
                </div>
                <div className="mb-5">
                  <div className="my-4 flex items-center">
                    <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                      <span>4</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      القيود
                    </span>
                  </div>
                  <div className="ms-12 text-white leading-7">
                    في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي
                    أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على
                    الموقع.
                  </div>
                </div>
                <div className="mb-5">
                  <div className="my-4 flex items-center">
                    <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                      <span>5</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      محتوى المستخدم
                    </span>
                  </div>
                  <div className="ms-12 text-white leading-7">
                    <p className="text-gray-400 mb-3">
                      إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا
                      ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة
                      إنتاجه وتعديله وتوزيعه.
                    </p>
                    <p className="text-white font-bold mb-2">
                      يجب ألا يكون محتواك:
                    </p>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        أن يكون تشهيرياً أو فاحشاً أو مسيئاً
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        انتهاك حقوق الملكية الفكرية للآخرين
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        احتواء فيروسات أو أكواد ضارة
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        انتهاك أي قوانين أو لوائح معمول بها
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="size-6 text-sm text-red-700 flex justify-center items-center me-2">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                      <span className="text-gray-400">
                        الإعلان عن منتجات أو خدمات غير مصرح بها
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="my-4 flex items-center">
                    <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                      <span>6</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      التعديلات
                    </span>
                  </div>
                  <div className="ms-12 text-white leading-7">
                    قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام
                    هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط
                    الخدمة.
                  </div>
                </div>

                <div className="mb-5">
                  <div className="my-4 flex items-center">
                    <div className="size-10 bg-main-orange text-white rounded-xl flex items-center justify-center text-xl font-bold me-3">
                      <span>7</span>
                    </div>
                    <span className="text-white font-bold text-2xl">
                      معلومات الاتصال
                    </span>
                  </div>
                  <div className="ms-12 mb-4 text-white leading-7">
                    إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل
                    معنا:
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
                  باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً
                </p>
                <Link
                  to={"/privacy"}
                  className="w-full md:w-fit text-main-orange hover:text-orange-400 duration-300 transition-all"
                >
                  سياسة الخصوصية .
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
