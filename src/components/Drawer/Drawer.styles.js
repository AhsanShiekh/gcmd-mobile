import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const drawerStyles = StyleSheet.create({
  root: {
    width: "100%",
    marginBottom: 70,
  },
  top: {
    height: "25%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    height: 100,
    width: 100,
  },
  seprator: {
    height: 2,
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "lightgrey",
  },
  middle: {
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  option: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 70,
    width: "90%",
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  optionImage: {
    height: 45,
    width: 45,
    marginHorizontal: 20,
  },
  bottom: {
    height: 70,
    width: "100%",
    backgroundColor: colors.main,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});
