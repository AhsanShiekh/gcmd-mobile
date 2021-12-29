import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-vector-icons/MaterialIcons";
import { AppInputStyles } from "./AppInput.styles";
import { colors } from "../../utils/colors";
import { Value } from "react-native-reanimated";

const AppInput = ({
  password,
  label,
  onChange,
  error,
  value,
  width,
  style,
  type,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextInput
      label={label}
      onChangeText={onChange}
      secureTextEntry={!showPassword && password ? true : false}
      style={{ width: width || "100%", style, ...AppInputStyles.root }}
      right={
        password ? (
          <TextInput.Icon
            onPress={() => setShowPassword(!showPassword)}
            name={showPassword ? "eye-off" : "eye"}
          />
        ) : null
      }
      placeholderTextColor={colors.main}
      selectionColor={colors.main}
      activeOutlineColor={colors.main}
      activeUnderlineColor={colors.main}
      outlineColor="black"
      underlineColor="black"
      error={error}
      value={value}
      scrollEnabled={true}
      type={type || "flat"}
      {...otherProps}
    />
  );
};

export default AppInput;
