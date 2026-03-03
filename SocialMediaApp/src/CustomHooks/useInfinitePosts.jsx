import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { headerObjectData } from "../helpers/headersObj";

export default function useInfinitePosts(queryKey, isEnabled, endPoint) {
  async function getPosts({ pageParam = 1 }) {
    const separator = endPoint.includes("?") ? "&" : "?";
    const response = await axios.get(
      `https://route-posts.routemisr.com/${endPoint}${separator}page=${pageParam}`,
      headerObjectData(),
    );
    return response.data;
  }

  const query = useInfiniteQuery({
    queryKey,
    queryFn: getPosts,
    enabled: isEnabled,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage?.meta?.pagination?.nextPage ?? undefined;
    },
  });

  if (!endPoint) return;

  return query;
}
