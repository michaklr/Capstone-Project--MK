import Page from '../components/Page'
import Header from '../components/Header'
import React from 'react'
import styled from 'styled-components/macro'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as RandomLogo } from '../img/Mental.svg'
import Collapse from "../common/collapse";
import {Link} from "react-router-dom";
import HomepageCard from "../common/HomepageCard";
import BulletList from "../common/BulletList";
import FinePrint from "../common/FinePrint";



export default function HomePage() {

    return (
        <Page>
            <Header />
            <LogoStyled />
            <HeadlineUnderline>
                <h1>For a healthy mind!</h1>
            </HeadlineUnderline>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <Collapse headline="About Helping Hands">
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </Collapse>

<CardContainer>
    <HomepageCard>
        <BulletList>
            <li>Entdecken Sie Ihre individuellen Persönlichkeitsstile.</li>
            <li>
                Entwickeln Sie ein besseres Verständnis für sich selbst in
                zwischenmenschlichen Beziehungen.
            </li>
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
                        Wir übermitteln keine Daten von Ihnen. Ihre Privatsphäre ist absolut
                        sicher.
                    </p>
                </li>
            </HomepageCard>
</CardContainer>
            <FinePrint>
                Hinweis: Unser Angebot ersetzt keine psychologische Beratung. Wenn Sie
                unter psychischen Problemen leiden, suchen Sie sich bitte professionelle
                Hilfe.
            </FinePrint>

<button><Link to={'/manual'}>Start Test</Link></button>
        </Page>
    )
}
const LogoStyled = styled(RandomLogo)`
  display: block;
  margin: 15px auto 0 auto;
  width: 50%;
  max-width: 300px;
  margin-bottom:40px;
  `
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
`
