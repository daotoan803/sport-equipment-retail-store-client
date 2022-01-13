import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Alert from './../components/alert/Alert';

const AlertContext = createContext({
  // eslint-disable-next-line no-unused-vars
  showAlert(message) {},
});
export default AlertContext;

export const AlertContextProvider = ({ children }) => {
  const [message, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 1600);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <Alert message={message} />
      {children}
    </AlertContext.Provider>
  );
};

AlertContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
