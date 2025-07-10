import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSizes, fontWeights, mainStyles } from "../theme/theme";
import ScrollableList from "../components/home/ScrollableList";
import { ScrollableListType } from "../components/common/enums";

const dummyData = [
  {
    id: "1",
    title: "Ovulation Tips: lets explore the bets 5 tips to get pregnant",
    image: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    title: "Pregnancy Essentials",
    image: "https://picsum.photos/200/300",
  },
  {
    id: "3",
    title: "Best Vitamins",
    image: "https://picsum.photos/200/300",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello!</Text>
      <ScrollableList
        data={dummyData}
        heading="Latest blog posts"
        type={ScrollableListType.Blog}
      />
      <ScrollableList
        data={dummyData}
        heading="Popular products"
        type={ScrollableListType.Product}
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
