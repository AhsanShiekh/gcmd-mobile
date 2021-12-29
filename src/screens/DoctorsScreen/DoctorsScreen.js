import React from 'react';
import { View, Text, Image } from 'react-native';
import { doctorsScreenStyles } from './DoctorsScreen.styles';
import img from "../../../assets/doctors.png";
import AppText from "../../components/AppText/AppText";
import {colors} from "../../utils/colors";
import { ScrollView } from 'react-native-gesture-handler';
import drQaiser from "../../../assets/dr-qaiser.jpg";
import drAgha from "../../../assets/dragha.jpg";

const DoctorsScreen = () => {
    return(
        <View style={doctorsScreenStyles.root}>
            <View style={doctorsScreenStyles.top}>
                <Image source={img} style={doctorsScreenStyles.image}/>
                <AppText variant={"h3"} color={colors.main} center font="Raleway">OUR DOCTORS</AppText>

                <View style={doctorsScreenStyles.line}/>
            </View>

            <ScrollView style={doctorsScreenStyles.cardsContainer}>
                <View style={doctorsScreenStyles.card}>
                    <Image
                    style={doctorsScreenStyles.cardImage}
                    source={drAgha}/>
                    <AppText variant={"h4"} color={"black"} center font={"Raleway"}>Dr. MUHAMMAD AFAAQ AGHA</AppText>
                    <AppText variant={"h5"} color={"black"} center font={"Raleway"}>M.B.B.S</AppText>
                    <AppText variant={"h5"} color={"black"} center font={"Raleway"}>M.Phil (Histopathology)</AppText>
                </View>
                <View style={doctorsScreenStyles.line}/>
                <View style={doctorsScreenStyles.card}>
                    <Image
                    style={doctorsScreenStyles.cardImage}
                    source={drQaiser}/>
                    <AppText variant={"h4"} color={"black"} center font={"Raleway"}>Dr. QAISER TAUQIR AHMAD</AppText>
                    <AppText variant={"h5"} color={"black"} center font={"Raleway"}>M.B.B.S</AppText>
                    <AppText variant={"h5"} color={"black"} center font={"Raleway"}>D.C. PATH</AppText>
                    <AppText variant={"h5"} color={"black"} center font={"Raleway"}>Consultant Pathologist</AppText>
                </View>
                <View style={doctorsScreenStyles.line}/>
            </ScrollView>
        </View>
    )
}

export default DoctorsScreen;