import { useInfiniteQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapProductDetail } from "../utils";

export function useFetchProducts({ limit = 10 } = {}) {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await client.getEntries({
        content_type: "product",
        skip: pageParam,
        limit,
      });
      return mapProductDetail(response.items);
    },

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const typedLastPage = lastPage as unknown[];
      return typedLastPage.length === limit
        ? allPages.length * limit
        : undefined;
    },
  });
}
