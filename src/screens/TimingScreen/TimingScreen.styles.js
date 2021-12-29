import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const timingScreenStyles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        height: "40%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 200,
        width: 200
    },
    section: {
        marginVertical: 20
    },
    back: {
        height: 70,
        width: 70,
        backgroundColor: colors.main,
        borderRadius: 500,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})