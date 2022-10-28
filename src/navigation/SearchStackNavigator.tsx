import React from "react";
import SearchScreen from "../screens/SearchScreen";
import PokemonScreen from "../screens/PokemonScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "./StackNavigator";

const Stack = createNativeStackNavigator<RootStackParams>();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
