"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const t = setTimeout(() => {
      const currentQ = searchParams.get("q") || "";
      if (value !== currentQ) {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
          params.set("q", value);
        } else {
          params.delete("q");
        }
        params.set("page", "1");
        router.push(`?${params.toString()}`);
      }
    }, 400);

    return () => clearTimeout(t);
  }, [value]);

  return (
    <div>
      <InputGroup className="rounded-xl focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
        <InputGroupInput
          placeholder="Search for product, brands and more..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
