import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const CardLinkStyles = StyleSheet.create({
    root: {
        height: 200,
        width: "100%",
        marginVertical: 10,
        backgroundColor: colors.main,
        borderRadius: 8,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    iconContainer: {
        width: 150,
        height: "75%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 150,
        borderWidth: 2,
        borderColor: colors.main,
        marginBottom: 8
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 500
    }
})