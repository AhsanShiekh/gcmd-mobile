import { StyleSheet, StatusBar } from "react-native";

export const aboutScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    width: "98%",
    height: 300,
    borderRadius: 20,
    marginVertical: 15,
  },
  staff: {
    paddingBottom: 50,
    width: "100%",
  },
  line: {
    width: "60%",
    height: 2,
    backgroundColor: "darkgrey",
    marginHorizontal: "20%",
    marginVertical: 10,
  },
  row: {
    width: "100%",
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  person: {
    height: 230,
    width: 150,
    overflow: "hidden",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    paddingBottom: 8,
  },
  personImg: {
    height: "80%",
    width: "100%",
  },
});
