import { useEffect, useState } from "react";
import axios from "axios";

export default function useSurveyResults() {
  const [Answers, setAnswers] = useState({});

  const addAnswer = (answer, answerQuestionNumber) => {
    setAnswers({ ...Answers, [answerQuestionNumber]: answer });
    console.log(Answers);
  };

  const submitAnswers = () => {
    axios
      .post("/api/survey", Answers)
      .then((response) => response.data)
      .then(console.log)
      .catch((error) => console.error());
  };

  return {
    addAnswer,
    submitAnswers,
  };
}
