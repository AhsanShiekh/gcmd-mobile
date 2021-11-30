import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const comingSoonScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  back: {
    height: 70,
    width: 70,
    backgroundColor: colors.main,
    borderRadius: 500,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default comingSoonScreenStyles;
