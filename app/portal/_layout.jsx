import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import PortalPage from "./page";
import ProfilePage from "./profile/page";
import HomePage from "./home/page";
import { Ionicons } from "@expo/vector-icons";  // Importing icon set

const Tab = createBottomTabNavigator();

export default function PortalLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} /> // Icon for ProfilePage
          ),
        }}
        name="ProfilePage"
        component={ProfilePage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> // Icon for HomePage
          ),
        }}
        name="HomePage"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} /> // Icon for PortalPage
          ),
        }}
        name="PortalPage"
        component={PortalPage}
      />
    </Tab.Navigator>
  );
}
