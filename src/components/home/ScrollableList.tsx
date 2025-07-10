import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { colors, fontSizes, mainStyles } from "../../theme/theme";
import React, { useCallback } from "react";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import { MainRoutes, MainStackParamList } from "../../navigation/Types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollableListType } from "../common/enums";
import LoadingIndicator from "../common/LoadingIndicator";
import CenteredMessage from "../common/CenteredMessage";
import SkeletonLoading from "../common/SkeletonLoading";

type ScrollableListProps = {
  data: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  heading?: string;
  type?: ScrollableListType;
  isLoading?: boolean;
  error?: string;
};

const ScrollableList = ({
  data,
  heading,
  type,
  isLoading,
  error,
}: ScrollableListProps) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleNavigate = useCallback(() => {
    switch (type) {
      case ScrollableListType.Blog:
        navigation.navigate(MainRoutes.BlogDetails);
        break;
      case ScrollableListType.Product:
        navigation.navigate(MainRoutes.ProductDetails);
        break;
      default:
        break;
    }
  }, [navigation, type]);

  if (isLoading) {
    return <SkeletonLoading />;
  }
  if (data.length === 0) {
    return <CenteredMessage message="No items available" />;
  }
  if (error) {
    return <CenteredMessage message={`Error: ${error}`} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>{heading}</Text>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            handleNavigate={handleNavigate}
            btnText={
              type === ScrollableListType.Blog ? "Read more" : "View more"
            }
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ ...mainStyles.paddingH }}
      />
    </View>
  );
};

export default ScrollableList;

const styles = StyleSheet.create({
  header: {
    fontSize: fontSizes.md1,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.textDark,
    ...mainStyles.marginH,
  },
});
