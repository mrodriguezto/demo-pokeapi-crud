import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",

    zIndex: 99,
  },
  pokemonPicture: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -5,
    right: -8,
  },
  textColumn: {
    paddingTop: 12,
    paddingLeft: 8,
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: "#eee",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default styles;
