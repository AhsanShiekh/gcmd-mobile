import React from "react";
import { View, Text } from "react-native";
import AppText from "../AppText/AppText";
import { serviceCardStyles } from "./ServiceCard.styles";

const ServiceCard = ({ name, price, type, reportTime }) => {
  return (
    <View style={serviceCardStyles.test}>
      <AppText variant={"subtitle"} weight={"bold"} center>
        {name}
      </AppText>
      <View style={serviceCardStyles.line} />
      <View style={serviceCardStyles.testAttribute}>
        <AppText variant={"subtitle"} weight={"bold"}>
          PRICE:
        </AppText>
        <AppText variant={"subtitle"}>
          {"   "}
          {price}/pkr
        </AppText>
      </View>
      <View style={serviceCardStyles.testAttribute}>
        <AppText variant={"subtitle"} weight={"bold"}>
          SPECIMEM:
        </AppText>
        <AppText variant={"subtitle"}>
          {"   "}
          {type}
        </AppText>
      </View>
      {reportTime && (
        <View style={serviceCardStyles.testAttribute}>
          <AppText variant={"subtitle"} weight={"bold"}>
            REPORT TIME:
          </AppText>
          <AppText variant={"subtitle"}>
            {"   "}
            {reportTime}
          </AppText>
        </View>
      )}
    </View>
  );
};

export default ServiceCard;
