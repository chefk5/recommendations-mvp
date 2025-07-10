import { StatusBar } from "expo-status-bar";
import HomeStack from "./src/navigation/HomeStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlashMessage from "react-native-flash-message";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeStack />
      <StatusBar style="auto" />
      <FlashMessage position="top" />
    </QueryClientProvider>
  );
}
