import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { colors, fontSizes, fontWeights } from "../theme/theme";

const product = {
  title: "Super Widget",
  tagline: "The best widget for your needs",
  description:
    "This widget will help you accomplish everything you want. It's reliable, efficient, and affordable.",
  price: "$49.99",
  image: require("../../assets/adaptive-icon.png"),
  link: "https://example.com/product/super-widget",
};

export default function ProductDetails() {
  const handleOpenLink = () => {
    Linking.openURL(product.link);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.tagline}>{product.tagline}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <TouchableOpacity onPress={handleOpenLink} style={styles.linkButton}>
        <Text style={styles.linkText}>View Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
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
    marginBottom: 4,
  },
  tagline: {
    fontSize: fontSizes.md,
    color: colors.textLight,
    marginBottom: 8,
  },
  description: {
    fontSize: fontSizes.md,
    color: colors.text,
    marginBottom: 8,
  },
  price: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    marginBottom: 16,
  },
  linkButton: {
    backgroundColor: colors.button,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  linkText: {
    color: colors.buttonText,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
  },
});
