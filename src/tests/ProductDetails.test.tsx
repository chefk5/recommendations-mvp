import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProductDetails from "../screens/ProductDetails";
import * as Linking from "expo-linking";

jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: { productId: "abc123" },
  }),
}));

const mockUseFetchProduct = jest.fn();
jest.mock("../api/useFetchProduct", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFetchProduct: (...args: any[]) => mockUseFetchProduct(...args),
}));

jest.mock("expo-image", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Image: (props: any) => <img {...props} />,
}));

jest.mock("expo-linking", () => ({
  openURL: jest.fn(),
}));

describe("ProductDetails", () => {
  it("renders product details", () => {
    mockUseFetchProduct.mockReturnValue({
      data: {
        image: "https://example.com/image.jpg",
        title: "Test Product",
        tagline: "Best product ever",
        description: "This is a test product.",
        price: "99",
        externalLink: "https://example.com/product",
      },
      isLoading: false,
      error: null,
    });
    const { getByText } = render(<ProductDetails />);
    expect(getByText("Test Product")).toBeTruthy();
    expect(getByText("Best product ever")).toBeTruthy();
    expect(getByText("This is a test product.")).toBeTruthy();
    expect(getByText("Price: 99$")).toBeTruthy();
    expect(getByText("View Product")).toBeTruthy();
  });

  it("opens external link when button is pressed", () => {
    const { getByText } = render(<ProductDetails />);
    const button = getByText("View Product");
    fireEvent.press(button);
    expect(Linking.openURL).toHaveBeenCalledWith("https://example.com/product");
  });

  it("renders error message when error is present", () => {
    mockUseFetchProduct.mockReturnValue({
      data: null,
      isLoading: false,
      error: { message: "Error fetching product details" },
    });
    const { getByText } = render(<ProductDetails />);
    expect(getByText("Error fetching product details")).toBeTruthy();
  });
});
