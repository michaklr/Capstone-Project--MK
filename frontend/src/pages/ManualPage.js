import Page from "../components/Page";
import { Link } from "react-router-dom";
import HeaderManual from "../components/HeaderManual";
import React from "react";
import styled from "styled-components/macro";
import FloatingActionButtons from "../common/FloatingActionButtons";
import NavBar from "../components/NavBar";

export default function ManualPage() {
  return (
    <Page>
      <NavBar />
      <Wrapper>
        <HeaderManual />
        <CardContainer>
          <div>
            Es folgt ein kurzer Test mit Beschwerden, an denen Menschen leiden
            können. Einige der genannten Beschwerden könnten aktuell auf Sie
            selbst zutreffen. Damit bei Ihnen kein Leiden übersehen wird, bitten
            wir Sie eine Vielzahl möglicher Beschwerden zu beurteilen. Bitte
            geben Sie jetzt an, ob eine der nachfolgenden Beschwerden in den
            <b>
              <u> letzten zwei Wochen </u>
            </b>
            auf Sie selbst zutrifft. Falls eine davon zutrifft, möchten wir auch
            wissen, wie stark Sie daran leiden.
          </div>
          <p>
            Bitte beantworten Sie jetzt spontan und <u>zügig</u> jede der
            folgenden Aussagen!
          </p>{" "}
          <p>
            Kreuzen Sie <b>„0 = trifft nicht zu“</b>
            an, wenn Sie überhaupt nicht an der jeweiligen Beschwerde leiden,
          </p>
          <p>
            kreuzen Sie<b> „1 = trifft kaum zu“</b> an, wenn Sie kaum daran
            leiden,
          </p>
          <p>
            kreuzen Sie<b> „2 = trifft ziemlich zu“</b> an, wenn Sie ziemlich
            daran leiden,
          </p>{" "}
          <p>
            kreuzen Sie <b> „3 = trifft deutlich zu“</b> an, wenn Sie deutlich
            daran leiden und
          </p>
          <p>
            {" "}
            kreuzen Sie <b>„4 = trifft extrem zu“</b> an, wenn Sie extrem daran
            leiden.
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
