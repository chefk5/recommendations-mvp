import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights, mainStyles } from "../theme/theme";
import ScrollableList from "../components/home/ScrollableList";
import { ScrollableListType } from "../components/common/enums";
import { useFetchBlogPosts } from "../api/useFetchBlogPosts";
import { useFetchProducts } from "../api/useFetchProducts";

const Home = () => {
  const {
    data: blogData,
    isLoading: isBlogLoading,
    error: blogError,
  } = useFetchBlogPosts();

  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useFetchProducts();
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello!</Text>
      <ScrollableList
        data={blogData ?? []}
        heading="Latest blog posts"
        type={ScrollableListType.Blog}
        isLoading={isBlogLoading}
        error={blogError?.message}
      />
      <ScrollableList
        data={products ?? []}
        heading="Popular products"
        type={ScrollableListType.Product}
        isLoading={isProductsLoading}
        error={productsError?.message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  greeting: {
    fontSize: fontSizes.bg,
    color: colors.secondary,
    fontWeight: fontWeights.bold,
    marginBottom: 20,
    ...mainStyles.marginH,
  },
});

export default Home;
