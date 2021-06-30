import Page from "../components/Page";
import NavBar from "../components/NavBar";
import HeaderSurvey from "../components/HeaderSurvey";
import Board from "../common/Board";
import React, { useEffect, useState } from "react";
import UmfrageleisteText from "../common/UmfrageleisteText";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

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
    if (activeSurveyQuestion < 29) {
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

        <button disabled={!checkedAnswer} onClick={handleWeiterClick}>
          Next
        </button>

        <button
          onClick={() => setActiveSurveyQuestion(activeSurveyQuestion - 1)}
        >
          Back
        </button>
      </SurveyWrapper>
    </Page>
  );
}

const SurveyWrapper = styled.section`
  margin-top: 70px;
  h4 {
    padding-left: 25px;
    padding-bottom: 0px;
  }
`;

const UmfrageWrapper = styled.section`
  margin-top: 10px;
`;

const QuestionWrapper = styled.h4`
  margin: 20px;
`;
