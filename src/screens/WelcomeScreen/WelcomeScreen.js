import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Platform,
  Linking,
  SafeAreaView,
} from "react-native";
import background from "../../../assets/home-bg.png";
import Hamburger from "../../components/Hamburger/Hamburger";
import { WelcomeScreenStyles } from "./WelcomeScreen.styles";
import AppText from "../../components/AppText/AppText";
import CardLink from "../../components/CardLink/CardLink";
import reports from "../../../assets/reports.png";
import tests from "../../../assets/tests.png";
import aircraft from "../../../assets/aircraft.png";
import feedback from "../../../assets/feedback.png";
import Icon from "react-native-vector-icons/FontAwesome";

const WelcomeScreen = () => {
  const call = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:${03464342936}";
    } else {
      number = "tel:${03464342936}";
    }
    Linking.openURL(number);
  };

  return (
    <ImageBackground
      style={WelcomeScreenStyles.root}
      resizeMode="cover"
      source={background}
    >
      <SafeAreaView>
        <View style={WelcomeScreenStyles.top}>
          <Hamburger />
          <AppText
            variant={Platform.OS === "android" ? "h1" : "h2"}
            font="Poppins"
            color="white"
            style={WelcomeScreenStyles.title}
          >
            GENOME {"\n"}CENTER
          </AppText>
        </View>

        <View style={WelcomeScreenStyles.cardsContainer}>
          <View style={WelcomeScreenStyles.cardsColumn1}>
            <CardLink image={reports} text="REPORTS" to="Reports" />
            <CardLink
              image={tests}
              text="SERVICES"
              onPress={() =>
                Linking.openURL(
                  "https://drive.google.com/file/d/1wLHbu6jo2ET_8pYCCORlA4vhCpH3VlQK/view?usp=sharing"
                )
              }
            />
          </View>
          <View style={WelcomeScreenStyles.cardsColumn2}>
            <CardLink image={aircraft} text="APPROVED AIRLINES" to="Airlines" />
            <CardLink image={feedback} text="FEEDBACK" to="Feedback" />
          </View>
        </View>

        <View style={WelcomeScreenStyles.callButton}>
          <TouchableOpacity
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => call()}
          >
            <Icon name="phone" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <AppText
          variant={"subtitle"}
          color="black"
          style={WelcomeScreenStyles.copyright}
        >
          Designed and Developed by ECARE SOLUTIONS
        </AppText>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
