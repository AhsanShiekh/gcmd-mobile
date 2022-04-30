import React from "react";
import { View, Image } from "react-native";
import { CardLinkStyles } from "./CardLink.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppText from "../AppText/AppText";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BoxShadow } from "react-native-shadow";

const CardLink = ({ image, text, to, onPress }) => {
  const navigation = useNavigation();

  const shadowOpt = {
    width: 135,
    height: 195,
    color: "#36A0D0",
    border: 2,
    radius: 2,
    blur: 4,
    opacity: 0.6,
    x: -3,
    y: 4,
    style: { backgroundColor: "white", marginVertical: 10, borderRadius: 10 },
  };

  return (
    <BoxShadow setting={shadowOpt}>
      <TouchableOpacity
        onPress={onPress ? () => onPress() : () => navigation.navigate(to)}
      >
        <View style={CardLinkStyles.root}>
          <View style={CardLinkStyles.iconContainer}>
            <Image source={image} style={CardLinkStyles.image} />
          </View>
          <AppText center font="Poppins" variant="h6" color={colors.main}>
            {text}
          </AppText>
        </View>
      </TouchableOpacity>
    </BoxShadow>
  );
};

export default CardLink;
