import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import {colors} from "../../utils/colors"
import AppText from '../../components/AppText/AppText';
import { WelcomeScreenStyles } from './WelcomeScreen.styles';
import CardLink from '../../components/CardLink/CardLink';
import reports from "../../../assets/reports.png";
import news from "../../../assets/news.png";
import services from "../../../assets/services.png";
import feedback from "../../../assets/feedback.png";

const WelcomeScreen = () => {
    return(
        <ScrollView contentContainerStyle={WelcomeScreenStyles.root}>
            <View style={WelcomeScreenStyles.textContainer}>
                <AppText font="DancingScript" variant="h1" color="black">Genome Center</AppText>
                <View style={WelcomeScreenStyles.line}/>
            </View>
            <View style={WelcomeScreenStyles.cardsContainer}>
                <View style={WelcomeScreenStyles.row}>
                    <CardLink image={reports} text="Reports" to="Reports"/>
                    <CardLink image={services} text="Services" to="Services"/>
                </View>
                <View style={WelcomeScreenStyles.row}>
                    <CardLink image={news} text="News" to="News"/>
                    <CardLink image={feedback} text="Feedback" to="Feedback"/>
                </View>
            </View>
            <View style={WelcomeScreenStyles.whyus}>
                <AppText variant="h3" style={{marginVertical: 10}} font="DancingScript">Why Us?</AppText>
                <View style={WelcomeScreenStyles.whyuscard}>
                    <AppText variant="h5" font="Poppins" style={{marginLeft: 9}}>Best Results</AppText>
                </View>
                <View style={WelcomeScreenStyles.whyuscard}>
                    <AppText variant="h5" font="Poppins" style={{marginLeft: 9}}>On Time Reports</AppText>
                </View>
                <View style={WelcomeScreenStyles.whyuscard}>
                    <AppText variant="h5" font="Poppins" style={{marginLeft: 9}}>Best Doctors</AppText>
                </View>
                <View style={WelcomeScreenStyles.whyuscard}>
                    <AppText variant="h5" font="Poppins" style={{marginLeft: 9}}>Best Services</AppText>
                </View>
            </View>
        </ScrollView>
    )
}

export default WelcomeScreen;