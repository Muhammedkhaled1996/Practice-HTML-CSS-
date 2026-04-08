"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function PriceSlider() {
  const params = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isFirstRender = React.useRef(true);

  // ✅ initial values من URL
  const minFromUrl = Number(params.get("price[gte]") || 0);
  const maxFromUrl = Number(params.get("price[lte]") || 200000);

  // ✅ state محلي للـ slider
  const [value, setValue] = React.useState([minFromUrl, maxFromUrl]);

  // ✅ sync لو المستخدم عمل back/forward
  useEffect(() => {
    setValue([minFromUrl, maxFromUrl]);
  }, [minFromUrl, maxFromUrl]);

  // ✅ debounce update للـ URL
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      const newParams = new URLSearchParams(params.toString());

      const DEFAULT_MIN = 0;
      const DEFAULT_MAX = 200000;

      if (value[0] !== DEFAULT_MIN)
        newParams.set("price[gte]", value[0].toString());
      else newParams.delete("price[gte]");

      if (value[1] !== DEFAULT_MAX)
        newParams.set("price[lte]", value[1].toString());
      else newParams.delete("price[lte]");

      newParams.set("page", "1");

      if (newParams.toString() === params.toString()) return;

      startTransition(() => {
        router.replace(`/search?${newParams.toString()}`);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>

      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={200000}
        step={100}
      />

      {isPending && <p className="text-xs text-gray-400">Updating...</p>}
    </div>
  );
}
