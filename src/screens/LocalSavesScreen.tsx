import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import BasicPokemonCard from "../components/BasicPokemonCard";
import FAB from "../components/FAB";
import Spinner from "../components/Spinner";
import ItemsContext from "../context/Items/ItemsContext";
import { RootStackParams } from "../navigation/StackNavigator";
import { SimplePokemon } from "../types";

type NavigationProps = NativeStackNavigationProp<RootStackParams, "HomeScreen">;

const LocalSavesScreen = () => {
  const { isLoading, items } = useContext(ItemsContext);
  const navigation = useNavigation<NavigationProps>();

  const renderCard = (item: SimplePokemon) => {
    return <BasicPokemonCard pokemon={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={true}
          data={items}
          numColumns={2}
          renderItem={({ item }) => renderCard(item)}
          keyExtractor={(item) => item.id}
        />
      )}
      <FAB
        onPress={() =>
          navigation.navigate("EditPokemonScreen", { pokemon: undefined })
        }
      >
        <Ionicons name='add' size={24} color='#fff' />
      </FAB>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
    position: "relative",
  },
});

export default LocalSavesScreen;
