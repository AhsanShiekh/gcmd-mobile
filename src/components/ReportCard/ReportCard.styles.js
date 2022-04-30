import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const reportCardStyles = StyleSheet.create({
  root: {
    width: "100%",
    borderColor: colors.main,
    borderWidth: 4,
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 8,
    backgroundColor: "white",
    paddingTop: 4,
  },
  top: {
    height: 30,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    height: 2,
    width: "90%",
    backgroundColor: "black",
  },
  middleContent: {
    width: "90%",
    alignItems: "flex-start",
  },
  middleDown: {
    width: "100%",
    marginBottom: 8,
  },
  tests: {
    width: "100%",
    marginVertical: 2,
  },
  middleTop: {
    marginTop: 8,
    marginBottom: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
