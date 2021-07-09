import { useEffect, useState } from "react";
import axios from "axios";

export default function useSurveyResults() {
  const [answers, setAnswers] = useState({});

  const [surveyAnswers, setSurveyAnswers] = useState();
  console.log(answers);

  const addAnswer = (answer, answerQuestionNumber) => {
    setAnswers({ ...answers, ["answer_" + [answerQuestionNumber]]: answer });
  };

  const submitAnswers = () => {
    axios
      .post("/api/survey", answers)
      .then((response) => response.data)
      .then(setSurveyAnswers)
      .catch((error) => console.error());
  };

  return {
    addAnswer,
    submitAnswers,
    surveyAnswers,
  };
}
