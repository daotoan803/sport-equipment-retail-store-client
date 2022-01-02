import React from 'react';
import { Link } from 'react-router-dom';

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
