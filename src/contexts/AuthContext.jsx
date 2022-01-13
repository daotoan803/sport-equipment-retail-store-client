import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import auth from '../apis/auth';

const AuthContext = createContext({
  isLoggedIn: false,
  role: '',
  // eslint-disable-next-line no-unused-vars
  login: (role = '') => {},
  logout: () => {},
});
export default AuthContext;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    setIsLoggedIn(auth.isLoggedIn());
    setRole(auth.getRole());
  }, []);

  const login = (role = '') => {
    if (role && !Object.values(auth.availableRole).includes(role))
      throw new Error(`Invalid role ${role}`);
    setRole(role || '');
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
