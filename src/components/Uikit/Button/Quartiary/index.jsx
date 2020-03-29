import { css } from 'styled-components';
import tokens from '../../tokens';

const buttonTypes = {
  neutral: {
    regular: {
      color: tokens.color('blue', 'base'),
    },
    hover: {
      color: tokens.color('blue', 'base'),
    },
    click: {
      color: tokens.color('blue', 'base'),
    },
    disabled: {
      color: tokens.color('blue', 'lighter'),
    },
  },
  success: {
    regular: {
      color: tokens.color('green', 'base'),
    },
    hover: {
      color: tokens.color('green', 'base'),
    },
    click: {
      color: tokens.color('green', 'base'),
    },
    disabled: {
      color: tokens.color('green', 'light'),
    },
  },
  danger: {
    regular: {
      color: tokens.color('red', 'base'),
    },
    hover: {
      color: tokens.color('red', 'base'),
    },
    click: {
      color: tokens.color('red', 'base'),
    },
    disabled: {
      color: tokens.color('red', 'light'),
    },
  },
};

const Quartiary = css`
  background-color: none;

  &:disabled {
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

export default Quartiary;
