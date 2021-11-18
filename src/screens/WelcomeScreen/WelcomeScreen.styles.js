import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const WelcomeScreenStyles = StyleSheet.create({
    root: {
        width: "96%",
        marginHorizontal: "2%",
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 10,
        textAlign: "center",
        width: "100%"
    },
    cardsContainer: {
        width: "100%",
    },
    row: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    line: {
        width: "40%",
        height: 2,
        backgroundColor: "grey",
        marginVertical: 15
    },
    whyus: {
        width: "100%",
        textAlign: "left",
        justifyContent: "center",
        alignItems: "center",
    },
    whyuscard: {
        height: 50,
        width: "90%",
        borderWidth: 2,
        borderLeftWidth: 5,
        borderColor: colors.main,
        justifyContent: "center",
        alignItems: "flex-start",
        marginVertical: 10
    }
})