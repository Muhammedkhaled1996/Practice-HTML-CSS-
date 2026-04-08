"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.push(`?${params.toString()}`);
  };

  const [value, setValue] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      handleChange(value);
    }, 400);

    return () => clearTimeout(t);
  }, [value]);

  return (
    <div>
      <InputGroup className="rounded-xl focus-within:ring-green-100! focus-within:border-green-600! transition-all duration-200">
        <InputGroupInput
          placeholder="Search for product, brands and more..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}
