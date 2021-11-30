import React from "react";
import { View, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import AppText from "../../components/AppText/AppText";
import Hamburger from "../../components/Hamburger/Hamburger";
import { locationScreenStyles } from "./LocationScreen.styles";

const regions = {
  longitude: 74.26995302476377,
  latitude: 31.454618987666365,
};

const LocationScreen = () => {
  return (
    <View style={locationScreenStyles.root}>
      <View style={locationScreenStyles.top}>
        <Hamburger invert />
        <AppText variant="h4" color="black" font="Poppins">
          LOCATION
        </AppText>
      </View>
      <MapView
        style={locationScreenStyles.map}
        region={{
          longitude: 74.26908,
          latitude: 31.45403,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <Marker title="GENOME CENTER LAHORE" coordinate={regions}></Marker>
      </MapView>
      <View style={locationScreenStyles.bottom}>
        <AppText
          variant="subtitle"
          font="Poppins"
          center
          weight="bold"
          color="white"
        >
          GENOME CENTER LAHORE, CL 25 Shaukat Kahnum Road, Block B Abdalians
          Cooperative Housing Society, Lahore
        </AppText>
      </View>
    </View>
  );
};

export default LocationScreen;
