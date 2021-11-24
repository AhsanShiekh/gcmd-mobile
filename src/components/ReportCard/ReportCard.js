import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../utils/colors";
import AppText from "../AppText/AppText";
import { reportCardStyles } from "./ReportCard.styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const ReportCard = () => {
  return (
    <View style={reportCardStyles.root}>
      <View style={reportCardStyles.top}>
        <AppText variant="subtitle" font="Poppins" weight="bold">
          LSO211104135
        </AppText>
        <AppText variant="subtitle" font="Poppins" weight="bold">
          NVC0245
        </AppText>
      </View>
      <View style={reportCardStyles.line} />
      <View style={reportCardStyles.middleContent}>
        <View style={reportCardStyles.middleTop}>
          <AppText variant="subtitle" font="Poppins" weight="bold">
            MUHAMMAD AHSAN
          </AppText>
          <AppText variant="subtitle" font="Poppins" weight="bold">
            EJ1014793
          </AppText>
        </View>
        <View style={reportCardStyles.tests}>
          <View style={reportCardStyles.test}>
            <AppText variant="subtitle" font="Poppins" weight="bold">
              COVID-19 RNA BY PCR (FOR AIR BLUE)
            </AppText>
            <Icon name="file-download-done" size={22} color="#199819" />
          </View>
          <View style={reportCardStyles.test}>
            <AppText variant="subtitle" font="Poppins" weight="bold">
              SPIKE ANTIBODY
            </AppText>
            <Icon name="file-download-done" size={22} color="#199819" />
          </View>
          <View style={reportCardStyles.test}>
            <AppText variant="subtitle" font="Poppins" weight="bold">
              COVID IgM
            </AppText>
            <Icon name="loop" size={22} color="#FFC61B" />
          </View>
        </View>
        <View style={reportCardStyles.middleDown}>
          <AppText variant="subtitle" font="Poppins" weight="bold">
            23-11-2021
          </AppText>
          <AppText
            style={{ alignSelf: "flex-end" }}
            variant="subtitle"
            font="Poppins"
            weight="bold"
            numberOfLines={1}
          >
            ALI HAIDER
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
