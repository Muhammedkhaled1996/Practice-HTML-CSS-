"use client";
import ForgetPasswordFirstPage from "@/src/component/pagesComponents/ForgetPasswordComponents/ForgetPasswordFirstPage";
import ForgetPasswordSecondPage from "@/src/component/pagesComponents/ForgetPasswordComponents/ForgetPasswordSecondPage";
import ForgetPasswordThirdPage from "@/src/component/pagesComponents/ForgetPasswordComponents/ForgetPasswordThirdPage";
import LowerInstractions from "@/src/component/publicComponents/LowerInstractions/LowerInstractions";
import React, { useState } from "react";

export default function page() {
  const [view, setView] = useState<string>("first");
  const [email ,setEmail] =useState<string | undefined>(undefined)
  return (
    <>
      <div className={`${view === "first" ? "block" : "hidden"}`}>
        <ForgetPasswordFirstPage setView={setView} setEmail={setEmail} />
      </div>
      <div className={`${view === "second" ? "block" : "hidden"}`}>
        <ForgetPasswordSecondPage setView={setView} />
      </div>
      <div className={`${view === "third" ? "block" : "hidden"}`}>
        <ForgetPasswordThirdPage setView={setView} email={email} />
      </div>
      <LowerInstractions />
    </>
  );
}
