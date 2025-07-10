import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapBlogDetail, mapProductDetail } from "../utils";

export const useFetchProduct = (id: string | undefined) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Product ID is required");
      }
      const entry = await client.getEntry(id);
      return mapProductDetail([entry])[0];
    },
    enabled: !!id,
  });
};
