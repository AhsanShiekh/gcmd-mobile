import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const feedbackScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    height: "28%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  img: {
    height: 150,
    width: 150,
    marginBottom: 8,
  },
  form: {
    alignItems: "center",
    flex: 1,
    width: "92%",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: colors.main,
    borderRadius: 900,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
