import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigator from "./src/navigation/BottomNavigator";
import ItemsProvider from "./src/context/Items/ItemsProvider";

const App = () => {
  return (
    <ItemsProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </ItemsProvider>
  );
};

export default App;
