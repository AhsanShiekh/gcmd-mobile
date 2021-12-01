import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const reportScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  pdf: {
    height: "90%",
    width: "100%",
  },
  bottom: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  download: {
    width: "48%",
    height: "70%",
    borderRadius: 50,
    backgroundColor: "#25A231",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  share: {
    width: "48%",
    height: "70%",
    borderRadius: 50,
    backgroundColor: "#2279F2",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  shareLoading: {
    position: "relative",
    alignSelf: "center",
    right: "10",
  },
});

export default reportScreenStyles;
