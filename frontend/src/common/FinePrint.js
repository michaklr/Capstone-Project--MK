import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

FinePrint.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function FinePrint({ children }) {
  return <SmallStyled>{children}</SmallStyled>;
}

const SmallStyled = styled.small`
  display: block;
  margin-top: 20px;
  padding: 1;
`;
