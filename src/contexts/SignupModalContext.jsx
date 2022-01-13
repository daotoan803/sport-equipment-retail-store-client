import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import SignupModal from './../components/modal/SignupModal';

const SignupModalContext = createContext({
  toggleSignupModal() {},
});
export default SignupModalContext;

SignupModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SignupModalContextProvider = ({ children }) => {
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const toggleSignupModal = () => setOpenSignupModal(!openSignupModal);

  return (
    <SignupModalContext.Provider value={{ toggleSignupModal }}>
      <SignupModal
        isOpen={openSignupModal}
        toggleSignupModal={toggleSignupModal}
      />
      {children}
    </SignupModalContext.Provider>
  );
};
