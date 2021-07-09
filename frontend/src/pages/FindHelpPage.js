import NavBar from "../components/NavBar";
import styled from "styled-components/macro";
import LocationMap from "../components/LocationMap";
import LocationList from "../components/LocationList";
import HeadlineUnderline from "../common/HeadlineUnderline";
import FinePrint from "../common/FinePrint";

export default function FindHelpPage({ places }) {
  return (
    <div>
      <NavBar />
      <HeaderWrapper>
        <HeadlineUnderline>
          <h1>Helping Hands around you</h1>
        </HeadlineUnderline>
      </HeaderWrapper>
      <LocationMap places={places} />
      <LocationListWrapper>
        <LocationList places={places} />
      </LocationListWrapper>
      <FinePrint>
        Hinweis: Helping Hands beschränkt sich bei der Anzeige möglicher Helfer,
        nur auf psychologische Psychotherapeuten in unmittelbarer Nähe.
      </FinePrint>
    </div>
  );
}

const HeaderWrapper = styled.header`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;

  h1 {
    font-size: 28px;
    margin-top: 25px;
  }
`;

const LocationListWrapper = styled.section`
  margin-top: 20px;
`;
