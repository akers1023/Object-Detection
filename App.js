// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import OpenCamera from "./screens/Camera";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { createStackNavigator } from "@react-navigation/stack";
import Feature from "./screens/Feature";
import Upload from "./screens/Upload";
import Profile from "./screens/Profile";
import DemoModels from "./screens/DemoModels";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = ({ route }) => {
  const { userEmail } = route.params;
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      inactiveColor="#E8EBB5"
      activeColor="#005249"
      barStyle={{ backgroundColor: "#C2CF0C" }}
      backBehavior={"initialRoute"}
    >
      <Tab.Screen
        name="Feature"
        component={DemoModels}
        options={{
          tabBarLabel: "Demo Models",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-text"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userEmail: userEmail }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-account-details"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ height: 25 }} />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={OpenCamera}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Upload"
          component={Upload}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
