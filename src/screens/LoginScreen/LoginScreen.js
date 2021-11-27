import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import background from "../../../assets/login-bg.png";
import logo from "../../../assets/main-logo.png";
import AppText from "../../components/AppText/AppText";
import { LoginScreenStyles } from "./LoginScreen.styles";
import AppInput from "../../components/AppInput/AppInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/core";
import { ActivityIndicator } from "react-native-paper";
import { logIn } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/actions/user.action";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../utils/colors";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!userName || !password) {
      setError(true);
      return;
    }
    setError(false);

    setLoading(true);
    const user = await logIn(userName, password);
    setLoading(false);

    if (!user.Validate) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(setCurrentUser({ ...user.Data, software: user.software }));

    navigation.navigate("Message", {
      message: `You are now Logged In as ${user.Data.UserName}`,
      title: "Success!",
    });
  };

  useEffect(() => {
    return () => {
      setUserName("");
      setPassword("");
      setError(false);
    };
  }, []);

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{ height: "100%", width: "100%" }}
    >
      <View style={LoginScreenStyles.root}>
        <LinearGradient
          colors={[colors.main, "white", colors.main]}
          style={LoginScreenStyles.logoTextContainer}
          locations={[0.2, 0.4, 1]}
        >
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
        </LinearGradient>
        <View style={LoginScreenStyles.formContainer}>
          <AppInput
            label="Username"
            value={userName}
            onChange={(v) => setUserName(v)}
            error={error}
          />
          <AppInput
            label="Password"
            password
            value={password}
            onChange={(v) => setPassword(v)}
            error={error}
          />
          <View style={LoginScreenStyles.proceedButton}>
            {!loading ? (
              <TouchableOpacity
                onPress={handleLogin}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="arrow-forward" color="white" size={40} />
              </TouchableOpacity>
            ) : (
              <ActivityIndicator size="small" color="#fff" />
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
