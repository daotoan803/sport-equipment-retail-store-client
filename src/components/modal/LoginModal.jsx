import React, { useState } from 'react';
import Modal from './ui/Modal';
import Overlay from './ui/Overlay';
import LabelInput from './../form/LabelInput';
import auth from './../../apis/auth';
import flyInFromTopVariants from '../animation/flyInFromTopVariant';

const LoginModal = ({ toggleLoginModal, onLoginSuccess }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginFail, setLoginFail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginResult = await auth.logIn(emailInput, passwordInput);
    if (loginResult) {
      return onLoginSuccess(loginResult.role || null);
    }
    if (loginResult.status === 400) {
      setLoginFail(true);
    }
  };

  return (
    <>
      <Overlay onClick={toggleLoginModal} customVariants={flyInFromTopVariants}>
        <Modal
          onCloseModalClick={toggleLoginModal}
          className="flex justify-center items-center ">
          <form
            onSubmit={onSubmit}
            className="w-11/12 h-52 flex flex-col justify-between">
            <LabelInput
              type="email"
              placeholder="Email"
              label="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required={true}
            />
            <LabelInput
              type="password"
              placeholder="Password"
              label="Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required={true}
            />
            <div className="flex flex-col items-center justify-center">
              {loginFail && (
                <p className="text-red-500 font-semibold ">
                  Email hoặc mật khẩu không chính xác !
                </p>
              )}
              <button className="border-2 bg-primary rounded-3xl text-white px-5 py-2 font-bold hover:bg-white hover:border-primary hover:text-primary">
                Đăng nhập
              </button>
            </div>
          </form>
        </Modal>
      </Overlay>
    </>
  );
};

export default LoginModal;
