import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { feedbackScreenStyles } from "./FeedbackScreen.styles";
import main from "../../../assets/feedback.png";
import AppText from "../../components/AppText/AppText";
import { colors } from "../../utils/colors";
import AppInput from "../../components/AppInput/AppInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeader from "../../components/BackHeader/BackHeader";

const FeedbackScreen = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const send = async () => {
    if (!name || !message || !email) {
      setError(true);
      return;
    }
    setError(false);
    setShowLoading(true);

    await axios.post("https://gcmd-mobile-mail-sender.herokuapp.com/api/mail", {
      name,
      email,
      message,
    });
    setShowLoading(false);
    ToastAndroid.show("THANK YOU FOR YOUR FEEDBACK!", ToastAndroid.SHORT);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <SafeAreaView style={feedbackScreenStyles.root}>
      <BackHeader />
      <View style={feedbackScreenStyles.top}>
        <Image source={main} style={feedbackScreenStyles.img} />
        <AppText variant={"h3"} font={"Raleway"} color={colors.main} center>
          FEEDBACK
        </AppText>
        <AppText
          variant={"subtitile"}
          font={"Raleway"}
          color={colors.main}
          center
        >
          WE LOVE TO HEAR FROM YOU.
        </AppText>
      </View>
      <View style={feedbackScreenStyles.form}>
        <AppInput
          value={name}
          onChange={(t) => setName(t)}
          label={"Name"}
          error={error}
          type={"outlined"}
          width={"90%"}
        />
        <AppInput
          value={email}
          onChange={(t) => setEmail(t)}
          label={"Email"}
          error={error}
          type={"outlined"}
          width={"90%"}
        />
        <AppInput
          label="Message"
          multiline={true}
          numberOfLines={5}
          width={"90%"}
          error={error}
          value={message}
          type={"outlined"}
          onChange={(t) => setMessage(t)}
        />

        <TouchableOpacity onPress={send} style={{ alignSelf: "flex-end" }}>
          <View style={feedbackScreenStyles.button}>
            {showLoading ? (
              <ActivityIndicator color="white" size={30} />
            ) : (
              <Icon name="arrow-forward" size={30} color="white" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FeedbackScreen;
