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
  // const getStyle = (v) => {
  //     if(v === "h1")
  //         return "h1";
  // }

  // const styles = getStyle(variant);

  return (
    <Text
      style={{
        color: color,
        fontFamily: font,
        fontWeight: weight || "normal",
        textAlign: center ? "center" : "left",
        ...style,
        ...AppTextStyles[variant],
      }}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
