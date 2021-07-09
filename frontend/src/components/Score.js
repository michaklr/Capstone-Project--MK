import { useState } from "react";

const possibleAnswers = {
  0: "Trifft nicht zu",
  1: "Trifft kaum zu",
  2: "Trifft ziemlich zu",
  3: "Trifft deutlich zu",
  4: "Trifft extrem zu",
};

export default function Score() {
  const [Answers, setAnswers] = useState([]);

  setAnswers([...Answers, possibleAnswers]);
}
