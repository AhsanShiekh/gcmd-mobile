import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { reportScreenStyles } from "./ReportsScreen.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppText from "../../components/AppText/AppText";
import AppDatePicker from "../../components/DatePicker/DatePicker";
import { TextInput } from "react-native-gesture-handler";
import ReportCard from "../../components/ReportCard/ReportCard";
import { useDispatch, useSelector } from "react-redux";
import AnimatedLoader from "react-native-animated-loader";
import { getReports } from "../../api/reports";
import { setReports } from "../../redux/actions/reports.actions";
import notFound from "../../../assets/not-found.png";
import { useIsFocused } from "@react-navigation/core";

const today = new Date();
const currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const ReportsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, settoDate] = useState(currentDate);
  const [AppReports, setAppReports] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const currentReports = useSelector((state) => state.reports.reports);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const getData = async () => {
    setLoading(true);
    const reports = await getReports(
      currentUser.software,
      currentUser.PatientId,
      currentUser.PartyLocationId,
      fromDate,
      toDate
    );
    dispatch(setReports(reports.Data.PatientOrders));
    setAppReports(reports.Data.PatientOrders);
    setLoading(false);
  };

  const search = (text) => {
    if (text === "") {
      setAppReports(currentReports);
      setSearchLoading(false);
      return;
    }

    setSearchLoading(true);
    const filteredReports = currentReports.filter(
      (report) =>
        report.PatientName.toLowerCase().includes(text.toLowerCase()) ||
        report.PatientOrderNo.toString()
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        report.PatientOrderDetails[0].ServiceName.toLowerCase().includes(
          text.toLowerCase()
        )
    );
    setAppReports(filteredReports);
    setSearchLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return (
    <View style={reportScreenStyles.root}>
      <View style={reportScreenStyles.top}>
        <View style={reportScreenStyles.header}>
          <Icon
            name="arrow-back"
            size={25}
            color="white"
            style={{ marginLeft: 20, marginRight: 10, marginBottom: 5 }}
            onPress={() => navigation.goBack()}
          />
          <AppText variant="h5" color="white" font="Poppins">
            REPORTS
          </AppText>
        </View>
        <View style={reportScreenStyles.topContent}>
          <View style={reportScreenStyles.dates}>
            <View style={reportScreenStyles.date}>
              <AppText
                variant="subtitle"
                color="lightgrey"
                font="Poppins"
                center
              >
                FROM
              </AppText>
              <AppDatePicker
                value={fromDate}
                onChange={(date) =>
                  setFromDate(
                    `${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`
                  )
                }
              />
            </View>
            <View style={reportScreenStyles.date}>
              <AppText
                variant="subtitle"
                color="lightgrey"
                font="Poppins"
                center
              >
                TO
              </AppText>
              <AppDatePicker
                value={toDate}
                onChange={(date) =>
                  settoDate(
                    `${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`
                  )
                }
              />
            </View>
          </View>

          <TouchableOpacity onPress={() => getData()}>
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
                marginTop: 15,
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
        {!searchLoading ? (
          <Icon
            style={{ marginHorizontal: 8 }}
            name="search"
            size={25}
            color="#808080"
          />
        ) : (
          <ActivityIndicator
            size="small"
            color="#808080"
            style={{ marginHorizontal: 8 }}
          />
        )}
        <TextInput
          onChangeText={search}
          style={reportScreenStyles.search}
          placeholder="Search..."
        />
      </View>

      <AppText
        variant="subtitle"
        color="#808080"
        center
        style={{ marginVertical: 5 }}
      >
        {AppReports.length} Results
      </AppText>

      {!loading ? (
        <ScrollView style={reportScreenStyles.reportsContainer}>
          {AppReports.length ? (
            AppReports.map((report, i) => <ReportCard data={report} key={i} />)
          ) : (
            <View style={reportScreenStyles.noReports}>
              <Image source={notFound} style={{ height: 200, width: 200 }} />
              <AppText variant="h4" center>
                Oops! No Reports Found...
              </AppText>
            </View>
          )}
        </ScrollView>
      ) : (
        <View style={reportScreenStyles.loaderContainer}>
          <AnimatedLoader
            visible={true}
            // overlayColor="rgba(255,255,255,0.75)"
            source={require("./loader.json")}
            animationStyle={reportScreenStyles.loader}
            speed={1}
          >
            <AppText>Fetching Your Reports...</AppText>
          </AnimatedLoader>
        </View>
      )}
    </View>
  );
};

export default ReportsScreen;
