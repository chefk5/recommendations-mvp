import React, { useCallback } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { colors, fontSizes, fontWeights } from "../../theme/theme";

type CardProps = {
  image: string;
  title: string;
  style?: ViewStyle;
  btnText?: string;
  handleNavigate?: () => void;
};
const Card: React.FC<CardProps> = ({
  image,
  title,
  style,
  btnText,
  handleNavigate,
}) => {
  return (
    <TouchableOpacity onPress={handleNavigate} activeOpacity={1}>
      <View style={[styles.container, style]}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
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
