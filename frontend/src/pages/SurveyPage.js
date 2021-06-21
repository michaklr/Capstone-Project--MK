import Page from "../components/Page";
import NavBar from "../components/NavBar";
import HeaderSurvey from "../components/HeaderSurvey";
import Board from "../common/Board";
import React, { useState } from "react";

export default function SurveyPage({ surveyQuestions }) {
  const [activeSurveyQuestion, setActiveSurveyQuestion] = useState(0);
  const questionSurvey =
    surveyQuestions.length > activeSurveyQuestion &&
    surveyQuestions[activeSurveyQuestion];

  return (
    <Page>
      <NavBar />
      <HeaderSurvey />
      {questionSurvey && (
        <Board title="Survey" questionSurvey={questionSurvey} />
      )}
      <button onClick={() => setActiveSurveyQuestion(activeSurveyQuestion + 1)}>
        Weiter
      </button>
    </Page>
  );
}
