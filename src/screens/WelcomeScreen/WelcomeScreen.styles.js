import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const WelcomeScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    alignSelf: "center",
    marginLeft: 0,
    lineHeight: 50,
    marginTop: 15,
  },
  top: {
    height: "35%",
    marginTop: StatusBar.currentHeight,
  },
  cardsContainer: {
    height: "65%",
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "10%",
    justifyContent: "space-between",
  },
  cardsColumn1: {
    alignSelf: "flex-end",
    justifyContent: "space-around",
  },
  cardsColumn2: {
    justifyContent: "space-around",
    alignSelf: "flex-start",
  },
  callButton: {
    height: 70,
    width: 70,
    borderRadius: 200,
    backgroundColor: colors.main,
    position: "absolute",
    bottom: 23,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});
