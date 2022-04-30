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
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeader from "../../components/BackHeader/BackHeader";

const ReportScreen = ({ route, navigation }) => {
  const [loading, showLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [fileUri, setFileUri] = useState("");

  const currentUser = useSelector((state) => state.user.currentUser);

  const PDFURL =
    currentUser.software === "81"
      ? `http://erp.genomelabs.com.pk:91/print/GetReport/${route.params.id}/`
      : `http://eerp.genomelabs.com.pk/print/GetReport/${route.params.id}/`;

  const setFile = async () => {
    showLoading(true);
    let fileUri = FileSystem.cacheDirectory;
    console.log(fileUri);
    FileSystem.downloadAsync(PDFURL, `${fileUri}report.pdf`)
      .then(({ uri }) => {
        console.log(uri);
        setFileUri(uri);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setFile();
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
    Sharing.shareAsync(fileUri);
  };

  return (
    <SafeAreaView style={reportScreenStyles.root}>
      {!loading ? (
        <>
          <BackHeader />
          <View style={reportScreenStyles.bottom}>
            <TouchableWithoutFeedback onPress={downloadFile}>
              <View style={reportScreenStyles.download}>
                <Icon name="download" size={20} color="white" />
                <AppText color="white" variant="subtitle" font="Raleway">
                  DOWNLOAD
                </AppText>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                share();
                console.log(fileUri);
              }}
            >
              <View style={reportScreenStyles.share}>
                <Icon name="share" size={20} color="white" />
                <AppText color="white" variant="subtitle" font="Raleway">
                  SHARE
                </AppText>
                {shareLoading && (
                  <ActivityIndicator size="small" color="white" />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      ) : null}

      <View style={reportScreenStyles.pdf}>
        <PdfReader
          onLoad={() => {
            showLoading(false);
          }}
          withScroll={true}
          withPinchZoom={true}
          noLoader
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
              height: "100%",
            }}
          >
            <ActivityIndicator size="large" color="black" />
            <AppText variant="h6" center>
              {!currentUser.PatientId
                ? `Loading ${route.params.name.split(" ")[0]}'s Report`
                : "Loading Your Report"}
            </AppText>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default ReportScreen;
