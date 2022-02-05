import React, { useEffect, useState } from "react";
import { View, Image, TextInput, ActivityIndicator } from "react-native";
import { servicesScreenStyles } from "./ServicesScreen.styles";
import testsImg from "../../../assets/tests.png";
import AppText from "../../components/AppText/AppText";
import { colors } from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTests } from "../../redux/actions/reports.actions";
import { SafeAreaView } from "react-native-safe-area-context";

const ServicesScreen = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [labTests, setLabTests] = useState([]);

  const tests = useSelector((state) => state.reports.tests);
  const dispatch = useDispatch();

  const getdata = async () => {
    setShowLoading(true);
    const res = await axios.get(
      "http://erp.genomelabs.com.pk:91/api/ERP/DIMS/TestListForLab"
    );
    setLabTests(res.data.Data.Services);
    dispatch(setTests(res.data.Data.Services));
    setShowLoading(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  const search = (text) => {
    if (text === "" || text === " ") {
      setLabTests(tests);
      return;
    }

    const filteredTests = tests.filter((test) =>
      test.TESTNAME.toLowerCase().includes(text.toLowerCase())
    );
    setLabTests(filteredTests);
  };

  return (
    <SafeAreaView style={servicesScreenStyles.root}>
      <View style={servicesScreenStyles.top}>
        <Image source={testsImg} style={servicesScreenStyles.image} />
        <AppText variant={"h3"} color={colors.main} center font={"Raleway"}>
          TESTS LIST
        </AppText>
      </View>
      <View style={servicesScreenStyles.searchContainer}>
        <Icon
          style={{ marginHorizontal: 8 }}
          name="search"
          size={25}
          color="black"
        />
        <TextInput
          onChangeText={(text) => {
            search(text);
          }}
          style={servicesScreenStyles.search}
          placeholder="Search..."
        />
      </View>
      <ScrollView style={servicesScreenStyles.tests}>
        {!showLoading ? (
          labTests.map((test, i) => (
            <ServiceCard
              name={test.TESTNAME}
              type={test.SPECIMEN}
              price={test.PRICE}
              reportTime={test.ReportTime}
              key={i}
            />
          ))
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator
              color={colors.main}
              size={50}
              style={{ marginTop: "40%" }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServicesScreen;
