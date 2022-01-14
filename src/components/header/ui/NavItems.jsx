import React from 'react';
import PropTypes from 'prop-types';

const NavItems = ({ children }) => {
  return (
    <div className="flex justify-center flex-col lg:flex-row divide-y lg:divide-x md:divide-y-0">
      {children}
    </div>
  );
};

export default NavItems;

NavItems.propTypes = {
  children: PropTypes.node.isRequired,
};
