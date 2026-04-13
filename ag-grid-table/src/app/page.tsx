"use client";

import DataTable from "@/components/DataTable/DataTable";
import Filters from "@/components/FilterComponent/Filters";
import { useProducts } from "@/customeHooks/productsHook";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageContent() {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const queryString = params.toString();

  const { data, isLoading, isError } = useProducts(queryString);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred</p>;

  return (
    <div className="space-y-4">
      <Filters data={data}/>

      <DataTable
        data={data?.data}
        page={Number(params.get("page"))}
        totalPages={data?.metadata.numberOfPages}
      />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PageContent />
    </Suspense>
  );
}
