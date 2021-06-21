import styled from "styled-components/macro";
import SurveyItem from "../components/SurveyItem";

export default function Board({ surveyQuestions }) {
  return (
    <Wrapper>
      <CardContainer>
        <ul>
          {surveyQuestions.map((questionSurvey) => (
            <li key={questionSurvey.questionNumber}>
              <SurveyItem questionSurvey={questionSurvey} />
            </li>
          ))}
        </ul>
      </CardContainer>
    </Wrapper>
  );
}

const CardContainer = styled.section`
  display: block;
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.section`
background-color: #CCE3DE
  border-radius: 0;
  padding: 25px 15px;
  
  ul {
  list-style: none;
    `;
