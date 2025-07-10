import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogDetail } from "../utils";

export const useFetchBlogPost = (id: string | undefined) => {
  return useQuery({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Blog post ID is required");
      }
      const entry = await client.getEntry(id);
      return mapBlogDetail([entry])[0];
    },
    enabled: !!id,
  });
};
