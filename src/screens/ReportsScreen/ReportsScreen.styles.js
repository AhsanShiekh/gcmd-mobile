import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const reportScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F3F0F0",
  },
  top: {
    height: "23%",
    width: "100%",
    backgroundColor: colors.main,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  header: {
    height: "20%",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    flexDirection: "row",
  },
  topContent: {
    height: "80%",
  },
  dates: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  date: {
    width: "40%",
    textAlign: "center",
  },
  searchSection: {
    height: 40,
    width: "95%",
    marginHorizontal: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: "100%",
    width: "90%",
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
  reportsContainer: {
    flex: 1,
    width: "95%",
    marginHorizontal: "2.5%",
    marginTop: 8,
  },
  loaderContainer: {
    flex: 1,
    width: "95%",
    zIndex: 2,
    marginHorizontal: "2.5%",
  },
  loader: {
    height: 200,
    width: 200,
  },
  noReports: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  resultsCounter: {
    height: 40,
    width: "95%",
    marginHorizontal: "2.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptiom: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
