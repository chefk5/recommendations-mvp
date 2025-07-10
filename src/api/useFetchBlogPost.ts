import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogDetail } from "../utils";
import { showMessage } from "react-native-flash-message";

export const useFetchBlogPost = (id: string | undefined) => {
  return useQuery({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Blog post ID is required");
      }
      try {
        const entry = await client.getEntry(id);
        return mapBlogDetail([entry])[0];
      } catch (error) {
        console.error("Error fetching blog post:", error);
        showMessage({
          message: `Error fetching post`,
          type: "danger",
        });
      }
    },
    enabled: !!id,
  });
};
