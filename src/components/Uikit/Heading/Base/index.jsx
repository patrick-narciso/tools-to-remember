import styled from 'styled-components';
import HeadingExtraLarge from '../ExtraLarge';
import HeadingLarge from '../Large';
import HeadingMedium from '../Medium';
import HeadingSmall from '../Small';
import HeadingExtraSmall from '../ExtraSmall';
import tokens from '../../tokens';

const BaseHeading = styled.span`
  color: ${tokens.color('ink', 'base')};
  transition: all 250ms ease-in-out;

  ${props => props.size === 1 && HeadingExtraLarge}
  ${props => props.size === 2 && HeadingLarge}
  ${props => props.size === 3 && HeadingMedium}
  ${props => props.size === 4 && HeadingSmall}
  ${props => props.size === 5 && HeadingExtraSmall}
`;

export default BaseHeading;
