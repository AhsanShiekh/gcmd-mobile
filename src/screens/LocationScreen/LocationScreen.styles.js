import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const locationScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 65,
  },
  map: {
    height: "76%",
    width: "100%",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.main,
  },
});
