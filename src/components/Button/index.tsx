import React from "react";
import { ButtonStyled } from "./styles";
import { iChildren } from "../../interfaces";

function Button(title: iChildren, onclick: any) {
  return <ButtonStyled type="button">{title.children}</ButtonStyled>;
}

export default Button;
