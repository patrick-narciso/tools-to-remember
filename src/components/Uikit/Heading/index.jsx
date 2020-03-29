import PropTypes from 'prop-types';
import React from 'react';
import HeadingBase from './Base';

const Heading = ({ children, size }) => (
  <HeadingBase as={`h${size}`} size={size}>
    {children}
  </HeadingBase>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  size: PropTypes.number.isRequired,
};

Heading.defaultProps = {
  children: null,
};

export default Heading;
