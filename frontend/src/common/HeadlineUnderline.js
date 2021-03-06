import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Underline } from "../img/underline.svg";

export default function HeadlineUnderline({ children }) {
  return (
    <HeadlineContainer>
      <ChildContainer>{children}</ChildContainer>
      <UnderlineStyled />
    </HeadlineContainer>
  );
}
const ChildContainer = styled.div`
  position: relative;
`;

const HeadlineContainer = styled.section`
  margin: -15px 0;
  margin-top: 10px;
  position: relative;
  pointer-events: none;
  text-align: center;
`;

const UnderlineStyled = styled(Underline)`
  width: 80%;
  z-index: -1;
  position: relative;
  top: -34px;
  opacity: 0.6;
`;
