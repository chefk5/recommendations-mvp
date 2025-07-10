import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../theme";

const LoadingIndicator = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color={colors.secondary} />
  </View>
);

export default LoadingIndicator;
