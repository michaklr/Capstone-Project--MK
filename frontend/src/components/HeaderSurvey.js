import styled from "styled-components/macro";
import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

export default function HeaderSurvey({ activeSurveyQuestion }) {
  return (
    <ProgressBar now={activeSurveyQuestion} max={29} variant={"success"} />
  );
}
