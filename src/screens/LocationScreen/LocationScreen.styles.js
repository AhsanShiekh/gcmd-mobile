import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const locationScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    marginTop: StatusBar.currentHeight,
    height: "85%",
    width: "100%",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.main,
    paddingHorizontal: 15,
  },
});
