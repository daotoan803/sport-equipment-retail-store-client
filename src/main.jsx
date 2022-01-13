import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { AlertContextProvider } from './contexts/AlertContext';
import { LoginModalContextProvider } from './contexts/LoginModalContext';
import { SignupModalContextProvider } from './contexts/SignupModalContext';
import {CartContextProvider } from './contexts/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AlertContextProvider>
          <LoginModalContextProvider>
            <SignupModalContextProvider>
              <CartContextProvider>
              <App />
              </CartContextProvider>
            </SignupModalContextProvider>
          </LoginModalContextProvider>
        </AlertContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
