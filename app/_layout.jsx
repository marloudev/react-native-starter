import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./login/page";
import "./../global.css";
import PortalLayout from "./portal/_layout";

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LoginPage}
        options={{ title: "Welcome", headerShown: false }}
      />
      <Stack.Screen
        name="Portal"
        component={PortalLayout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
