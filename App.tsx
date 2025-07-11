import { StatusBar } from "expo-status-bar";
import HomeStack from "./src/navigation/HomeStack";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import FlashMessage, { showMessage } from "react-native-flash-message";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const parsedError = JSON.parse(error.message);

      showMessage({
        message: "Error fetching data",
        description: "error: " + parsedError.message,
        type: "danger",
      });
    },
  }),
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeStack />
      <StatusBar style="auto" />
      <FlashMessage position="top" />
    </QueryClientProvider>
  );
}
