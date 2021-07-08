import Page from "../components/Page";
import React from "react";
import styled from "styled-components/macro";
import HeadlineUnderline from "../common/HeadlineUnderline";
import therapy from "../img/therapy.jpg";
import Collapse from "../common/collapse";
import { Link } from "react-router-dom";
import HomepageCard from "../common/HomepageCard";
import BulletList from "../common/BulletList";
import FinePrint from "../common/FinePrint";
import FloatingActionButtons from "../common/FloatingActionButtons";
import MainNav from "../components/MainNav";
import { ReactComponent as hand } from "../img/hand.svg";

export default function HomePage() {
  return (
    <Page>
      <MainNav />
      <HeaderImage>
        <img src={therapy} width="600" alt={therapy} />
      </HeaderImage>
      <HeadlineUnderline>
        <h1>For a healthy mind</h1>
      </HeadlineUnderline>
      <FronttextWrapper>
        <div>
          <p>
            HELPING HANDS ist eine Plattform, die Sie dabei unterstützen möchte,
            mögliche seelische Belastungen oder Leidensdruck zu erkennen und
            besser zu verstehen.
          </p>
        </div>
      </FronttextWrapper>
      <Collapse headline="About Helping Hands">
        <IconStyled />
        <CollapseTextWrapper>
          <div>
            Mit Hilfe weniger gezielter Fragen ermittelt die App einschlägige
            Symptome. Helping Hands darf kein Ersatz für fachärztliche Diagnosen
            und Therapieanweisungen sein. Die App kann jedoch praktische Tipps
            zur Linderung geben, möglicherweise zu einem Gespräch mit
            psychologischen Psychotherapeuten raten und bei der Suche nach
            geeigneten Therapeuten (Helping Hands) in Ihrer Nähe helfen.
          </div>
        </CollapseTextWrapper>
      </Collapse>

      <CardContainer>
        <HomepageCard>
          <BulletList>
            <li>Ordnen Sie mögliche Symptome ein.</li>
            <li>Entwickeln Sie ein besseres Verständnis für sich selbst.</li>
            <li>
              Profitieren Sie von speziell auf Sie zugeschnittenen Tipps für
              Alltagssituationen.
            </li>
          </BulletList>
        </HomepageCard>
      </CardContainer>
      <CardContainer>
        <HomepageCard>
          <li>
            <h3>Seriös</h3>
            <p>
              Unser Test basiert auf neuesten Forschungsergebnissen der
              Psychologie.
            </p>
          </li>
          <li>
            <h3>Schnell</h3>
            <p>Der Test dauert nur ca. 5 Minuten.</p>
          </li>
          <li>
            <h3>Sicher</h3>
            <p>
              Wir übermitteln keine Daten von Ihnen. Ihre Privatsphäre ist
              absolut sicher.
            </p>
          </li>
        </HomepageCard>
      </CardContainer>
      <FinePrint>
        Hinweis: Unser Angebot ersetzt keine psychologische Beratung. Wenn Sie
        unter psychischen Problemen leiden, suchen Sie sich bitte professionelle
        Hilfe.
      </FinePrint>

      <ButtonFixedWrapper>
        <StyledLink to={"/manual"}>
          <FloatingActionButtons />
        </StyledLink>
      </ButtonFixedWrapper>
    </Page>
  );
}

const CardContainer = styled.section`
  background-color: #CCE3DE
  border-radius: 0;
  padding: 25px 15px;
  
  ul {
    margin-bottom: 0;
  }
  
  li {
    list-style: none;
    padding-left: 24px;
    position: relative;
    color: rgba(0,0,0,0.7);
    
    &:last-of-type {
        margin-bottom: 0;
    }
    
    &:before {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #A4C3B2;
        content:"";
        display: block;
        position: absolute;
        left: 0;
        top: 2px;
    }
  }
`;

const ButtonFixedWrapper = styled.section`
  background-color: white;
  padding: 12px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.2);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 24%,
    rgba(246, 255, 248, 1) 86%
  );
`;

const FronttextWrapper = styled.section`
  padding: 20px;
  margin-left: 10px;

  p {
    text-align: justify;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const IconStyled = styled(hand)`
  width: 100%;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const HeaderImage = styled.section`
  padding: 15px;
  margin-bottom: 15px;
  margin-top: 15px;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 100px 20px 100px 20px;
  }
`;

const CollapseTextWrapper = styled.section`
  margin-left: 15px;
  margin-top: 5px;
`;
