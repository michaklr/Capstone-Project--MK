import React, { useEffect } from "react";

import NavBar from "../components/NavBar";
import styled from "styled-components/macro";
import GoogleMapsContainer from "../components/GoogleMapsContainer";
import LocationMap from "../components/LocationMap";

export default function FindHelpPage({ places }) {
  return (
    <div>
      <NavBar />
      <HeaderWrapper>
        <h3>Helping Hands near you</h3>
      </HeaderWrapper>
      <LocationMap places={places} />
    </div>
  );
}

const HeaderWrapper = styled.h3`
  margin-top: 10px;
  text-align: center;
`;
