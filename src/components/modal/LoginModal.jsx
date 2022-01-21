import React, { useState, useContext } from 'react';
import Modal from './ui/Modal';
import Overlay from './ui/Overlay';
import LabelInput from './../form/LabelInput';
import auth from './../../apis/auth';
import flyInFromTopVariants from '../animation/variants/flyInFromTopVariant';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './../animation/LoadingSpinner';
import animateProps from '../animation/animateProps';
import shakingVariant from './../animation/variants/shakingVariant';
import AuthContext from './../../contexts/AuthContext';
import PropTypes from 'prop-types';
import PrimaryButton from './../button/PrimaryButton';
import AlertContext from './../../contexts/AlertContext';

const LoginModal = ({ toggleLoginModal, isOpen }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginFail, setLoginFail] = useState('');
  const [loading, setLoading] = useState('');

  const authCtx = useContext(AuthContext);
  const alertCtx = useContext(AlertContext);

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
      alertCtx.showAlert('Login success 🎉');
      toggleLoginModal();
      return authCtx.login(loginResult.role || '');
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
          <Modal onCloseModalClick={toggleLoginModal} className="">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form
              onSubmit={onSubmit}
              className="mx-auto w-11/12 h-52 flex flex-col justify-between">
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
                <PrimaryButton>
                  {!loading ? 'Đăng nhập' : <LoadingSpinner />}
                </PrimaryButton>
              </div>
            </form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;

LoginModal.propTypes = {
  toggleLoginModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
