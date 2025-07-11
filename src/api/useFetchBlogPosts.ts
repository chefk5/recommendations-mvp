import { useInfiniteQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogEntries } from "../utils";

export function useFetchBlogPosts({ limit = 5 } = {}) {
  return useInfiniteQuery({
    queryKey: ["blogPosts"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await client.getEntries({
        content_type: "blog",
        skip: pageParam,
        limit,
      });
      return mapBlogEntries(response.items);
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
