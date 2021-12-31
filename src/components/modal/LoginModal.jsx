import React from 'react';
import Modal from './Modal';
import Overlay from './Overlay';
import Input from './../form/Input';
import { AiOutlineClose } from 'react-icons/ai';
import LabelInput from './../form/LabelInput';

const LoginModal = ({ toggleLoginModal }) => {
  return (
    <Overlay onClick={toggleLoginModal}>
      <Modal className="h-72 bg-white flex justify-center items-center w-screen sm:mx-8 md:w-3/4 md:mx-auto lg:w-1/2 relative">
        <button
          onClick={toggleLoginModal}
          className="absolute top-4 right-6 hover:text-primary">
          <AiOutlineClose className="text-3xl" />
        </button>
        <form className="w-11/12 h-3/4 flex flex-col justify-between">
          <LabelInput type="email" placeholder="Email" label="Email" />
          <LabelInput type="password" placeholder="Password" label="Password" />
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
