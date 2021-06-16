import Page from '../components/Page'
import Header from '../components/Header'
import React from 'react'
import styled from 'styled-components/macro'
import HeadlineUnderline from '../common/HeadlineUnderline'

import { ReactComponent as RandomLogo } from '../img/Mental.svg'
import Collapse from "../common/collapse";

import {Link} from "react-router-dom";

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
            <Collapse headline="Worum geht es bei Helping Hands?">
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </Collapse>
<button><Link to={'/Instructions'}>Start Test</Link></button>
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
