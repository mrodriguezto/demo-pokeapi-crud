import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import FAB from "../components/FAB";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import usePagination from "../hooks/usePagination";
import { RootStackParams } from "../navigation/StackNavigator";
import { SimplePokemon } from "../types";

type NavigationProps = NativeStackNavigationProp<RootStackParams, "HomeScreen">;

const HomeScreen = () => {
  const { simplePokemonList, nextPage, prevPage, isLoading } = usePagination();
  const navigation = useNavigation<NavigationProps>();

  const renderPokemon = (pokemon: SimplePokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={true}
              data={simplePokemonList}
              numColumns={2}
              renderItem={({ item }) => renderPokemon(item)}
              keyExtractor={(pokemon) => pokemon.id}
            />
          )}
        </View>

        <View style={styles.paginationContainer}>
          <Button title='Prev' onPress={prevPage} />
          <Button title='Next' onPress={nextPage} />
        </View>

        {/* <FlatList
            showsVerticalScrollIndicator={true}
            data={simplePokemonList}
            numColumns={2}
            renderItem={({ item }) => renderPokemon(item)}
            keyExtractor={(pokemon) => pokemon.id}
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
            ListFooterComponent={<Spinner />}
          /> */}
        <FAB
          onPress={() =>
            navigation.navigate("EditPokemonScreen", { pokemon: undefined })
          }
        >
          <Ionicons name='add' size={24} color='#fff' />
        </FAB>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
    position: "relative",
  },
  fab: {
    backgroundColor: "#444",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 8,
    right: 8,
    zIndex: 999,
  },
  fabText: {
    color: "#fff",
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingVertical: 16,
  },
});

export default HomeScreen;
