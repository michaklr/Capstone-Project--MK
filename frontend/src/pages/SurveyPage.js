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

      {questionSurvey && (
        <Board title="Survey" questionSurvey={questionSurvey} />
      )}
      <div>
        <UmfrageleisteText
          checkedAnswer={checkedAnswer}
          setCheckedAnswer={setCheckedAnswer}
        />
      </div>

      <button disabled={!checkedAnswer} onClick={handleWeiterClick}>
        Weiter
      </button>

      <button onClick={() => setActiveSurveyQuestion(activeSurveyQuestion - 1)}>
        Back
      </button>
    </Page>
  );
}
