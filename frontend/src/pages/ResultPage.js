import Page from "../components/Page";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import HeaderErgebnis from "../components/HeaderErgebnis";
import NavBar from "../components/NavBar";
import HeadlineUnderline from "../common/HeadlineUnderline";

export default function ResultPage({ surveyAnswers }) {
  console.log(surveyAnswers);
  return (
    <Page>
      <NavBar />
      <HeaderWrapper>
        <HeadlineUnderline>
          <HeaderErgebnis />
        </HeadlineUnderline>
      </HeaderWrapper>
      <Wrapper>
        <CardContainer>
          {surveyAnswers?.depressionResult}
          {surveyAnswers?.angstResult}
          {surveyAnswers?.zwangResult}
          {surveyAnswers?.somaResult}
          {surveyAnswers?.essVerhaltenResult}
          {surveyAnswers?.zusatzResult}
          {surveyAnswers?.gesamtResult}

          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </CardContainer>
      </Wrapper>
      <ButtonWrapper>
        <button>
          <LinkStyled to={"/manual/survey/result/places"}>
            Helping Hands
          </LinkStyled>
        </button>
      </ButtonWrapper>
    </Page>
  );
}

const HeaderWrapper = styled.section`
  margin-top: 20px;
`;

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
    `;

const LinkStyled = styled(Link)`
  color: black;
`;

const ButtonWrapper = styled.section`
  padding-left: 15px;
  padding-right: 15px;
 
 
  button {
    background-color: #55aa8e;
    border-radius: 30px;
    border: none;
    box-shadow: none;
    padding: 10px 30px;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    float: right;
    letter-spacing: 2px`;
