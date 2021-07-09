import Page from "../components/Page";
import NavBar from "../components/NavBar";
import HeaderSurvey from "../components/HeaderSurvey";
import Board from "../common/Board";
import React, { useEffect, useState } from "react";
import UmfrageleisteText from "../common/UmfrageleisteText";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import ImageDisplay from "../common/ImageDisplay";

export default function SurveyPage({
  surveyQuestions,
  addAnswer,
  submitAnswers,
}) {
  const [activeSurveyQuestion, setActiveSurveyQuestion] = useState(0);
  const questionSurvey =
    surveyQuestions.length > activeSurveyQuestion &&
    surveyQuestions[activeSurveyQuestion];

  const [checkedAnswer, setCheckedAnswer] = useState();

  useEffect(() => {}, [addAnswer]);

  const history = useHistory();

  const handleWeiterClick = () => {
    addAnswer(checkedAnswer, activeSurveyQuestion);
    if (activeSurveyQuestion < 28) {
      setActiveSurveyQuestion(activeSurveyQuestion + 1);
    } else {
      submitAnswers();
      history.push("/manual/survey/result");
    }
    setCheckedAnswer("");
  };

  return (
    <Page>
      <NavBar />
      <HeaderSurvey activeSurveyQuestion={activeSurveyQuestion} />

      <ImageWrapper>
        <ImageDisplay activeSurveyQuestion={activeSurveyQuestion} />
      </ImageWrapper>

      <SurveyWrapper>
        <div>
          <h4>
            Question {activeSurveyQuestion + 1} / {surveyQuestions.length}
          </h4>

          {questionSurvey && (
            <Board
              className="Board"
              title="Survey"
              questionSurvey={questionSurvey}
            />
          )}
        </div>
        <UmfrageWrapper>
          <div>
            <UmfrageleisteText
              checkedAnswer={checkedAnswer}
              setCheckedAnswer={setCheckedAnswer}
            />
          </div>
        </UmfrageWrapper>
        <ButtonWrapper>
          <button
            disabled={!checkedAnswer}
            className="forward"
            onClick={handleWeiterClick}
          >
            Next
          </button>

          <button
            disabled={activeSurveyQuestion === 0}
            className="back"
            onClick={() => setActiveSurveyQuestion(activeSurveyQuestion - 1)}
          >
            Back
          </button>
        </ButtonWrapper>
      </SurveyWrapper>
    </Page>
  );
}

const SurveyWrapper = styled.section`
  margin-top: 20px;
  h4 {
    padding-left: 25px;
    padding-bottom: 0px;
  }
`;

const UmfrageWrapper = styled.section`
  margin-top: 10px;
`;

const ButtonWrapper = styled.section`
  padding-left: 25px;
  padding-right: 25px;

  button {
    background-color: #55aa8e;
    border-radius: 30px;
    border: none;
    box-shadow: none;
    padding: 15px 45px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
    color: white;
    font-weight: bold;
    letter-spacing: 2px;

    &[disabled] {
      background-color: #a4c3b2;
      color: #496f5a;
    }

    &.back {
      float: left;
    }

    &.forward {
      float: right;
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    max-width: 160px;
  }
`;
