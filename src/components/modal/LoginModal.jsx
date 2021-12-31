import React, { useState } from 'react';
import Modal from './Modal';
import Overlay from './Overlay';
import { AiOutlineClose } from 'react-icons/ai';
import LabelInput from './../form/LabelInput';
import auth from './../../apis/auth';

const LoginModal = ({ toggleLoginModal, onLoginSuccess }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const isLoginSuccess = await auth.logIn(emailInput, passwordInput);
    if (isLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <Overlay onClick={toggleLoginModal}>
      <Modal className="h-80 bg-white flex justify-center items-center w-screen sm:mx-8 md:w-3/4 md:mx-auto lg:w-2/3 lg:px-6 relative ">
        <button
          onClick={toggleLoginModal}
          className="absolute top-4 right-6 hover:text-primary">
          <AiOutlineClose className="text-3xl" />
        </button>
        <form
          onSubmit={onSubmit}
          className="w-11/12 h-3/4 flex flex-col justify-between">
          <LabelInput
            type="email"
            placeholder="Email"
            label="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <LabelInput
            type="password"
            placeholder="Password"
            label="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <div className="flex justify-center">
            <button className="border-2 bg-primary rounded-3xl text-white px-5 py-2 font-bold hover:bg-white hover:border-primary hover:text-primary">
              Đăng nhập
            </button>
          </div>
        </form>
      </Modal>
    </Overlay>
  );
};

export default LoginModal;
