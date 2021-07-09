import Page from "../components/Page";
import NavBar from "../components/NavBar";
import HeaderSurvey from "../components/HeaderSurvey";
import Board from "../common/Board";
import React, { useState } from "react";
import UmfrageleisteText from "../common/UmfrageleisteText";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  const handleAddAnswer = (answer) => {
    addAnswer(answer, activeSurveyQuestion);
  };

  const handleWeiterClick = (event) => {
    if (activeSurveyQuestion < 28) {
      setActiveSurveyQuestion(activeSurveyQuestion + 1);
    } else {
      submitAnswers();
      history.push("/manual/survey/result");
    }
  };

  return (
    <Page>
      <NavBar />
      <HeaderSurvey activeSurveyQuestion={activeSurveyQuestion} />

      {questionSurvey && (
        <Board title="Survey" questionSurvey={questionSurvey} />
      )}
      <div>
        <UmfrageleisteText addAnswer={handleAddAnswer} />
      </div>
      <button onClick={handleWeiterClick}>Weiter</button>
      <button onClick={() => setActiveSurveyQuestion(activeSurveyQuestion - 1)}>
        Back
      </button>
    </Page>
  );
}
