import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Logo.propTypes = {
  className: PropTypes.string,
};

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <p className={'uppercase text-3xl font-bold ' + className}>
        <span className="text-primary">VN</span>sport
      </p>
    </Link>
  );
};

export default Logo;
