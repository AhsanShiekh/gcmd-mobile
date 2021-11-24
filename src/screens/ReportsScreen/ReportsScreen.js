import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { reportScreenStyles } from "./ReportsScreen.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppText from "../../components/AppText/AppText";
import AppDatePicker from "../../components/DatePicker/DatePicker";
import { TextInput } from "react-native-gesture-handler";
import ReportCard from "../../components/ReportCard/ReportCard";

const ReportsScreen = ({ navigation }) => {
  return (
    <View style={reportScreenStyles.root}>
      <View style={reportScreenStyles.top}>
        <View style={reportScreenStyles.header}>
          <Icon
            name="arrow-back"
            size={30}
            color="white"
            style={{ marginLeft: 20, marginRight: 10, marginBottom: 5 }}
            onPress={() => navigation.goBack()}
          />
          <AppText variant="h4" color="white" font="Poppins">
            REPORTS
          </AppText>
        </View>
        <View style={reportScreenStyles.topContent}>
          <View style={reportScreenStyles.dates}>
            <View style={reportScreenStyles.date}>
              <AppText variant="h6" color="lightgrey" font="Poppins" center>
                FROM
              </AppText>
              <AppDatePicker />
            </View>
            <View style={reportScreenStyles.date}>
              <AppText variant="h6" color="lightgrey" font="Poppins" center>
                TO
              </AppText>
              <AppDatePicker />
            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#20AE20",
                color: "white",
                height: 33,
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
                marginHorizontal: "30%",
                borderRadius: 8,
              }}
            >
              <AppText variant="h6" color="white" font="Poppins">
                LOAD
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={reportScreenStyles.searchContainer}>
        <Icon
          style={{ marginHorizontal: 8 }}
          name="search"
          size={25}
          color="#808080"
        />
        <TextInput style={reportScreenStyles.search} placeholder="Search..." />
      </View>

      <ScrollView style={reportScreenStyles.reportsContainer}>
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </ScrollView>
    </View>
  );
};

export default ReportsScreen;
