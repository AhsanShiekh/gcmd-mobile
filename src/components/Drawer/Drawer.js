import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { drawerStyles } from "./Drawer.styles";
import logo from "../../../assets/main-logo.png";
import AppText from "../AppText/AppText";
import doctors from "../../../assets/doctors.png";
import certificates from "../../../assets/certificates.png";
import location from "../../../assets/location.png";
import timing from "../../../assets/timing.png";
import about from "../../../assets/about.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import home from "../../../assets/home.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { setCurrentUser } from "../../redux/actions/user.action";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawer = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(setCurrentUser(null));
    await AsyncStorage.removeItem("user");
    navigation.navigate("Message", {
      title: "Logged Out!",
      message: "You are now using as GUEST.",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={drawerStyles.top}>
        <Image source={logo} style={drawerStyles.logo} />

        <View>
          <AppText style={{ textAlign: "center" }} font="Raleway" variant="h4">
            WELCOME!
          </AppText>
          <AppText
            font="Raleway"
            style={{ textAlign: "center" }}
            variant="h3"
            numberOfLines={1}
          >
            {currentUser ? currentUser.UserName : "GUEST"}
          </AppText>
        </View>
      </View>
      <View style={drawerStyles.seprator} />

      <DrawerContentScrollView style={drawerStyles.root} {...props}>
        <View style={drawerStyles.middle}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Welcome")}
            style={{ width: "100%" }}
          >
            <View style={drawerStyles.option}>
              <Image source={home} style={drawerStyles.optionImage} />
              <AppText variant="h6" font="Poppins">
                HOME
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Doctors")}
            style={{ width: "100%" }}
          >
            <View style={drawerStyles.option}>
              <Image source={doctors} style={drawerStyles.optionImage} />
              <AppText variant="h6" font="Poppins">
                DOCTORS
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Certificates")}
            style={{ width: "100%" }}
          >
            <View style={drawerStyles.option}>
              <Image source={certificates} style={drawerStyles.optionImage} />
              <AppText variant="h6" font="Poppins">
                CERTIFICATES
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Location")}
            style={{ width: "100%" }}
          >
            <View style={drawerStyles.option}>
              <Image source={location} style={drawerStyles.optionImage} />
              <AppText variant="h6" font="Poppins">
                LOCATION
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Timings")}
            style={{ width: "100%" }}
          >
            <View style={drawerStyles.option}>
              <Image source={timing} style={drawerStyles.optionImage} />
              <AppText variant="h6" font="Poppins">
                TIMINGS
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("About")}
            style={{ width: "100%" }}
          >
            <View style={drawerStyles.option}>
              <Image source={about} style={drawerStyles.optionImage} />
              <AppText variant="h6" font="Poppins">
                ABOUT US
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={currentUser ? logout : () => navigation.navigate("LogIn")}
        style={drawerStyles.bottomContainer}
      >
        <View style={drawerStyles.bottom}>
          <Icon
            name="logout"
            size={40}
            color="white"
            style={
              {
                // marginHorizontal: 20,
              }
            }
          />
          <AppText color="white" variant="h6" font="Poppins">
            {currentUser ? "LOG OUT" : "LOG IN"}
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
