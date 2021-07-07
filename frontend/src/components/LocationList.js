import React from "react";
import styled from "styled-components/macro";

export default function LocationList({ places }) {
  console.log(places);

  return (
    <>
      {places.map((places) => (
        <CardContainer>
          <h2>{places.name}</h2>
          <p>{places.vicinity}</p>
          <p> Rating: {places.rating}</p>
        </CardContainer>
      ))}
    </>
  );
}

const CardContainer = styled.section`
  display: block;
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 15px;
  overflow: scroll;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }
`;
