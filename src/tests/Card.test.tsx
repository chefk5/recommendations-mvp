import React from "react";
import { render } from "@testing-library/react-native";
import Card from "../components/home/Card";

jest.mock("expo-image", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Image: (props: any) => <img {...props} />,
}));

describe("Card", () => {
  it("renders the image with correct source", () => {
    const imageUrl = "https://example.com/image.jpg";
    const { getByTestId } = render(
      <Card image={imageUrl} title="Test Title" />,
    );
    const image = getByTestId("card-image");
    expect(image.props.source).toBe(imageUrl);
  });
});
