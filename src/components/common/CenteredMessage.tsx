import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../theme/theme";

type CenteredMessageProps = {
  message: string;
};

const CenteredMessage: React.FC<CenteredMessageProps> = ({ message }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: colors.textDark }}>{message}</Text>
  </View>
);

export default CenteredMessage;
