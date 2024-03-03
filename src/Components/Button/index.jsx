import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({children, dark}) => {
  return <>
  <StyledButton $dark={dark}>{children}</StyledButton>
  </>
};

export default Button;
