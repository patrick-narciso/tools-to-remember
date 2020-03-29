import { css } from 'styled-components';
import tokens from '../../tokens';

const HeadingExtraLarge = css`
  line-height: 50px;
  font-size: ${tokens.fontSize('xxl')};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: 600;
  letter-spacing: 0.84px;
  opacity: 1;
`;

export default HeadingExtraLarge;
