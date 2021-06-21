import { useEffect, useState } from "react";
import axios from "axios";

export default function useSurveyQuestions() {
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("/api/survey")
      .then((response) => response.data)
      .then(setSurveyQuestions)
      .catch((error) => console.error());
  }, []);

  return {
    surveyQuestions,
  };
}
