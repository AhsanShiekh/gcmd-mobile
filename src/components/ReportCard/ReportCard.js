import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../utils/colors";
import AppText from "../AppText/AppText";
import { reportCardStyles } from "./ReportCard.styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const ReportCard = ({ data }) => {
  return (
    <View style={reportCardStyles.root}>
      <View style={reportCardStyles.top}>
        <AppText variant="subtitle" font="Poppins" weight="bold">
          {data.PatientNo}
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
        <AppText variant="h6" color={colors.main} font="Poppins" weight="bold">
          VIEW VERIFIED RESULTS
        </AppText>
      </View>
    </View>
  );
};

export default ReportCard;
