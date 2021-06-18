import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

HomepageCard.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function HomepageCard({ children }) {
  return <CardBG>{children}</CardBG>;
}

const CardBG = styled.div`
  display: block;
  position: relative;
  background: white;
  border-radius: 6px;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
`;
