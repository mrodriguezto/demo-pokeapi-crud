import { useState, useEffect } from "react";
import { pokemonApi } from "../api";
import { PokemonDetails } from "../types";

const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>(
    {} as PokemonDetails
  );

  const loadPokemon = async () => {
    const res = await pokemonApi.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );
    setPokemonDetails(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemonDetails,
  };
};

export default usePokemon;
