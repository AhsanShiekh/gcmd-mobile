import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const BackHeader = () => {
  const navigation = useNavigation();
  return (
    <>
      {Platform.OS === "ios" ? (
        <View style={styles.root}>
          <Icon
            name="arrow-back"
            size={25}
            color="white"
            style={{ marginLeft: 20 }}
            onPress={() => navigation.goBack()}
          />
        </View>
      ) : null}
    </>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#36A0D0",
  },
});
