import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import tw from "tailwind-react-native-classnames";
import styled from "styled-components/native";

export const Button = ({
  label,
  color,
  bgColor,
  borderStyle,
  borderType,
  size,
  style,
  icon,
  iconAlign,
  children,
  ...props
}) => {
  const borderColor = bgColor;
  const ButtonContainer = styled.TouchableOpacity`
    flex: 1;
    background-color: ${bgColor};
    align-items: center;
    justify-content: center;
    border-color: ${borderColor};
    border-style: ${borderStyle};
    padding: ${size === "small"
      ? "10px"
      : size === "medium"
      ? "14px"
      : size === "large"
      ? "18px"
      : size === "wide" && "14px"};
  `;
  const Image = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
  `;
  const IconImage = styled.Image`
    ${label || (children && icon && iconAlign === "left")
      ? "pr-2.5"
      : icon && iconAlign === "right"
      ? "pl-2.5"
      : ""}
  `;
  return (
    <ButtonContainer {...props}>
      {icon && iconAlign === "left" && <Image source={icon} />}
      {<Text>{label}</Text> || children}
      {icon && iconAlign === "right" && <IconImage source={icon} />}
    </ButtonContainer>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderStyle: PropTypes.oneOf(["solid", "dashed", "dotted", "double", "none"]),
  borderType: PropTypes.oneOf(["default", "rounded", "none", "circular"]),
  size: PropTypes.oneOf(["small", "medium", "large", "wide"]),
  label: PropTypes.string,
};

Button.defaultProps = {
  bgColor: "#610BEF",
  color: "red",
  borderStyle: "dashed",
  borderType: "default",
  size: "medium",
};
