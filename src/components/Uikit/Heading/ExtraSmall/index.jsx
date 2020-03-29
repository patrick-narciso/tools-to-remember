import { css } from 'styled-components';
import tokens from '../../tokens';

const HeadingExtraSmall = css`
  line-height: 30px;
  font-size: ${tokens.fontSize('xm')};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: 600;
  letter-spacing: 0.48px;
  opacity: 1;
`;

export default HeadingExtraSmall;
