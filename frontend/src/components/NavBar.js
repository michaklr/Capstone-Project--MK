import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as BackIcon } from "../img/back.svg";
import { ReactComponent as HomeIcon } from "../img/home.svg";
import { ReactComponent as Icon } from "../img/hand.svg";
import IconButton from "../common/IconButton";

export default function NavBar() {
  const history = useHistory();

  return (
    <HeaderContainer>
      <IconButton onClick={() => history.goBack()}>
        <BackIcon title="zurück" />
      </IconButton>

      <LogoStyled />

      <IconButton onClick={() => history.push("/")}>
        <HomeIcon title="zur Homepage" />
      </IconButton>
    </HeaderContainer>
  );
}

const LogoStyled = styled(Icon)`
  width: 20%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between
  padding: 10px 15px;
  -webkit-box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
  box-shadow: 2px 7px 21px 0px rgba(196, 196, 196, 0.57);
`;
