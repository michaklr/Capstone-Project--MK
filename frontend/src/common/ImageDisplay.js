import Depression from "../img/Depression.svg";
import Angst from "../img/Angst.svg";
import Zwang from "../img/Zwang.svg";
import Somatoform from "../img/Somatoform.svg";
import Essen from "../img/Essen.svg";
import Trauma from "../img/Trauma.svg";
import Funktion from "../img/Funktion.svg";
import styled from "styled-components/macro";

export default function ImageDisplay(activeSurveyQuestion) {
  if (activeSurveyQuestion.activeSurveyQuestion < 4) {
    return (
      <StyledWrapper>
        <img src={Depression} alt={Depression} className={"center"} />
      </StyledWrapper>
    );
  } else if (
    activeSurveyQuestion.activeSurveyQuestion >= 4 &&
    activeSurveyQuestion.activeSurveyQuestion < 8
  ) {
    return (
      <StyledWrapper>
        <img src={Angst} alt={Angst} className={"center"} />
      </StyledWrapper>
    );
  } else if (
    activeSurveyQuestion.activeSurveyQuestion >= 8 &&
    activeSurveyQuestion.activeSurveyQuestion < 13
  ) {
    return (
      <StyledWrapper>
        <img src={Zwang} alt={Zwang} className={"center"} />
      </StyledWrapper>
    );
  } else if (activeSurveyQuestion.activeSurveyQuestion === 13) {
    return (
      <StyledWrapper>
        <img src={Somatoform} alt={Somatoform} className={"center"} />
      </StyledWrapper>
    );
  } else if (
    activeSurveyQuestion.activeSurveyQuestion >= 14 &&
    activeSurveyQuestion.activeSurveyQuestion < 22
  ) {
    return (
      <StyledWrapper>
        <img src={Essen} alt={Essen} className={"center"} />
      </StyledWrapper>
    );
  } else if (
    activeSurveyQuestion.activeSurveyQuestion >= 22 &&
    activeSurveyQuestion.activeSurveyQuestion < 26
  ) {
    return (
      <StyledWrapper>
        <img src={Trauma} alt={Trauma} className={"center"} />
      </StyledWrapper>
    );
  } else if (
    activeSurveyQuestion.activeSurveyQuestion >= 26 &&
    activeSurveyQuestion.activeSurveyQuestion < 29
  ) {
    return (
      <StyledWrapper>
        <img src={Funktion} alt={Funktion} className={"center"} />
      </StyledWrapper>
    );
  }
  return null;
}

const StyledWrapper = styled.section`
  .center {
    display: block;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
`;
