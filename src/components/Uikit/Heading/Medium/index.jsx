import { css } from 'styled-components';
import tokens from '../../tokens';

const HeadingMedium = css`
  line-height: 36px;
  font-size: ${tokens.fontSize('l')};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: 600;
  letter-spacing: 0.6px;
  opacity: 1;
`;

export default HeadingMedium;
