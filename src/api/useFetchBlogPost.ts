import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogDetail } from "../utils";

export const useFetchBlogPost = (id: string | undefined) => {
  return useQuery({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      const entry = await client.getEntry(id as string);
      return mapBlogDetail([entry])[0];
    },
    enabled: !!id,
  });
};
