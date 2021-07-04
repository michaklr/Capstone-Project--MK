import React from "react";
import styled from "styled-components/macro";

export default function LocationList({ places }) {
  return <CardContainer></CardContainer>;
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
`;
