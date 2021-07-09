import Page from "../components/Page";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import HeaderErgebnis from "../components/HeaderErgebnis";
import NavBar from "../components/NavBar";
import HeadlineUnderline from "../common/HeadlineUnderline";

export default function ResultPage({ surveyAnswers }) {
  console.log(surveyAnswers);
  return (
    <Page>
      <NavBar />
      <HeaderWrapper>
        <HeadlineUnderline>
          <HeaderErgebnis />
        </HeadlineUnderline>
      </HeaderWrapper>
      <Wrapper>
        <CardContainer>
          <div>
            Schön, dass Sie sich die Zeit genommen haben, alle Fragen zu
            beantworten. Da der Fragenkatalog ein möglichst weites Spektrum
            psychischer Symptomatiken abdecken soll, erfolgt die Auswertung
            einer möglichen Symptombelastung nach spezifischen psychischen
            Krankheits- bildern. Eine Symptombelastung bedeutet, dass mögliche
            seelische Belastungen oder ein Leidensdruck vorliegen.
            <p>Demnach ergab die Auswertung ihres Fragebogens folgendes:</p>
          </div>
          <ul>
            <p>
              <li>{surveyAnswers?.depressionResult}</li>
            </p>
            <p>
              <li>{surveyAnswers?.angstResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.zwangResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.somaResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.essVerhaltenResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.konzentrationResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.suizidResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.schlafResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.appetitResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.merkResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.traumaResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.schicksalResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.bodyResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.umgebungResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.verlangenResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.verletzungResult}</li>
            </p>
            <p>
              <li> {surveyAnswers?.vorliebeResult}</li>
            </p>
          </ul>
          <div>
            Unabhängig von der erfassten Symptombelastung, hat Sie etwas dazu
            bewegt, diese Fragen zu beantworten. Wenn Sie das Bedürfnis haben,
            über Schwierigkeiten mit einer psychologischen Psychotherapeutin zu
            sprechen, dann möchten wir Sie dazu unbedingt ermutigen. Wir
            glauben, dass ein Gespräch mit einem/ einer Psychotherapeut*in immer
            hilfreich sein kann.
          </div>
        </CardContainer>
      </Wrapper>
      <ButtonWrapper>
        <button>
          <LinkStyled to={"/manual/survey/result/places"}>
            Helping Hands
          </LinkStyled>
        </button>
      </ButtonWrapper>
    </Page>
  );
}

const HeaderWrapper = styled.section`
  margin-top: 20px;
`;

const CardContainer = styled.section`
  display: block;
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);

  div {
    text-align: justify;
  }

  p {
    text-align: justify;
  }
`;

const Wrapper = styled.section`
background-color: #CCE3DE
  border-radius: 0;
  padding: 25px 15px;
    `;

const LinkStyled = styled(Link)`
  color: black;
`;

const ButtonWrapper = styled.section`
  padding-left: 15px;
  padding-right: 15px;
 
 
  button {
    background-color: #55aa8e;
    border-radius: 30px;
    border: none;
    box-shadow: none;
    padding: 10px 30px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    float: right;
    letter-spacing: 2px`;
