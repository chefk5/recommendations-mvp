import React from "react";
import { render } from "@testing-library/react-native";
import Card from "../components/home/Card";

describe("Card", () => {
  it("renders the image with correct source", () => {
    const imageUrl = "https://example.com/image.jpg";
    const { getByTestId } = render(
      <Card image={imageUrl} title="Test Title" />,
    );
    const image = getByTestId("card-image");
    expect(image.props.source.uri).toBe(imageUrl);
  });
});
