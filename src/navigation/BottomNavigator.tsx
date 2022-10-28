import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";

import SearchStackNavigator from "./SearchStackNavigator";
import { Ionicons } from "@expo/vector-icons";
import LocalSavesStackNavigator from "./LocalSavesStackNavigator";

export type RootBottomTabParams = {
  SearchStackNavigator: undefined;
  StackNavigator: undefined;
  LocalSavesStackNavigator: undefined;
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
        name='SearchStackNavigator'
        options={{
          tabBarLabel: "Search Pokemon",
          tabBarIcon: ({ color }) => (
            <Ionicons name='search-outline' color={color} size={20} />
          ),
        }}
        component={SearchStackNavigator}
      />
      <Tab.Screen
        name='LocalSavesStackNavigator'
        options={{
          tabBarLabel: "Saved List",
          tabBarIcon: ({ color }) => (
            <Ionicons name='save' color={color} size={20} />
          ),
        }}
        component={LocalSavesStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
