import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const LoginScreenStyles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logoTextContainer: {
        height: "50%",
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    logo: {
        height: 200,
        width: 200,
    },
    formContainer: {
        height: "30%",
        width: "85%",
        marginHorizontal: "7.5%",
    },
    proceedButton: {
        height: 70,
        width: 70,
        backgroundColor: colors.main,
        borderRadius: 500,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto"
    }
})