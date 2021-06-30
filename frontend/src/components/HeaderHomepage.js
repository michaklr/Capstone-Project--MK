import styled from "styled-components/macro";
import React from "react";
import { ReactComponent as Writing } from "../img/schriftzug.svg";

export default function HeaderHomepage() {
  return (
    <HeaderContainer>
      <MenuStyled>
        <MenuBarStyled />
        <MenuBarStyled />
        <MenuBarStyled />
      </MenuStyled>
      <LogoStyled />
    </HeaderContainer>
  );
}

const LogoStyled = styled(Writing)`
  width: 55%;
  height: auto;
  float: right;
  margin-right: 30px;
`;

const HeaderContainer = styled.header`
  display: block;
  height: 60px;
  width: 100%;
  padding: 10px 15px;
  -webkit-box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
  box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
  button:nth-child(3) {
    justify-self: end;
  }
`;

const MenuStyled = styled.section`
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  margin-top: 4px;
  float: left;
`;

const MenuBarStyled = styled.section`
  width: 100%;
  height: 7px;
  border-radius: 5px;
  content: "";
  display: block;
  background-color: #6b9080;
`;
