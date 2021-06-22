import styled from "styled-components/macro";
import ProgressBar from "react-bootstrap/ProgressBar";
import Page from "./Page";
import React from "react";

export default function HeaderSurvey({ activeSurveyQuestion }) {
  return (
    <Wrapper>
      <ProgressBar now={activeSurveyQuestion} max={29} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  text-align: center;
`;
