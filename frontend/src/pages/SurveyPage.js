import Page from "../components/Page";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import HeaderSurvey from "../components/HeaderSurvey";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import NavBar from "../components/NavBar";

const OPTIONS = [0, 1, 2, 3, 4];

const SURVEYS = [
  {
    id: 0,
    name: "name 0",
    description: "description 0",
  },
  {
    id: 1,
    name: "name 1",
    description: "description 0",
  },
  {
    id: 2,
    name: "name 2",
    description: "description 0",
  },
];

export default function SurveyPage() {
  const [surveys, setSurveys] = useState([]);
  const [activeSurvey, setActiveSurvey] = useState(null);

  // wird beim laden der Seite einmal ausgeführt, vor dem anzeigen

  useEffect(() => {
    // 1. surveys aus der datenbank laden und mit setSurveys zuweisen wenn vorhande

    // 2 Daten dem State zuordnen
    setSurveys(SURVEYS);

    // 3. Standardmäßig erste Frage anzeigen
    setActiveSurvey(SURVEYS[2]);
  });

  const renderOptions = () => {
    return (
      <div className="options">
        <FormControlLabel
          control={
            <Checkbox onChange={console.log("changed")} name="checkedA" />
          }
          label="Trifft nicht zu"
        />
        <FormControlLabel
          control={
            <Checkbox onClick={() => console.log("changed")} name="checkedA" />
          }
          label="Trifft kaum zu"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={console.log("changed")} name="checkedA" />
          }
          label="Trifft ziemlich zu"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={console.log("changed")} name="checkedA" />
          }
          label="Trifft deutlich zu"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={console.log("changed")} name="checkedA" />
          }
          label="Trifft extrem zu"
        />
      </div>
    );
  };

  const renderSurveys = () => {
    if (activeSurvey !== null) {
      const { id, name, description } = activeSurvey;

      // Funktion einbauen, die über die OPTIONS iteriert. Für jede Option eine Checkbox Komponente zurückgeben. Diese muss ins return
      // google: react render of components
      //

      return (
        <>
          <div>{id}</div>
          <div>{name}</div>
          <div>{description}</div>
          {renderOptions()}
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Page>
      <NavBar />
      <HeaderSurvey />
      <Wrapper>
        <CardContainer>
          <p>{renderSurveys()}</p>
        </CardContainer>
      </Wrapper>
      <button>
        <Link to={"/manual/survey/result"}>Start Test</Link>
      </button>
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
