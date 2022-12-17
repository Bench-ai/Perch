import styled from "styled-components";

export const Header = styled.div`
  z-index: 10;
  position:fixed;
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

export const Image = styled.img`
  width: 58px;
  height: 38px;
`;
