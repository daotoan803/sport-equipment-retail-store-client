import React from 'react';
import PropTypes from 'prop-types';

const NavLinks = ({ children }) => {
  return <div className="lg:flex gap-2">{children}</div>;
};

export default NavLinks;

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
};
