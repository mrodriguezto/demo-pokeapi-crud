import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SimplePokemon } from "../../types";
import { FadeInImage } from "../FadeInImage";
import { RootStackParams } from "../../navigation/StackNavigator";
import styles from "./styles";

interface Props {
  pokemon: SimplePokemon;
}

type NavigationProps = NativeStackNavigationProp<RootStackParams, "HomeScreen">;

const PokemonCard = ({ pokemon }: Props) => {
  const isMounted = useRef(true);
  const navigation = useNavigation<NavigationProps>();

  const { width } = useWindowDimensions();

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("PokemonScreen", { pokemon })}
    >
      <View
        style={{
          ...styles.cardContainer,
          width: width * 0.4,
          backgroundColor: "#222",
        }}
      >
        <View style={styles.textColumn}>
          <Text style={{ ...styles.name, ...styles.text }}>
            {pokemon.name} - {pokemon.id}
          </Text>
          <Text style={{ ...styles.text }}>Ver detalles</Text>
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonPicture} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
