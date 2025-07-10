import { useInfiniteQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogEntries } from "../utils";
import { showMessage } from "react-native-flash-message";

export function useFetchBlogPosts({ limit = 5 } = {}) {
  return useInfiniteQuery({
    queryKey: ["blogPosts"],
    queryFn: ({ pageParam = 0 }) =>
      client
        .getEntries({ content_type: "blog", skip: pageParam as number, limit })
        .then((response) => mapBlogEntries(response.items))
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Error fetching posts:", error);
          showMessage({
            message: `Error fetching posts`,
            type: "danger",
          });
          return [];
        }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const typedLastPage = lastPage as unknown[];
      return typedLastPage.length === limit
        ? allPages.length * limit
        : undefined;
    },
  });
}
