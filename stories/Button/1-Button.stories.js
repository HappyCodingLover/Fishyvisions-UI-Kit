import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { Button } from "./Button";
import styled from "styled-components/native";
import ButtonIconDefalut from "../../assets/Button/button.svg";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Primary = (args) => <Template {...args} />;
Primary.args = {
  label: "Primary Button",
  color: "lightgrey",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "With Icon",
  icon: ButtonIconDefalut,
  onClick: () => alert("hello"),
};

const StyledButton = styled.TouchableOpacity`
  background-color: red;
  padding: 3px;
`;

const StyledText = styled.Text`
  color: white;
`;

export const text = () => (
  <Button label="Hello Button" onPress={action("clicked")} />
);
export const styledComponent = () => (
  <StyledButton onPress={action("clicked")}>
    <StyledText>Hello Button</StyledText>
  </StyledButton>
);
export const red = () => (
  <Button label="Hello Button" color="red" onPress={action("clicked")} />
);

// On-Device Register
storiesOf("Button", module)
  .add("Text", text)
  .add("Styled Components", styledComponent)
  .add("Red", red);
