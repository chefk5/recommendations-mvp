import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View } from "react-native";

const CARD_WIDTH = 180;
const CARD_HEIGHT = 220;
const IMAGE_HEIGHT = 120;
const PADDING = 8;
const TITLE_HEIGHT = 20;
const BTN_HEIGHT = 16;

const CardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={CARD_WIDTH}
    height={CARD_HEIGHT}
    viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
    style={{ marginRight: 12, borderRadius: 6 }}
  >
    {/* Image */}
    <Rect
      x={PADDING}
      y={PADDING}
      rx="4"
      ry="4"
      width={CARD_WIDTH - PADDING * 2}
      height={IMAGE_HEIGHT}
    />
    {/* Title */}
    <Rect
      x={PADDING}
      y={IMAGE_HEIGHT + PADDING * 2}
      rx="4"
      ry="4"
      width={CARD_WIDTH * 0.8}
      height={TITLE_HEIGHT}
    />
    {/* Button/Text */}
    <Rect
      x={CARD_WIDTH - PADDING - CARD_WIDTH * 0.4}
      y={CARD_HEIGHT - BTN_HEIGHT - PADDING}
      rx="4"
      ry="4"
      width={CARD_WIDTH * 0.4}
      height={BTN_HEIGHT}
    />
  </ContentLoader>
);

const SkeletonLoading = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 16 }}>
      {[...Array(3)].map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </View>
  );
};

export default SkeletonLoading;
