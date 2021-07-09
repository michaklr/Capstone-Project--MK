import React from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

Collapse.propType = {
  headline: PropTypes.string.isRequired,
  headlineOpen: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default function Collapse({ headline, headlineOpen, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CollapseWrapper>
      <CollapseHeader onClick={toggleIsOpen}>
        {isOpen ? headlineOpen || headline : headline}
        <CollapseIcon alt="+/-" src="/img/expand.svg" isOpen={isOpen} />
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </CollapseWrapper>
  );

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }
}

const CollapseWrapper = styled.section`
  margin: 20px 0;
`;

const CollapseHeader = styled.div`
  text-align: center;
  position: relative;
  border-radius: 6px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  background: #6b9080;
  padding: 8px 14px;
  color: white;
`;

const CollapseIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 14px;
  transform: ${(props) => (props.isOpen ? "rotate(0deg);" : "rotate(180deg)")};
  transition: transform 0.3s ease-in-out;
`;
const CollapseContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-top: 10px solid var(--secondary);
  box-shadow: var(--primary-shadow);
  padding: 15px;
  margin-top: -10px;
`;
