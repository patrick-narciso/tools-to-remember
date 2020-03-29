import { css } from 'styled-components';
import tokens from '../../tokens';

const buttonTypes = {
  neutral: {
    regular: {
      background: tokens.color('blue', 'mostLightest'),
      color: tokens.color('blue', 'base'),
    },
    hover: {
      background: tokens.color('blue', 'lightest'),
      color: tokens.color('blue', 'base'),
    },
    click: {
      background: tokens.color('blue', 'lighter'),
      color: tokens.color('blue', 'base'),
    },
    disabled: {
      background: tokens.color('blue', 'mostLightest'),
      color: tokens.color('blue', 'lighter'),
    },
  },
  success: {
    regular: {
      background: tokens.color('green', 'mostLightest'),
      color: tokens.color('green', 'base'),
    },
    hover: {
      background: tokens.color('green', 'lightest'),
      color: tokens.color('green', 'base'),
    },
    click: {
      background: tokens.color('green', 'lighter'),
      color: tokens.color('green', 'base'),
    },
    disabled: {
      background: tokens.color('green', 'mostLightest'),
      color: tokens.color('green', 'light'),
    },
  },
  danger: {
    regular: {
      background: tokens.color('red', 'mostLightest'),
      color: tokens.color('red', 'base'),
    },
    hover: {
      background: tokens.color('red', 'lightest'),
      color: tokens.color('red', 'base'),
    },
    click: {
      background: tokens.color('red', 'lighter'),
      color: tokens.color('red', 'base'),
    },
    disabled: {
      background: tokens.color('red', 'mostLightest'),
      color: tokens.color('red', 'light'),
    },
  },
};

const Terciary = css`
  background-color: ${({ color }) => buttonTypes[color].regular.background};

  &:hover {
    background-color: ${({ color }) => buttonTypes[color].hover.background};
  }

  &:active {
    background-color: ${({ color }) => buttonTypes[color].click.background};
  }

  &:disabled {
    background-color: ${({ color }) => buttonTypes[color].disabled.background};
    color: ${({ color }) => buttonTypes[color].disabled.color};
  }

  font-size: ${tokens.fontSize('s')};
  font-family: ${tokens.get('type.regularFontFamily')};
  color: ${({ color }) => buttonTypes[color].regular.color};
  letter-spacing: 0.36px;
  line-height: 24px;
  border-radius: 5px;
  opacity: 1;
  padding: 6px;
`;

export default Terciary;
