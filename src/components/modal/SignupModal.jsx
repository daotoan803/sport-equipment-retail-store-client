import React, { useState } from 'react';
import Overlay from './ui/Overlay';
import Modal from './ui/Modal';
import LabelInput from './../form/LabelInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import auth from './../../apis/auth';
import flyInFromTopVariants from '../animation/variants/flyInFromTopVariant';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../animation/LoadingSpinner';
import LabelSelectInput from './../form/LabelSelectInput';
import PrimaryButton from './../button/PrimaryButton';

const genderOptions = [
  { value: 'other', label: 'Other' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const SignupModal = ({ toggleSignupModal, onLoginSuccess, isOpen }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [dobInput, setDobInput] = useState(new Date());
  const [passwordInput, setPasswordInput] = useState('');
  const [genderInput, setGenderInput] = useState(genderOptions[0].value);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const [loading, setLoading] = useState(false);

  const clearInput = () => {
    setNameInput('');
    setEmailInput('');
    setPasswordInput('');
    clearError();
  };

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
    setNameError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    clearError();
    setLoading(true);
    const userInfo = {
      name: nameInput,
      email: emailInput,
      dob: dobInput,
      gender: genderInput,
      password: passwordInput,
    };
    const result = await auth.signup(userInfo);
    setLoading(false);
    if (result.status === 200) {
      clearInput();
      return onLoginSuccess();
    }
    if (result.status === 409) {
      setEmailError(result.data.error);
    }

    if (result.status === 400) {
      setEmailError(result.data.email || '');
      setPasswordError(result.data.password || '');
      setNameError(result.data.name || '');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          onClick={toggleSignupModal}
          customVariants={flyInFromTopVariants}>
          <Modal
            onCloseModalClick={toggleSignupModal}
            className="flex-center h-auto">
            <form
              onSubmit={onSubmit}
              className="w-11/12 min-h-96 flex flex-col gap-2 justify-between py-4">
              <LabelInput
                type="text"
                placeholder="Họ tên"
                label="Họ tên"
                value={nameInput}
                onChange={(e) => {
                  setNameError('');
                  setNameInput(e.target.value);
                }}
                error={nameError}
                required={true}
              />
              <LabelInput
                type="email"
                placeholder="Email"
                label="Email"
                value={emailInput}
                onChange={(e) => {
                  setEmailError('');
                  setEmailInput(e.target.value);
                }}
                error={emailError}
              />
              <div className="sm:flex justify-start items-center gap-3 my-3">
                <label htmlFor="date" className="font-bold">
                  Sinh nhật
                </label>
                <div>
                  <DatePicker
                    className="input"
                    id="date"
                    selected={dobInput}
                    onChange={(date) => setDobInput(date)}
                  />
                </div>
                <label htmlFor="gender" className="font-bold sm:mt-0 sm:ml-4 ">
                  Giới tính
                </label>
                <br />
                <LabelSelectInput
                  value={genderInput}
                  options={genderOptions}
                  onChange={(e) => {
                    setGenderInput(e.target.value);
                  }}
                />
              </div>
              <LabelInput
                type="password"
                placeholder="Password"
                label="Password"
                value={passwordInput}
                onChange={(e) => {
                  setEmailError('');
                  setPasswordInput(e.target.value);
                }}
                error={passwordError}
                required={true}
              />
              <div className="flex justify-center mt-2">
                <PrimaryButton>
                  {!loading && 'Đăng nhập'}
                  {loading && <LoadingSpinner />}
                </PrimaryButton>
              </div>
            </form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
