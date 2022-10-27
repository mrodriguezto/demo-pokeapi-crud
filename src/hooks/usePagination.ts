import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api";
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../types";

const usePagination = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=20");

  const loadPokemons = async () => {
    setIsLoading(true);
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current
    );

    nextPageUrl.current = res.data.next;
    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, picture, name };
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isLoading,
    loadPokemons,
  };
};

export default usePagination;
