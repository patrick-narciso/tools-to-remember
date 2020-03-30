import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tokens from '../tokens';

const fontSizes = {
  small: tokens.fontSize('s'),
  smallest: tokens.fontSize('xs'),
  base: tokens.fontSize('base'),
};

const BaseText = styled.p`
  line-height: 26px;
  font-size: ${({ size }) => fontSizes[size]};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: 400;
  color: ${({ color }) => color};
  letter-spacing: 0.32px;
  opacity: 1;
`;

const Text = ({ children, size, color }) => (
  <BaseText size={size} color={color}>
    {children}
  </BaseText>
);

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  size: 'base',
  color: tokens.color('ink', 'base'),
};

export default Text;
