import { StyleSheet } from "react-native";

export const hamburgerStyles = StyleSheet.create({
  root: {
    height: 30,
    width: 50,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 15,
    left: 20,
  },
  line: {
    height: 2.5,
    width: "100%",
    backgroundColor: "white",
  },
});
