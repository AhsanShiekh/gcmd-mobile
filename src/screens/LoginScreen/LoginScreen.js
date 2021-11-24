import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import background from "../../../assets/login-bg.png";
import logo from "../../../assets/main-logo.jpg";
import AppText from "../../components/AppText/AppText";
import { LoginScreenStyles } from "./LoginScreen.styles";
import AppInput from "../../components/AppInput/AppInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{ height: "100%", width: "100%" }}
    >
      <View style={LoginScreenStyles.root}>
        <View style={LoginScreenStyles.logoTextContainer}>
          <Image
            resizeMode="cover"
            source={logo}
            style={LoginScreenStyles.logo}
          />
          <AppText variant="h2" font="Raleway" color="white">
            GENOME CENTER
          </AppText>
          <AppText variant="subtitle" font="Raleway" color="white">
            LOG IN TO PROCEED
          </AppText>
        </View>
        <View style={LoginScreenStyles.formContainer}>
          <AppInput label="Username" />
          <AppInput label="Password" password />
          <View style={LoginScreenStyles.proceedButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Welcome")}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="arrow-forward" color="white" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
