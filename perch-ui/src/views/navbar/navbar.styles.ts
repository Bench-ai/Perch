import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "antd";

const cursor = css`
  cursor: pointer;
  color: black;
`;

export const Header = styled.div`
  position:fixed;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  box-shadow: 0px -25px 50px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px -25px 50px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -25px 50px 0px rgba(0,0,0,0.75);
`;

export const LeftOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
`;

export const RightOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const LinkStyled = styled(Link)`
  padding: 0px 10px;
  text-decoration: none;
  font-size: 16px;
  ${cursor}
`;

export const Image = styled.img`
  height: 65%;
  width: 65%;
`;

export const ButtonStyled = styled(Button)`
  margin: 0px 10px;
`;