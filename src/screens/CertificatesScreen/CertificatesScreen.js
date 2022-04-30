import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import { certificatesScreenStyles } from "./CertificatesScreen.styles";
import main from "../../../assets/certificates.png";
import AppText from "../../components/AppText/AppText";
import { colors } from "../../utils/colors";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import cer1 from "../../../assets/certificates/1.png";
import cer2 from "../../../assets/certificates/2.png";
import cer3 from "../../../assets/certificates/3.png";
import cer4 from "../../../assets/certificates/4.png";
import cer5 from "../../../assets/certificates/6.png";
import cer6 from "../../../assets/certificates/7.png";
import cer7 from "../../../assets/certificates/9.png";
import cer8 from "../../../assets/certificates/12.png";
import cer9 from "../../../assets/certificates/13.png";
import cer10 from "../../../assets/certificates/14.png";
import cer11 from "../../../assets/certificates/15.png";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeader from "../../components/BackHeader/BackHeader";

const CertificatesScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <SafeAreaView style={certificatesScreenStyles.root}>
      <BackHeader />
      <View style={certificatesScreenStyles.top}>
        <Image source={main} style={certificatesScreenStyles.mainImg} />
        <AppText variant={"h3"} font={"Raleway"} center color={colors.main}>
          CERTIFICATES
        </AppText>
        <AppText
          variant={"subtitle"}
          font={"Raleway"}
          center
          color={colors.main}
        >
          DON'T TAKE OUR WORD FOR IT.
        </AppText>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <View style={certificatesScreenStyles.cerImgRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer1);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer1} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer2);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer2} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={certificatesScreenStyles.cerImgRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer3);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer3} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer4);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer4} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={certificatesScreenStyles.cerImgRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer5);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer5} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer6);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer6} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={certificatesScreenStyles.cerImgRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer7);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer7} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer8);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer8} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={certificatesScreenStyles.cerImgRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer9);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer9} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer10);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer10} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={certificatesScreenStyles.cerImgRow}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrentImage(cer11);
              setIsModalVisible(true);
            }}
            style={{ backgroundColor: "white", elevation: 10 }}
          >
            <View style={certificatesScreenStyles.cerImgCon}>
              <Image source={cer11} style={certificatesScreenStyles.cerImg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        style={certificatesScreenStyles.modal}
        onBackButtonPress={() => setIsModalVisible(false)}
        backdropOpacity={1}
        onBackdropPress={() => setIsModalVisible(false)}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
      >
        <Image
          source={currentImage}
          style={{
            // height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            alignSelf: "flex-start",
            position: "absolute",
            left: 0,
          }}
          resizeMode="contain"
        />
        {Platform.OS === "ios" ? (
          <TouchableWithoutFeedback
            style={{
              marginTop: "180%",
              alignSelf: "center",
            }}
            onPress={() => setIsModalVisible(false)}
          >
            <AppText variant="h6" color={"white"} weight={"bold"}>
              GO Back
            </AppText>
          </TouchableWithoutFeedback>
        ) : null}
      </Modal>
    </SafeAreaView>
  );
};

export default CertificatesScreen;
