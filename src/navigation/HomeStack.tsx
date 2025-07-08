import React from "react";
import { MainRoutes, MainStack } from "./Types";
// import Products from "../screens/Products";
// import Details from "../screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import { BlogDetails, Home, ProductDetails } from "../screens";
// import { colors } from "../styles/theme";

function HomeStack() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
          },
          //   headerTintColor: colors.textPrimary,
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
