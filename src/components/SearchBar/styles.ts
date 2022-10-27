import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    elevation: 12,
    position: "absolute",
    zIndex: 999,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
  },
});

export default styles;
