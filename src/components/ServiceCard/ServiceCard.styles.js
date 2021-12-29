import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const serviceCardStyles = StyleSheet.create({
  test: {
    paddingVertical: 8,
    width: "90%",
    marginHorizontal: "5%",
    borderWidth: 3,
    borderColor: colors.main,
    borderRadius: 15,
    marginVertical: 8,
  },
  line: {
    height: 1,
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "black",
    marginVertical: 5,
  },
  testAttribute: {
    marginLeft: "5%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 3,
  },
});
