import React from "react";
import { View, Text, ScrollView } from "react-native";
import { PokemonDetails as IPokemonDetails } from "../../types";
import { FadeInImage } from "../FadeInImage";
import styles from "./styles";

interface Props {
  pokemon: IPokemonDetails;
}

const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <>
      {/* Types */}
      <View style={{ ...styles.container }}>
        <Title text='Types' />
        <View style={{ flexDirection: "row" }}>
          {pokemon.types.map(({ type }) => (
            <ContentText content={type.name} key={type.name} margin />
          ))}
        </View>
        <Title text='Weight' />
        <ContentText content={`${pokemon.weight / 10} kg`} />
      </View>

      {/* Sprites */}
      <View style={{ ...styles.container }}>
        <Title text='Sprites' />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* Abilities */}
      <View style={{ ...styles.container }}>
        <Title text='Abilities' />
        <View style={{ flexDirection: "row" }}>
          {pokemon.abilities.map(({ ability }) => (
            <ContentText content={ability.name} key={ability.name} margin />
          ))}
        </View>
      </View>

      {/* Moves */}
      <View style={{ ...styles.container }}>
        <Title text='Moves' />
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {pokemon.moves.map(({ move }) => (
            <ContentText content={move.name} key={move.name} margin />
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={{ ...styles.container }}>
        <Title text='Stats' />
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{ flexDirection: "row" }}>
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  width: 160,
                }}
              >
                {stat.stat.name}
              </Text>
              <ContentText content={String(stat.base_stat)} bold />
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const Title = ({ text }: { text: string }) => {
  return <Text style={{ ...styles.title }}>{text}</Text>;
};

interface ContentTextProps {
  content: string;
  bold?: boolean;
  margin?: boolean;
}

const ContentText = ({
  content,
  bold = false,
  margin = false,
}: ContentTextProps) => {
  return (
    <Text
      style={{
        ...styles.regularText,
        fontWeight: bold ? "bold" : "normal",
        marginRight: margin ? 10 : 0,
      }}
    >
      {content}
    </Text>
  );
};

export default PokemonDetails;
