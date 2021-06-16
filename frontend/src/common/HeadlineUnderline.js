import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Underline } from '../img/underline.svg'

export default function HeadlineUnderline({ children }) {
    return (
        <HeadlineContainer>
            <ChildContainer>{children}</ChildContainer>
            <UnderlineStyled />
        </HeadlineContainer>
    )
}
const ChildContainer = styled.div`
  position: relative;
  z-index: 1;
`

const HeadlineContainer = styled.section`
  margin: -15px 0;
  position: relative;
  pointer-events: none;
`

const UnderlineStyled = styled(Underline)`
  text-align: center;
  color: var(--highlight);
  width: 100%;
  z-index: 0;
  position: relative;
  top: -34px;
  opacity: 0.6;
`
