import { StyleSheet } from "react-native";

export const messageScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    textAlign: "center",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    height: "55%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  proceedButton: {
    height: 70,
    width: 70,
    borderRadius: 200,
    backgroundColor: "#06B72C",
    alignItems: "center",
    justifyContent: "center",
  },
});
