import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogEntries } from "../utils";

export function useFetchBlogPosts() {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: () =>
      client
        .getEntries({ content_type: "blog" }) // replace "blogPost" with your actual content type ID
        .then((response) => mapBlogEntries(response.items))
        .catch((error) => {
          // TODO handle error properly, maybe show a toast or log it
          console.error("Error fetching blog posts:", error);
          return [];
        }),
  });
}
