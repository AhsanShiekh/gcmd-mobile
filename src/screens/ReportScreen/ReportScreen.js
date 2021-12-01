import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Linking,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import reportScreenStyles from "./ReportScreen.style";
import AppText from "../../components/AppText/AppText";
import Icon from "react-native-vector-icons/FontAwesome";
import PdfReader from "rn-pdf-reader-js";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { useFocusEffect } from "@react-navigation/core";

const ReportScreen = ({ route, navigation }) => {
  const [loading, showLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const PDFURL = `http://eerp.genomelabs.com.pk/print/GetReport/${route.params.id}`;

  useEffect(() => {
    showLoading(true);
  }, [route]);

  const downloadFile = () => {
    Linking.openURL(PDFURL);
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Reports");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const share = () => {
    setShareLoading(true);
    let fileUri =
      FileSystem.documentDirectory + `${route.params.name}_report.pdf`;
    FileSystem.downloadAsync(PDFURL, fileUri)
      .then(({ uri }) => {
        Sharing.shareAsync(uri);
        setShareLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setShareLoading(false);
      });
  };

  return (
    <View style={reportScreenStyles.root}>
      {!loading ? (
        <View style={reportScreenStyles.bottom}>
          <TouchableWithoutFeedback onPress={downloadFile}>
            <View style={reportScreenStyles.download}>
              <Icon name="download" size={20} color="white" />
              <AppText color="white" variant="subtitle" font="Raleway">
                DOWNLOAD
              </AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={share}>
            <View style={reportScreenStyles.share}>
              <Icon name="share" size={20} color="white" />
              <AppText color="white" variant="subtitle" font="Raleway">
                SHARE
              </AppText>
              {shareLoading && <ActivityIndicator size="small" color="white" />}
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : null}

      <View style={reportScreenStyles.pdf}>
        <PdfReader
          onLoad={() => {
            showLoading(false);
          }}
          withScroll={true}
          withPinchZoom={true}
          source={{
            uri: PDFURL,
          }}
          customStyle={{
            readerContainer: { backgroundColor: "#F3F0F0" },
            readerContainerDocument: {
              backgroundColor: "#F3F0F0",
              height: "100%",
            },
            readerContainerZoomContainer: { display: "none" },
            readerContainerNavigate: {
              backgroundColor: "#F3F0F0",
            },
            readerContainerNavigateArrow: { color: "#F3F0F0" },
          }}
        />
        {loading ? (
          <View
            style={{
              width: "100%",
              position: "absolute",
              top: "40%",
              zIndex: 10,
            }}
          >
            <ActivityIndicator size="large" color="black" />
            <AppText variant="h6" center>
              {`Loading ${route.params.name.split(" ")[0]}'s Report`}
            </AppText>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default ReportScreen;
