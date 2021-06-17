import Page from "../components/Page";
import {Link} from "react-router-dom";
import HeaderManual from "../components/HeaderManual";
import React from "react";
import styled from "styled-components/macro";

export default function ManualPage() {
    return (
        <Page>
            <HeaderManual/>
            <Wrapper>
                <CardContainer>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </CardContainer>
            </Wrapper>
            <button><Link to={'/manual'}>Start Test</Link></button>
        </Page>
    )
}
const CardContainer = styled.section`
  display: block;;
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.1);
`

const Wrapper = styled.section`
background-color: #CCE3DE
  border-radius: 0;
  padding: 25px 15px;
    `