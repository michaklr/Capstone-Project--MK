import GoogleMapsContainer from "./GoogleMapsContainer";
import styled from "styled-components/macro";

export default function LocationMap({ places }) {
  return (
    <>
      <CardWrapper>
        <GoogleMapsContainer places={places} />
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.section`
  margin-top: 50px;
`;
