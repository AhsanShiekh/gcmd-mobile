import React, { useEffect, useState } from "react";
import { View, Text, ToastAndroid, Platform, Alert } from "react-native";
import { colors } from "../../utils/colors";
import AppText from "../AppText/AppText";
import { reportCardStyles } from "./ReportCard.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import * as Clipboard from "expo-clipboard";
import CommentModal from "../CommentModal/CommentModal";

const ReportCard = ({ data }) => {
  const [pending, setPending] = useState(0);
  const [allPending, setAllPending] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const navigation = useNavigation();

  const status = () => {
    const pendingResults = data.PatientOrderDetails.filter(
      (test) => test.Status !== "Reverfied"
    );
    setAllPending(
      pendingResults.length === data.PatientOrderDetails.length ? true : false
    );
  };

  useEffect(() => {
    status();

    return () => setPending(0);
  }, [data]);

  return (
    <View style={reportCardStyles.root}>
      <CommentModal
        show={showCommentModal}
        onClose={() => setShowCommentModal(false)}
        data={commentData}
      />
      <View style={reportCardStyles.top}>
        <AppText variant="subtitle" font="Poppins">
          {data.PatientOrderNo}
        </AppText>
        <TouchableOpacity
          onPress={() => {
            Clipboard.setString(data.PatientOrderNo);

            if (Platform.OS === "android") {
              ToastAndroid.show(
                "Lab No Copied To Clipboard!",
                ToastAndroid.SHORT
              );
            } else {
              Alert.alert("Lab Number Copied!");
            }
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="content-copy" size={17} color={"darkgrey"} />
            <AppText variant="subtitle" font="Poppins" color="darkgrey">
              Copy
            </AppText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={reportCardStyles.line} />
      <View style={reportCardStyles.middleContent}>
        <View style={reportCardStyles.middleTop}>
          <AppText
            variant="subtitle"
            font="Poppins"
            weight="bold"
            color={"#052C66"}
          >
            {data.PatientName}
          </AppText>

          {data.InternalRefNo ? (
            <AppText
              variant="subtitle"
              font="Poppins"
              weight="bold"
              color={"#000"}
            >
              {data.InternalRefNo}
            </AppText>
          ) : null}
        </View>
        <View style={reportCardStyles.tests}>
          {data.PatientOrderDetails.map((test, i) => (
            <View style={reportCardStyles.test} key={i}>
              <AppText
                variant="subtitle"
                font="Poppins"
                color={"black"}
                numberOfLines={1}
                style={{ width: "90%" }}
              >
                {test.ServiceName}
              </AppText>
              <Icon
                name={
                  test.Status === "Reverfied" ? "file-download-done" : "loop"
                }
                size={22}
                color={test.Status === "Reverfied" ? "#199819" : "#EFBA19"}
              />
            </View>
          ))}
        </View>
        <View style={reportCardStyles.middleDown}>
          <AppText variant="subtitle" font="Poppins">
            {data.CreatedOn}
          </AppText>
          {data.AlertList.length ? (
            <TouchableOpacity
              onPress={() => {
                setCommentData(data.AlertList);
                setShowCommentModal(true);
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AppText
                  variant="subtitle"
                  font="Poppins"
                  color={"red"}
                  style={{ textDecorationLine: "underline", marginTop: 5 }}
                >
                  See Comments
                </AppText>
                <Icon
                  style={{ marginLeft: 10, color: "#EFBA19" }}
                  size={22}
                  name="notifications"
                />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View style={reportCardStyles.line} />
      <View style={reportCardStyles.bottom}>
        <TouchableOpacity
          onPress={
            !allPending
              ? () =>
                  navigation.navigate("Report", {
                    id: data.PatientOrderId,
                    name: data.PatientName,
                  })
              : null
          }
        >
          <AppText
            variant="h6"
            color={allPending ? "#EFBA19" : colors.main}
            font="Poppins"
          >
            {allPending
              ? "TEST IN PROCESS"
              : pending === 0
              ? "VIEW REPORT"
              : "VIEW VERIFIED RESULTS"}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportCard;
