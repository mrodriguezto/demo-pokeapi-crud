import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import usePokemonSearch from "../hooks/useSearch";
import globalStyles from "../styles/globals";
import { useState } from "react";
import { SimplePokemon } from "../types";
import Loading from "../components/Loading";

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [term, setTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    const filterPokemons = (term: string) => {
      if (term.length === 0) return setFilteredPokemons([]);

      if (isNaN(Number(term))) {
        setFilteredPokemons(
          simplePokemonList.filter((pokemon) =>
            pokemon.name.includes(term.toLowerCase())
          )
        );
      } else {
        const pokemonById = simplePokemonList.find(
          (pokemon) => pokemon.id === term
        );
        setFilteredPokemons(pokemonById ? [pokemonById] : []);
      }
    };

    filterPokemons(term);
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SearchBar
        onDebounce={(value) => setTerm(value)}
        style={{ top: top + 10 }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredPokemons}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              marginTop: top + 70,
              marginBottom: top + 20,
            }}
          >
            {term}
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(pokemon) => pokemon.id}
      />
    </View>
  );
};

export default SearchScreen;
