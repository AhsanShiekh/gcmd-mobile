import React from "react";
import { View, Text, Image } from "react-native";
import { messageScreenStyles } from "./MessageScreen.styles";
import AppText from "../../components/AppText/AppText";
import done from "../../../assets/done.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={messageScreenStyles.root}>
      <View style={messageScreenStyles.content}>
        <Image source={done} style={messageScreenStyles.image} />
        <View style={messageScreenStyles.textContainer}>
          <AppText variant="h2" center>
            {route.params.title}
          </AppText>
          <AppText variant="h5" center>
            {route.params.message}
          </AppText>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <View style={messageScreenStyles.proceedButton}>
            <Icon name="arrow-forward" color="white" size={38} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
