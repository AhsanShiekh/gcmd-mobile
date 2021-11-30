import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { colors } from "../../utils/colors";
import AppText from "../AppText/AppText";
import { reportCardStyles } from "./ReportCard.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const ReportCard = ({ data }) => {
  const [pending, setPending] = useState(0);
  const [allPending, setAllPending] = useState(false);
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
      <View style={reportCardStyles.top}>
        <AppText variant="subtitle" font="Poppins" weight="bold">
          {data.PatientOrderNo}
        </AppText>
        {/* <AppText variant="subtitle" font="Poppins" weight="bold">
          NVC0245
        </AppText> */}
      </View>
      <View style={reportCardStyles.line} />
      <View style={reportCardStyles.middleContent}>
        <View style={reportCardStyles.middleTop}>
          <AppText variant="subtitle" font="Poppins" weight="bold">
            {data.PatientName}
          </AppText>
        </View>
        <View style={reportCardStyles.tests}>
          {data.PatientOrderDetails.map((test, i) => (
            <View style={reportCardStyles.test} key={i}>
              <AppText variant="subtitle" font="Poppins" weight="bold">
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
          <AppText variant="subtitle" font="Poppins" weight="bold">
            {data.CreatedOn}
          </AppText>
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
            weight="bold"
          >
            {allPending
              ? "PENDING"
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
