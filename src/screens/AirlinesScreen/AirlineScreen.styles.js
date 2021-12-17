import { StyleSheet } from "react-native";

export const airlineScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    height: "25%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
  },
  item: {
    height: 50,
    width: "90%",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  searchContainer: {
    height: 40,
    width: "90%",
    marginHorizontal: "5%",
    borderWidth: 2,
    borderColor: "#808080",
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
  },
});
