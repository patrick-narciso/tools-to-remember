import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Primary from './Primary';
import Secondary from './Secondary';
import Terciary from './Terciary';
import Quartiary from './Quartiary';

const BaseButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  border: none;
  ${props => props.variant === 'primary' && Primary}
  ${props => props.variant === 'secondary' && Secondary}
  ${props => props.variant === 'terciary' && Terciary}
  ${props => props.variant === 'quartiary' && Quartiary}
`;

const Button = ({ children, variant, color, disabled, onClick }) => (
  <BaseButton variant={variant} color={color} disabled={disabled} onClick={onClick}>
    {children}
  </BaseButton>
);

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  onClick: () => {},
};

export default Button;
