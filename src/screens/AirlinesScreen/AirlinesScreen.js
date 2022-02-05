import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppText from "../../components/AppText/AppText";
import { airlineScreenStyles } from "./AirlineScreen.styles";
import { colors } from "../../utils/colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import airlinesImage from "../../../assets/aircraft.png";
import { SafeAreaView } from "react-native-safe-area-context";

const airlines = [
  "PIA",
  "SALAM AIR",
  "SERENE AIR",
  "AIR ARABIA",
  "AIR SIAL",
  "FLY DUBAI",
  "AIR BLUE",
  "TURKISH AIRLINE",
  "PEGASUS AIRLINE",
  "ETIHAD AIR",
  "EMIRATES",
  "GULF AIR",
  "QATAR AIR",
  "OMAN AIR",
  "BRITISH AIRWAYS",
  "VIRGIN ATLANTIC",
  "KAM AIR",
  "IRAQI AIRWAYS",
  "KLM",
  "MALAYSIA AIRLINES",
  "SINGAPORE AIRLINE",
  "AMERICAN AIRLINE",
  "MALINDO AIR",
  "LANKA AIR",
  "UZBEKISTAN AIRWAYS",
  "JAZEERA AIRLINE",
  "KUWAIT AIRWAYS",
  "AVIA TRAFFIC",
  "FLY BAGHDAD",
];

const AirlineScreen = () => {
  const [Airlines, setAirlines] = useState(airlines);

  const search = (v) => {
    if (v === "" || v === " ") {
      setAirlines(airlines);
      return;
    }

    setAirlines(
      airlines.filter((name) => name.toLowerCase().includes(v.toLowerCase()))
    );
  };

  return (
    <SafeAreaView style={airlineScreenStyles.root}>
      <View style={airlineScreenStyles.top}>
        <Image source={airlinesImage} style={airlineScreenStyles.image} />
        <AppText variant={"h2"} font="Poppins" color={colors.main}>
          APPROVED AIRLINES
        </AppText>
      </View>
      <View style={airlineScreenStyles.searchContainer}>
        <Icon
          style={{ marginHorizontal: 8 }}
          name="search"
          size={25}
          color="black"
        />
        <TextInput
          onChangeText={(text) => {
            search(text);
          }}
          style={airlineScreenStyles.search}
          placeholder="Search..."
        />
      </View>
      <ScrollView contentContainerStyle={airlineScreenStyles.list}>
        {Airlines.map((name) => (
          <View style={airlineScreenStyles.item}>
            <AppText center variant="h6" color="black" font="Poppins">
              {name}
            </AppText>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AirlineScreen;
