import React from "react";
import { MainRoutes, MainStack } from "./Types";
import { NavigationContainer } from "@react-navigation/native";
import { BlogDetails, Home, ProductDetails } from "../screens";
import { colors } from "../theme";

function HomeStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: colors.background,
            elevation: 0,
          },
          headerTintColor: colors.primary,
          headerTitle: "",
        }}
      >
        <MainStack.Screen name={MainRoutes.Home} component={Home} />
        <MainStack.Screen
          name={MainRoutes.BlogDetails}
          component={BlogDetails}
        />
        <MainStack.Screen
          name={MainRoutes.ProductDetails}
          component={ProductDetails}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
