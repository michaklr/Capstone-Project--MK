import Page from '../components/Page'
import Header from '../components/Header'
import React from 'react'
import styled from 'styled-components/macro'
import HeadlineUnderline from '../common/HeadlineUnderline'

import { ReactComponent as RandomLogo } from '../img/Mental.svg'

export default function HomePage() {

    return (
        <Page>
            <Header />
            <LogoStyled />
            <HeadlineUnderline>
                <h1>For a healthy mind!</h1>
            </HeadlineUnderline>
        </Page>
    )
}
const LogoStyled = styled(RandomLogo)`
  display: block;
  margin: 15px auto 0 auto;
  width: 50%;
  max-width: 300px;
  `
