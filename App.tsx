import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./src/navigation/HomeStack";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
