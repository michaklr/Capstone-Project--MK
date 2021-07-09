import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as BackIcon } from "../img/back.svg";
import { ReactComponent as HomeIcon } from "../img/home.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import IconButton from "../common/IconButton";

export default function NavBar() {
  const history = useHistory();

  return (
    <HeaderContainer>
      <IconButton onClick={() => history.goBack()}>
        <BackIcon title="zurück" />
      </IconButton>
      <Link to="/">
        <LogoStyled title="Bla bla" />
      </Link>
      <IconButton onClick={() => history.push("/")}>
        <HomeIcon title="zur Homepage" />
      </IconButton>
    </HeaderContainer>
  );
}

const LogoStyled = styled(Logo)`
  overflow: visiblegit pull;
`;

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 60px;
  width: 100%;
  padding: 10px 15px;
  box-shadow: var(--primary-shadow);
  button:nth-child(3) {
    justify-self: end;
  }
`;
