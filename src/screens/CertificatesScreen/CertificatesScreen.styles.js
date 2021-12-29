import { StatusBar, StyleSheet } from "react-native";

export const certificatesScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    width: "100%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    marginBottom: 20,
  },
  mainImg: {
    height: 150,
    width: 150,
    marginBottom: 8,
  },
  cerImgCon: {
    height: 200,
    width: 130,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
  },
  cerImg: {
    height: 200,
    width: 130,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: "black",
  },
  cerImgRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  modal: {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
  },
});
