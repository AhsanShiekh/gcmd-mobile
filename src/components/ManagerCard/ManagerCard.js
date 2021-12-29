import React from "react";
import { View, Text, Image } from "react-native";
import { managerCardStyles } from "./ManagerCard.styles";
import AppText from "../AppText/AppText";

const ManagerCard = ({ image, name, designation }) => {
  return (
    <View style={managerCardStyles.root}>
      <Image source={image} style={managerCardStyles.img} />
      <AppText variant={"h4"} center font="Raleway">
        {name}
      </AppText>
      <AppText variant={"h5"} center font="Raleway">
        {designation}
      </AppText>
    </View>
  );
};

export default ManagerCard;
