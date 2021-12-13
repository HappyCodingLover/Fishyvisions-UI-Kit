import React from "react";
import PropTypes from "prop-types";
import { View, Text as RNText } from "react-native";
import styled from "styled-components/native";
import { css, cx } from "@emotion/css";

export const Text = ({
  size,
  children,
  fontWeight,
  fontFamily,
  color,
  underline,
  italic,
  fontSize,
  ...props
}) => {
  const textStyleClass = css`
    font-weight: ${fontWeight};
    font-family: ${fontFamily && `${fontFamily}, sans-serif `};
    color: ${color};
    font-size: ${fontSize};
  `;
  let textClass = cx(
    `text-text_${size} `,
    `leading-text_${!fontSize && size}`,
    textStyleClass,
    {
      underline: underline,
    },
    {
      italic: italic,
    }
  );
  const Container = styled.View`
    ${textClass}
  `;
  return (
    <Container>
      <RNText>{children}</RNText>
    </Container>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small", "tiny"]),
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  fontSize: PropTypes.string,
};

Text.defaultProps = {
  fontWeight: "normal",
  size: "medium",
  underline: false,
  italic: false,
};
