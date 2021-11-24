import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { hamburgerStyles } from "./Hamburger.styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Hamburger = ({ invert }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={hamburgerStyles.root}>
      <TouchableOpacity
        onPress={handlePress}
        style={{ height: "100%", width: "100%" }}
      >
        <Icon name="bars" color={invert ? "black" : "white"} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Hamburger;
