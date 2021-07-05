import React from "react";
import "./MainNav.css";
import styled from "styled-components/macro";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/manual">Anleitung</a>
            </li>
            <li>
              <a href="/manual/survey">Zum Test</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
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
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
  -webkit-box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
  box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
`;
