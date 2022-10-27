import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokeballBG: {
    position: "absolute",
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    opacity: 0.5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default globalStyles;
