import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogEntries } from "../utils";

export function useFetchProducts() {
  return useQuery({
    queryKey: ["products"], // use a more descriptive key like ["blogPosts"]
    queryFn: () =>
      client
        .getEntries({ content_type: "product" }) // replace "blogPost" with your actual content type ID
        .then((response) => mapBlogEntries(response.items))
        .catch((error) => {
          // TODO handle error properly, maybe show a toast or log it
          console.error("Error fetching product posts:", error);
          return [];
        }),
  });
}
