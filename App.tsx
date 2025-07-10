import { StatusBar } from "expo-status-bar";
import HomeStack from "./src/navigation/HomeStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeStack />
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}
