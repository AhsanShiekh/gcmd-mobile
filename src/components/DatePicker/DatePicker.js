import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DatePicker from "react-native-neat-date-picker";
import AppText from "../AppText/AppText";

const today = new Date();
const currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const AppDatePicker = ({ value, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(currentDate);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false);

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    onChange(date);
  };

  return (
    <View>
      <TouchableOpacity onPress={openDatePicker}>
        <View
          style={{
            backgroundColor: "white",
            color: "black",
            height: 33,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            borderRadius: 8,
          }}
        >
          <AppText variant="h6">{value}</AppText>
        </View>
      </TouchableOpacity>
      <DatePicker
        isVisible={showDatePicker}
        mode={"single"}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </View>
  );
};

export default AppDatePicker;
