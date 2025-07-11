import React from "react";
import { render } from "@testing-library/react-native";
import BlogDetails from "../screens/BlogDetails";

jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: { blogId: "123" },
  }),
}));

jest.mock("../api/useFetchBlogPost", () => ({
  useFetchBlogPost: () => ({
    data: {
      image: "https://example.com/image.jpg",
      title: "Test Blog Title",
      description: "Test blog description.",
    },
    isLoading: false,
    error: null,
  }),
}));

const mockUseFetchBlogPost = jest.fn();
jest.mock("../api/useFetchBlogPost", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFetchBlogPost: (...args: any[]) => mockUseFetchBlogPost(...args),
}));

jest.mock("expo-image", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Image: (props: any) => <img {...props} />,
}));

describe("BlogDetails", () => {
  it("renders blog details", () => {
    mockUseFetchBlogPost.mockReturnValue({
      data: {
        image: "https://example.com/image.jpg",
        title: "Test Blog Title",
        description: "Test blog description.",
      },
      isLoading: false,
      error: null,
    });
    const { getByText } = render(<BlogDetails />);
    expect(getByText("Test Blog Title")).toBeTruthy();
    expect(getByText("Test blog description.")).toBeTruthy();
  });

  it("renders error message when error is present", () => {
    mockUseFetchBlogPost.mockReturnValue({
      data: null,
      isLoading: false,
      error: { message: "Error fetching blog details" },
    });
    const { getByText } = render(<BlogDetails />);
    expect(getByText("Error fetching blog details")).toBeTruthy();
  });
});
