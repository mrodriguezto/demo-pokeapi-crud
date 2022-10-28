import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import usePagination from "../hooks/usePagination";
import { RootStackParams } from "../navigation/StackNavigator";
import { SimplePokemon } from "../types";

type NavigationProps = NativeStackNavigationProp<RootStackParams, "HomeScreen">;

const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = usePagination();
  const navigation = useNavigation<NavigationProps>();

  const renderPokemon = (pokemon: SimplePokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditPokemonScreen", { pokemon: undefined })
            }
            style={styles.fab}
          >
            <Text style={styles.fabText}>Registrar</Text>
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
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
});

export default HomeScreen;
