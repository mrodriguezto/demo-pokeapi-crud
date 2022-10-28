import { FlatList, View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import usePagination from "../hooks/usePagination";
import { SimplePokemon } from "../types";

const HomeScreen = () => {
  const { simplePokemonList, nextPage, prevPage, isLoading } = usePagination();

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
  paginationContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingVertical: 16,
  },
});

export default HomeScreen;
