import Page from "../components/Page";
import { Link } from "react-router-dom";
import HeaderManual from "../components/HeaderManual";
import React from "react";
import styled from "styled-components/macro";
import FloatingActionButtons from "../common/FloatingActionButtons";

export default function ManualPage() {
  return (
    <Page>
      <HeaderManual />
      <Wrapper>
        <CardContainer>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </CardContainer>
      </Wrapper>
      <ButtonFixedWrapper>
        <StyledLink to={"/manual/survey"}>
          <FloatingActionButtons />
        </StyledLink>
      </ButtonFixedWrapper>
    </Page>
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
    `;

const ButtonFixedWrapper = styled.section`
  background-color: white;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
