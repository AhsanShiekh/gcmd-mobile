import { StatusBar } from "react-native";
import {StyleSheet} from "react-native";

export const doctorsScreenStyles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white"
    },
    top: {
        height: "25%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: StatusBar.currentHeight
    },
    image: {
        height: 100,
        width: 100
    },
    line: {
        height: 2,
        width: 150,
        marginVertical: 10,
        backgroundColor: "darkgrey",
        alignSelf: "center"
    },
    cardsContainer: {
        flex: 1,
    },
    card: {
        height: 390,
        width: "90%",
        marginHorizontal: "5%",
        alignItems: "center",
        justifyContent: 'center'
    },
    cardImage: {
        height: 200,
        width: 200,
        borderRadius: 500,
        marginBottom: 8
    }
})