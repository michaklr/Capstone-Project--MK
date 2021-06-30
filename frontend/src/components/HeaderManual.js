import styled from "styled-components/macro";
import HeadlineUnderline from "../common/HeadlineUnderline";

export default function HeaderManual() {
  return (
    <Wrapper>
      <HeadlineUnderline>
        <h1>Before you start</h1>
      </HeadlineUnderline>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  text-align: center;
`;
