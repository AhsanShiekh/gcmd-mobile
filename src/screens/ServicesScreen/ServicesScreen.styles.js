import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const servicesScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  top: {
    height: "25%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    paddingBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
  },
  searchContainer: {
    height: 33,
    width: "60%",
    marginHorizontal: "5%",
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 25,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "flex-end",
  },
  search: {
    height: "100%",
    width: "80%",
    fontSize: 18,
    color: "black",
  },
  tests: {
    flex: 1,
  },
});
