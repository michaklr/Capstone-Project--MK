import React from "react";
import "./MainNav.css";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

export default function MainNav() {
  return (
    <HeaderContainer>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <li>
              <LinkStyled to="/">
                <strong>Home</strong>
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="/manual">
                <strong>Anleitung</strong>
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="/manual/survey">
                <strong>Zum Test</strong>
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="/manual/survey/result/places">
                <strong>Find help</strong>
              </LinkStyled>
            </li>
          </ul>
        </div>
      </nav>
      <img src={logo} alt={logo} className={"center"} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  height: 65px;
  width: 100%;
  text-decoration: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
  -webkit-box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
  box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);

  .center {
    display: block;
    margin-top: 15px;
    margin-left: auto;
    padding-right: auto;
    margin-bottom: 10px;
    width: 55%;
  }
`;

const LinkStyled = styled(Link)`
  color: black;
`;
