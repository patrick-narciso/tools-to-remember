import { css } from 'styled-components';
import tokens from '../../tokens';

const HeadingLarge = css`
  line-height: 40px;
  font-size: ${tokens.fontSize('xl')};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: 600;
  letter-spacing: 0.72px;
  opacity: 1;
`;

export default HeadingLarge;
