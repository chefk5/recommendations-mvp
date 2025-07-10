import { useInfiniteQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapProductDetail } from "../utils";
import { showMessage } from "react-native-flash-message";

export function useFetchProducts({ limit = 10 } = {}) {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) =>
      client
        .getEntries({ content_type: "product", skip: pageParam, limit })
        .then((response) => mapProductDetail(response.items))
        .catch((error) => {
          console.error("Error fetching products:", error);
          showMessage({
            message: `Error fetching products`,
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
