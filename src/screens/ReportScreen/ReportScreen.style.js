import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const reportScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  pdf: {
    height: "80%",
    width: "100%",
  },
  bottom: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  download: {
    width: "100%",
    height: "50%",
    backgroundColor: colors.main,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  share: {
    width: "100%",
    height: "50%",
    backgroundColor: "black",
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
