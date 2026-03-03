import React from "react";
import { Spinner } from "@heroui/react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center bg-white/20 mt-14 fixed inset-0 backdrop-blur-sm ">
      <div className="flex items-center justify-center p-3 rounded-2xl gap-3 bg-white w-fit mx-auto">
        <Spinner />
        <span>Refreshing your timeline</span>
      </div>
    </div>
  );
}
