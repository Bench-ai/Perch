import styled, {css} from "styled-components";
import {Button} from "antd";
import {Link} from "react-router-dom";
import {COLOR_THEME_MAIN} from "../../constants";

const cursor = css`
  cursor: pointer;
  color: black;
`;

export const LinkStyledSmall = styled(Link)`
  padding: 0px 10px;
  text-decoration: none;
  font-size: 12px;
  ${cursor}
  
  :hover {
    color: ${COLOR_THEME_MAIN};
  }
`;

export const LinkStyledLarge = styled(Link)`
  padding: 0px 10px;
  text-decoration: none;
  font-size: 16px;
  ${cursor}
  
  :hover {
    color: ${COLOR_THEME_MAIN};
  }
`;

export const ButtonStyledDefault = styled(Button)`
  margin: 0px 5px;
`;

export const ButtonStyledPrimary = styled(Button)`
  margin: 0px 5px;
  background-color: ${COLOR_THEME_MAIN};
`;