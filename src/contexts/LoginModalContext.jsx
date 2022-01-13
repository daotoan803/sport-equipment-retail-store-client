import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import LoginModal from './../components/modal/LoginModal';

const LoginModalContext = createContext({
  toggleLoginModal() {},
});
export default LoginModalContext;

LoginModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LoginModalContextProvider = ({ children }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const toggleLoginModal = () => setOpenLoginModal(!openLoginModal);

  return (
    <LoginModalContext.Provider value={{ toggleLoginModal }}>
      <LoginModal isOpen={openLoginModal} toggleLoginModal={toggleLoginModal} />
      {children}
    </LoginModalContext.Provider>
  );
};
