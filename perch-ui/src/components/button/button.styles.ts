import styled, {css} from "styled-components";
import {Button} from "antd";
import {COLOR_THEME_MAIN} from "../../constants/colors.constants";
import {Link} from "react-router-dom";

const cursor = css`
  cursor: pointer;
  color: black;
`;

export const LinkStyled = styled(Link)`
  padding: 0px 10px;
  text-decoration: none;
  font-size: 16px;
  ${cursor}
`;

export const ButtonStyledDefault = styled(Button)`
  margin: 0px 5px;
`;

export const ButtonStyledPrimary = styled(Button)`
  margin: 0px 5px;
  background-color: ${COLOR_THEME_MAIN};
`;