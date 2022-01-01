import React, { useState } from 'react';
import Overlay from './Overlay';
import Modal from './Modal';
import LabelInput from './../form/LabelInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import auth from './../../apis/auth';

const genderOptions = [
  { value: 'other', label: 'Other' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const SignupModal = ({ toggleSignupModal, onLoginSuccess }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [dobInput, setDobInput] = useState(new Date());
  const [passwordInput, setPasswordInput] = useState('');
  const [genderInput, setGenderInput] = useState(genderOptions[0].value);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: nameInput,
      email: emailInput,
      dob: dobInput,
      gender: genderInput,
      password: passwordInput,
    };
    const result = await auth.signup(userInfo);
    if (result.status === 200) {
      onLoginSuccess();
    }
  };

  return (
    <Overlay onClick={toggleSignupModal}>
      <Modal
        onCloseModalClick={toggleSignupModal}
        className="flex h-auto justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="w-11/12 min-h-96 flex flex-col gap-2 justify-between py-4">
          <LabelInput
            type="text"
            placeholder="Họ tên"
            label="Họ tên"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <LabelInput
            type="email"
            placeholder="Email"
            label="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
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
            <select
              name=""
              id="gender"
              className="input"
              value={genderInput}
              onChange={(e) => {
                console.log(e.target.value);
                setGenderInput(e.target.value);
              }}>
              {genderOptions.map((gender) => (
                <option value={gender.value} key={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
          </div>
          <LabelInput
            type="password"
            placeholder="Password"
            label="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <div className="flex justify-center mt-2">
            <button className="border-2 bg-primary rounded-3xl text-white px-5 py-2 font-bold hover:bg-white hover:border-primary hover:text-primary">
              Đăng nhập
            </button>
          </div>
        </form>
      </Modal>
    </Overlay>
  );
};

export default SignupModal;