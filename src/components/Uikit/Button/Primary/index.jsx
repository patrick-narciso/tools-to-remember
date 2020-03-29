import { css } from 'styled-components';
import tokens from '../../tokens';

const buttonTypes = {
  neutral: {
    regular: tokens.color('blue', 'base'),
    hover: tokens.color('blue', 'dark'),
    click: tokens.color('blue', 'darker'),
    disabled: {
      background: tokens.color('blue', 'lighter'),
      color: tokens.color('blue', 'mostLightest'),
    },
  },
  success: {
    regular: '#0DCB7D',
    hover: tokens.color('green', 'dark'),
    click: tokens.color('green', 'darker'),
    disabled: {
      background: tokens.color('green', 'light'),
      color: tokens.color('green', 'mostLightest'),
    },
  },
  danger: {
    regular: tokens.color('red', 'base'),
    hover: tokens.color('red', 'dark'),
    click: tokens.color('red', 'darker'),
    disabled: {
      background: tokens.color('red', 'light'),
      color: tokens.color('red', 'mostLightest'),
    },
  },
};

const Primary = css`
  background-color: ${({ color }) => buttonTypes[color].regular};

  &:hover {
    background-color: ${({ color }) => buttonTypes[color].hover};
  }

  &:active {
    background-color: ${({ color }) => buttonTypes[color].click};
  }

  &:disabled {
    background-color: ${({ color }) => buttonTypes[color].disabled.background};
    color: ${({ color }) => buttonTypes[color].disabled.color};
  }

  font-size: ${tokens.fontSize('s')};
  font-family: ${tokens.get('type.regularFontFamily')};
  color: ${tokens.color('white', 'base')};
  letter-spacing: 0.36px;
  line-height: 24px;
  border-radius: 5px;
  opacity: 1;
  padding: 14px;
`;

export default Primary;
