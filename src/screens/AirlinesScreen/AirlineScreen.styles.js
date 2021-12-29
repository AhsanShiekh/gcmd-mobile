import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors"

export const airlineScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
  },
  item: {
    height: 50,
    width: "90%",
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.main,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  image: {
    height: 150,
    width: 150
  },
  searchContainer: {
    height: 40,
    width: "90%",
    marginHorizontal: "5%",
    borderWidth: 2,
    borderColor: "black",
    marginTop: 7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },

  search: {
    height: "100%",
    width: "80%",
    fontSize: 18,
    color: "black"
  },
});
