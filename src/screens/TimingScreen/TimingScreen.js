import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { timingScreenStyles } from "./TimingScreen.styles";
import img from "../../../assets/timing.png";
import AppText from "../../components/AppText/AppText";
import { colors } from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import BackHeader from "../../components/BackHeader/BackHeader";

const TimingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={timingScreenStyles.root}>
      <BackHeader />
      <View style={timingScreenStyles.top}>
        <Image source={img} style={timingScreenStyles.image} />
        <AppText color={colors.main} variant="h2" font="Raleway" center>
          OUR TIMINGS
        </AppText>
      </View>
      <View style={timingScreenStyles.section}>
        <AppText variant={"h3"} font={"Raleway"} color={colors.main} center>
          09:00am - 09:00pm
        </AppText>
        <AppText variant={"h5"} font={"Raleway"} color="lightgrey" center>
          MONDAY TO SATURDAY
        </AppText>
        <AppText variant={"h5"} font={"Raleway"} color="darkgrey" center>
          (FOR ALL KIND OF QUERIES)
        </AppText>
      </View>
      <View style={timingScreenStyles.section}>
        <AppText variant={"h3"} font={"Raleway"} color={colors.main} center>
          11:00am - 06:00pm
        </AppText>
        <AppText variant={"h5"} font={"Raleway"} color="lightgrey" center>
          SUNDAY
        </AppText>
        <AppText variant={"h5"} font={"Raleway"} color="darkgrey" center>
          (FOR REPORT COLLECTION AND COVID CASES ONLY)
        </AppText>
      </View>

      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={timingScreenStyles.back}>
          <Icon name="arrow-back" size={35} color={"white"} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default TimingScreen;
