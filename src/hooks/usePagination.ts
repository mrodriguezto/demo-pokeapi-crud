import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../types";

const NUMBER_OF_ITEMS = 8;

const usePagination = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState<string>(
    `https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_ITEMS}`
  );
  const nextPageUrl = useRef<string | null>(null);
  const prevPageUrl = useRef<string | null>(null);

  const loadPokemons = async () => {
    setIsLoading(true);
    if (!url) return;

    const res = await axios.get<PokemonPaginatedResponse>(url);
    nextPageUrl.current = res.data.next;
    prevPageUrl.current = res.data.previous;

    setIsLoading(false);

    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split("/");
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, picture, name };
    });
    // setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setSimplePokemonList(newPokemonList);
  };

  useEffect(() => {
    loadPokemons();
  }, [url]);

  const nextPage = () => {
    if (!nextPageUrl.current) return;

    setUrl(nextPageUrl.current);
  };

  const prevPage = () => {
    if (!prevPageUrl.current) return;

    setUrl(prevPageUrl.current);
  };

  return {
    simplePokemonList,
    isLoading,
    // loadPokemons,
    prevPage,
    nextPage,
  };
};

export default usePagination;
