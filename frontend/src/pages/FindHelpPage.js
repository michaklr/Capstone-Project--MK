import NavBar from "../components/NavBar";
import styled from "styled-components/macro";
import LocationMap from "../components/LocationMap";
import LocationList from "../components/LocationList";

export default function FindHelpPage({ places }) {
  return (
    <div>
      <NavBar />
      <HeaderWrapper>
        <h2>Helping Hands near you</h2>
      </HeaderWrapper>
      <LocationMap places={places} />
      <LocationListWrapper>
        <LocationList places={places} />
      </LocationListWrapper>
    </div>
  );
}

const HeaderWrapper = styled.header`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
`;

const LocationListWrapper = styled.section`
  margin-top: 20px;
`;
