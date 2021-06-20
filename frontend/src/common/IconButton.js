import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

IconButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default function IconButton({ children, onClick, className }) {
  return (
    <ButtonContainer className={className} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
`;
