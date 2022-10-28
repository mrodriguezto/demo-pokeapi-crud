import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "./StackNavigator";
import LocalSavesScreen from "../screens/LocalSavesScreen";
import EditPokemonScreen from "../screens/EditPokemonScreen";

const Stack = createNativeStackNavigator<RootStackParams>();

const LocalSavesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LocalSavesScreen' component={LocalSavesScreen} />
      <Stack.Screen name='EditPokemonScreen' component={EditPokemonScreen} />
    </Stack.Navigator>
  );
};

export default LocalSavesStackNavigator;
