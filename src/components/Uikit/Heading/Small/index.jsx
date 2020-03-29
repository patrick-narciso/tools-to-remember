import { css } from 'styled-components';
import tokens from '../../tokens';

const HeadingSmall = css`
  line-height: 32px;
  font-size: ${tokens.fontSize('m')};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: 600;
  letter-spacing: 0.52px;
  opacity: 1;
`;

export default HeadingSmall;
