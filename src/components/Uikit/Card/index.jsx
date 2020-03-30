import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tokens from '../tokens';

const elevationLevels = {
  1: '0px 5px 7px #0000000D',
  2: '0px 10px 10px #0000000D',
  3: '0px 15px 20px #00000012',
  4: '0px 20px 25px #0000001A',
  default: null,
};

const BaseCard = styled.div`
  min-width: 387px;
  min-height: 283px;
  background-color: ${tokens.color('white', 'base')};
  border: 1px solid ${tokens.color('white', 'darkest')};
  padding: 30px;
  border-radius: 5px;
  opacity: 1;
  box-shadow: ${({ elevation }) => elevationLevels[elevation]};
`;

const Card = ({ children, elevation }) => <BaseCard elevation={elevation}>{children}</BaseCard>;

Card.propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.number,
};

Card.defaultProps = {
  children: null,
  elevation: null,
};

export default Card;
