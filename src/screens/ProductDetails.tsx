import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { blurhash, colors, fontSizes, fontWeights, mainStyles } from "../theme";
import { useRoute } from "@react-navigation/native";
import { useFetchProduct } from "../api/useFetchProduct";
import LoadingIndicator from "../components/common/LoadingIndicator";
import CenteredMessage from "../components/common/CenteredMessage";
import * as Linking from "expo-linking";
import { Image } from "expo-image";

export default function ProductDetails() {
  const { productId } = useRoute().params as { productId: string };
  const { data, isLoading, error } = useFetchProduct(productId);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <CenteredMessage message={"Error fetching product details"} />;
  }

  const handleOpenLink = () => {
    Linking.openURL(data?.externalLink);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: data?.image }}
        style={styles.image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={700}
      />
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.tagline}>{data?.tagline}</Text>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>{data?.description}</Text>
      </View>

      <Text style={styles.price}>Price: {data?.price}$</Text>
      <TouchableOpacity onPress={handleOpenLink} style={styles.linkButton}>
        <Text style={styles.linkText}>View Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...mainStyles.paddingH,
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
  descriptionWrapper: {
    marginBottom: 12,
  },
  description: {
    fontSize: fontSizes.md1,
    color: colors.textDark,
    lineHeight: 25,
    flexWrap: "wrap",
  },
  price: {
    fontSize: fontSizes.bg,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    marginBottom: 16,
    borderRadius: 6,
  },
  linkButton: {
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  linkText: {
    color: colors.secondary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
  },
});
