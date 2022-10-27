import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";

import SearchStackNavigator from "./SearchStackNavigator";
import { Ionicons } from "@expo/vector-icons";

export type RootBottomTabParams = {
  SearchScreen: undefined;
  StackNavigator: undefined;
};

const Tab = createBottomTabNavigator<RootBottomTabParams>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { marginBottom: 5 },
        tabBarStyle: {
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name='StackNavigator'
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color }) => (
            <Ionicons name='list-outline' color={color} size={20} />
          ),
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name='SearchScreen'
        options={{
          tabBarLabel: "Search Pokemon",
          tabBarIcon: ({ color }) => (
            <Ionicons name='search-outline' color={color} size={20} />
          ),
        }}
        component={SearchStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
