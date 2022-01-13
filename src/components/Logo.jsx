import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <p className={'uppercase text-3xl font-bold ' + className}>
        <span className="text-primary">VN</span>sport
      </p>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
