import Page from "../components/Page";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import HeaderErgebnis from "../components/HeaderErgebnis";
import NavBar from "../components/NavBar";

export default function ResultPage({ surveyAnswers }) {
  console.log(surveyAnswers);
  return (
    <Page>
      <NavBar />
      <HeaderErgebnis />
      <Wrapper>
        <CardContainer>
          {surveyAnswers?.depressionResult}
          {surveyAnswers?.angstResult}
          {surveyAnswers?.zwangResult}
          {surveyAnswers?.somaResult}
          {surveyAnswers?.essVerhaltenResult}
          {surveyAnswers?.zusatzResult}
          {surveyAnswers?.gesamtResult}
        </CardContainer>
      </Wrapper>
      <button>
        <Link to={"/manual/survey/result/help"}>Find Help</Link>
      </button>
    </Page>
  );
}
const CardContainer = styled.section`
  display: block;
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.section`
background-color: #CCE3DE
  border-radius: 0;
  padding: 25px 15px;
    `;
