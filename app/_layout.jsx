import * as React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./login/page";
import "./../global.css";
import PortalLayout from "./portal/_layout";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
       
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LoginPage}
            options={{ title: "Welcome", headerShown: false }}
          />
          {/* <Stack.Screen
            name="Portal"
            component={PortalLayout}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
