import React from "react";
import "./MainNav.css";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
              <LinkStyled to="/">Home</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/manual">Anleitung</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/manual/survey">Zum Test</LinkStyled>
            </li>
            <li>
              <LinkStyled to="/manual/survey/result/places">
                Find help
              </LinkStyled>
            </li>
          </ul>
        </div>
      </nav>
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
`;

const LinkStyled = styled(Link)`
  color: black;
`;
