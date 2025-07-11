import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { blurhash, colors, fontSizes, fontWeights } from "../../theme";
import { Image } from "expo-image";

type CardProps = {
  image: string;
  title: string;
  btnText?: string;
  handleNavigate?: () => void;
};
const Card: React.FC<CardProps> = ({
  image,
  title,
  btnText,
  handleNavigate,
}) => {
  return (
    <TouchableOpacity onPress={handleNavigate} activeOpacity={1}>
      <View style={[styles.container]}>
        <Image
          source={image}
          style={styles.image}
          testID="card-image"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={700}
        />
        <Text style={styles.title} numberOfLines={4} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.btnTxt}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: "80%",
    marginRight: 12,
    backgroundColor: colors.primary,
    borderRadius: 6,
    padding: 8,
  },
  image: {
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },
  title: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    color: colors.textDark,
  },
  btnTxt: {
    position: "absolute",
    bottom: 8,
    right: 8,
    fontSize: fontSizes.sm,
    color: colors.textDark,
    fontWeight: fontWeights.bold,
  },
});

export default Card;
