import React from "react";
import { Text } from "react-native";
import { AppTextStyles } from "./AppText.styles";

const AppText = ({
  text,
  variant,
  color,
  weight,
  font,
  children,
  style,
  center,
  ...otherProps
}) => {
  return (
    <Text
      style={{
        color: color,
        fontFamily: font,
        fontWeight: weight || "normal",
        textAlign: center ? "center" : "left",
        ...AppTextStyles[variant],
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
