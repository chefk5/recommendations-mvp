import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights } from "../theme/theme";

export default function BlogDetails() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/adaptive-icon.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Blog Title</Text>
      <Text style={styles.description}>Blog description goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: fontSizes.bg,
    fontWeight: fontWeights.bold,
    color: colors.textDark,
    marginBottom: 8,
  },
  description: {
    fontSize: fontSizes.md,
    color: colors.textDark,
  },
});
