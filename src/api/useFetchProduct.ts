import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapProductDetail } from "../utils";

export const useFetchProduct = (id: string | undefined) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const entry = await client.getEntry(id as string);
      return mapProductDetail([entry])[0];
    },
    enabled: !!id,
  });
};
