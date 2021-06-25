import Page from "../components/Page";
import NavBar from "../components/NavBar";
import HeaderSurvey from "../components/HeaderSurvey";
import Board from "../common/Board";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {}, [addAnswer]);

  const history = useHistory();

  const [enableWeiterbutton, setEnableWeiterButton] = useState();

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
    setEnableWeiterButton(false)
  };

  return (
    <Page>
      <NavBar />
      <HeaderSurvey activeSurveyQuestion={activeSurveyQuestion} />

      {questionSurvey && (
        <Board title="Survey" questionSurvey={questionSurvey} />
      )}
      <div>
        <UmfrageleisteText
          setEnableWeiterButton={setEnableWeiterButton}
          addAnswer={handleAddAnswer}
        />
      </div>
      <button disabled={!enableWeiterbutton} onClick={handleWeiterClick}>
        Weiter
      </button>
      <button onClick={() => setActiveSurveyQuestion(activeSurveyQuestion - 1)}>
        Back
      </button>
    </Page>
  );
}
