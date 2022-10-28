import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PokemonScreen from "../screens/PokemonScreen";
import EditPokemonScreen from "../screens/EditPokemonScreen";
import { SimplePokemon } from "../types";

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemon: SimplePokemon };
  EditPokemonScreen: { pokemon: SimplePokemon | undefined };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
      <Stack.Screen name='EditPokemonScreen' component={EditPokemonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
