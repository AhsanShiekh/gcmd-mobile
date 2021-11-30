import React from "react";
import { View, Image } from "react-native";
import comingSoonScreenStyles from "./ComingSoonScreen.styles";
import comingSoon from "../../../assets/comingsoon.png";
import AppText from "../../components/AppText/AppText";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ComingSoonScreen = ({ navigation, title }) => {
  return (
    <View style={comingSoonScreenStyles.root}>
      <Image source={comingSoon} style={comingSoonScreenStyles.image} />

      <View>
        <AppText variant="h4" center color="black" font="Poppins">
          {title.toUpperCase()}
        </AppText>
        <AppText variant="h3" center color="black" font="Poppins">
          COMING SOON!
        </AppText>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={comingSoonScreenStyles.back}>
          <Icon name="arrow-back" size={35} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ComingSoonScreen;
