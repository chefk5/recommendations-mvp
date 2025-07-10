import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
// import { ProductDetails } from "../app/types";

export enum MainRoutes {
  Home = "Home",
  BlogDetails = "BlogDetails",
  ProductDetails = "ProductDetails",
}

export type MainStackParamList = {
  [MainRoutes.Home]: undefined;
  [MainRoutes.BlogDetails]: { blogId: string };
  [MainRoutes.ProductDetails]: { productId: string };
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = StackNavigationProp<MainStackParamList, RouteName>;

export const MainStack = createStackNavigator<MainStackParamList>();
