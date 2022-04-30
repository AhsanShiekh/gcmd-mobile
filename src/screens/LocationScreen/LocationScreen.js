import React from "react";
import { View, Text, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/AppText/AppText";
import BackHeader from "../../components/BackHeader/BackHeader";
import Hamburger from "../../components/Hamburger/Hamburger";
import { locationScreenStyles } from "./LocationScreen.styles";

const regions = {
  longitude: 74.26995302476377,
  latitude: 31.454618987666365,
};

const LocationScreen = () => {
  return (
    <SafeAreaView style={locationScreenStyles.root}>
      <BackHeader />
      <MapView
        style={locationScreenStyles.map}
        provider={PROVIDER_GOOGLE}
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
    </SafeAreaView>
  );
};

export default LocationScreen;
