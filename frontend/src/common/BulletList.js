import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

BulletList.propTypes = {
  children: PropTypes.any.isRequired,
  listType: PropTypes.resetWarningCache,
};

export default function BulletList({ children, listType }) {
  return <ListContainer listType={listType}>{children}</ListContainer>;
}

const ListContainer = styled.ul`
  padding: 0;
  margin: 0 0 30px 0;

  li {
    list-style: none;
    padding: 0px 0px 3px 27px;
    margin-bottom: 18px;
  }

  h3 {
    text-align: left;
    margin: 0;
  }

  p {
    margin: 12px 0 0 0;
  }
`;
