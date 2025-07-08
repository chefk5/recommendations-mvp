// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// type Props = {};

// const home = (props: Props) => {
//   return (
//     <View style={styles.container}>
//       <Text>home</Text>
//     </View>
//   );
// };

// export default home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
// screens/CarouselTest.tsx
import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../theme/theme";
import { FlashList } from "@shopify/flash-list";

const dummyData = [
  {
    id: "1",
    title: "Ovulation Tips",
    image: "https://via.placeholder.com/150x100.png?text=Blog+1",
  },
  {
    id: "2",
    title: "Pregnancy Essentials",
    image: "https://via.placeholder.com/150x100.png?text=Blog+2",
  },
  {
    id: "3",
    title: "Best Vitamins",
    image: "https://via.placeholder.com/150x100.png?text=Blog+3",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blog Posts</Text>
      <FlashList
        horizontal
        data={dummyData}
        estimatedItemSize={160}
        renderItem={({ item }) => (
          <View
            style={{
              width: 160,
              marginRight: 12,
              backgroundColor: colors.primary,
              borderRadius: 12,
              padding: 8,
            }}
          >
            <Image source={{ uri: item.image }} style={{ height: 100 }} />
            <Text>{item.title}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={{ marginTop: 30 }}>
        <FlashList
          horizontal
          data={dummyData}
          estimatedItemSize={160}
          renderItem={({ item }) => (
            <View
              style={{
                width: 160,
                marginRight: 12,
                backgroundColor: colors.primary,
                borderRadius: 12,
                padding: 8,
              }}
            >
              <Image source={{ uri: item.image }} style={{ height: 100 }} />
              <Text>{item.title}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    width: 160,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: colors.primary,
    padding: 8,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 90,
    borderRadius: 8,
  },
  title: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Home;
