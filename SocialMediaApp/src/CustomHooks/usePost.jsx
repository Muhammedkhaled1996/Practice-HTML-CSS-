import React from "react";
import { headerObjectData } from "../helpers/headersObj";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// usePost(['allPosts'], true , 'posts?limit=50')

export default function usePost(queryKey, isEnabled, endPoint) {
  const { data, isLoading, isFetching, isFetched, isError, error } = useQuery({
    queryFn: getPosts,
    queryKey: [...queryKey],
    enabled: isEnabled, // default value
    refetchOnWindowFocus: true, // default value refetch on window fouse
    // refetchOnMount: true, // default value
    // refetchInterval: 5000, // default value refetch every 1000 ms
    // staleTime: 10000, // prevent refetch until this time
    // retry : 3 , // retry to fetch if failed
    // retryDelay: 1000, // delay in trying to fetch if failed
  });

  async function getPosts() {
    try {
      const responce = await axios.get(
        `https://route-posts.routemisr.com/${endPoint}`,
        headerObjectData(),
      );

      return responce?.data; // important with reactQuery
    } catch (err) {
      console.log(err, "error from getPosts");
      throw err.response;
    }
  }

  return { data, isLoading, isFetching, isFetched, isError, error };
}
