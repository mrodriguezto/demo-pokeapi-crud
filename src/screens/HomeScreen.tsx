import React from "react";
import { Button, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import usePagination from "../hooks/usePagination";
import { SimplePokemon } from "../types";

const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = usePagination();

  const renderPokemon = (pokemon: SimplePokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  };

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            alignItems: "center",
            paddingTop: 16,
            position: "relative",
          }}
        >
          <Button title='Crear' />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={simplePokemonList}
            numColumns={2}
            renderItem={({ item }) => renderPokemon(item)}
            keyExtractor={(pokemon) => pokemon.id}
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
            ListFooterComponent={<Spinner />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
