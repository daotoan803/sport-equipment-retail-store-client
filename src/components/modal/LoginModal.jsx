import React, { useState } from 'react';
import Modal from './ui/Modal';
import Overlay from './ui/Overlay';
import LabelInput from './../form/LabelInput';
import auth from './../../apis/auth';
import flyInFromTopVariants from '../animation/variants/flyInFromTopVariant';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './../animation/LoadingSpinner';
import animateProps from '../animation/animateProps';
import shakingVariant from './../animation/variants/shakingVariant';

const LoginModal = ({ toggleLoginModal, onLoginSuccess, isOpen }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginFail, setLoginFail] = useState('');
  const [loading, setLoading] = useState('');

  const clearInput = () => {
    setEmailInput('');
    setPasswordInput('');
    setLoginFail('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setLoginFail(false);
    const loginResult = await auth.logIn(emailInput, passwordInput);
    setLoading(false);
    if (loginResult.status === 200) {
      clearInput();
      return onLoginSuccess(loginResult.role || null);
    }
    if (loginResult.status === 400) {
      setLoginFail(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          onClick={toggleLoginModal}
          customVariants={flyInFromTopVariants}>
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
                onChange={(e) => {
                  setLoginFail(false);
                  setEmailInput(e.target.value);
                }}
                required={true}
              />
              <LabelInput
                type="password"
                placeholder="Password"
                label="Password"
                value={passwordInput}
                onChange={(e) => {
                  setLoginFail(false);
                  setPasswordInput(e.target.value);
                }}
                required={true}
              />
              <div className="flex flex-col items-center justify-center">
                {loginFail && (
                  <motion.p
                    {...animateProps}
                    variants={shakingVariant}
                    className={'text-red-500 font-semibold '}>
                    Email hoặc mật khẩu không chính xác !
                  </motion.p>
                )}
                <button className="border-2 bg-primary rounded-3xl text-white px-5 py-2 font-bold hover:bg-white hover:border-primary hover:text-primary">
                  {!loading && 'Đăng nhập'}
                  {loading && <LoadingSpinner />}
                </button>
              </div>
            </form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
