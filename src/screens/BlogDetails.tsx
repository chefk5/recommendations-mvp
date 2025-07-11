import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { blurhash, colors, fontSizes, fontWeights } from "../theme";
import { useRoute } from "@react-navigation/native";
import { useFetchBlogPost } from "../api/useFetchBlogPost";
import LoadingIndicator from "../components/common/LoadingIndicator";
import CenteredMessage from "../components/common/CenteredMessage";
import { Image } from "expo-image";

export default function BlogDetails() {
  const { blogId } = useRoute().params as { blogId: string };
  const { data, isLoading, error } = useFetchBlogPost(blogId);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <CenteredMessage message={error.message} />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={data?.image}
        style={styles.image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={700}
      />
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.description}>{data?.description}</Text>
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
