import React from 'react';
import PropTypes from 'prop-types';

NavLinks.propTypes = {
  children: PropTypes.node.isRequired,
};

const NavLinks = ({ children }) => {
  return <div className="lg:flex gap-2">{children}</div>;
};

export default NavLinks;
