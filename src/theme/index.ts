import { StyleSheet } from "react-native";

export const colors = {
  primary: "#FF6FA1",
  secondary: "#6C63FF",
  background: "#FDFBFF",
  card: "#FFFFFF",
  textDark: "#333333",
  textLight: "#777777",
  accent: "#FFB74D",
} as const;
export const fontSizes = {
  sm: 14,
  md: 18,
  md1: 20,
  md2: 22,
  bg: 26,
} as const;

export const fontWeights: Record<
  "light" | "regular" | "medium" | "semiBold" | "bold",
  "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
> = {
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

export const mainStyles = StyleSheet.create({
  marginH: {
    marginHorizontal: 20,
  },
  marginV: {
    marginVertical: 10,
  },
  paddingH: {
    paddingHorizontal: 20,
  },
  paddingV: {
    paddingVertical: 10,
  },
});
