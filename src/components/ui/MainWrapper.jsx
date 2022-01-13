import React from 'react';
import PropTypes from 'prop-types';

const MainWrapper = ({ children }) => {
  return (
    <main className="flex-center flex-col w-screen">
      <div className="w-full bg-white my-2 sm:w-11/12 md:w-5/6 lg:w-4/5 lg:my-5">
        {children}
      </div>
    </main>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node,
};

export default MainWrapper;
