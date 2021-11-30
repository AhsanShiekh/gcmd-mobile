import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Linking,
  ActivityIndicator,
} from "react-native";
import reportScreenStyles from "./ReportScreen.style";
import AppText from "../../components/AppText/AppText";
import Icon from "react-native-vector-icons/MaterialIcons";
import PdfReader from "rn-pdf-reader-js";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

const ReportScreen = ({ route }) => {
  const [loading, showLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const PDFURL = `http://eerp.genomelabs.com.pk/print/GetReport/${route.params.id}`;

  useEffect(() => {
    showLoading(!loading);
  }, [route]);

  const downloadFile = () => {
    Linking.openURL(PDFURL);
  };

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
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "lightgrey",
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
      {!loading ? (
        <View style={reportScreenStyles.bottom}>
          <TouchableWithoutFeedback onPress={downloadFile}>
            <View style={reportScreenStyles.download}>
              <Icon name="save" size={35} color="white" />
              <AppText color="white" variant="h5" font="Raleway">
                DOWNLOAD
              </AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={share}>
            <View style={reportScreenStyles.share}>
              <Icon name="share" size={35} color="white" />
              <AppText color="white" variant="h5" font="Raleway">
                SHARE
              </AppText>
              {shareLoading && <ActivityIndicator size="small" color="white" />}
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : null}
    </View>
  );
};

export default ReportScreen;
