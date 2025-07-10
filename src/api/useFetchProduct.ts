import { useQuery } from "@tanstack/react-query";
import { client } from "./contentfulClient";
import { mapProductDetail } from "../utils";
import { showMessage } from "react-native-flash-message";

export const useFetchProduct = (id: string | undefined) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Product ID is required");
      }
      try {
        const entry = await client.getEntry(id);
        return mapProductDetail([entry])[0];
      } catch (error) {
        console.error("Error fetching product:", error);
        showMessage({
          message: `Error fetching product`,
          type: "danger",
        });
      }
    },
    enabled: !!id,
  });
};
