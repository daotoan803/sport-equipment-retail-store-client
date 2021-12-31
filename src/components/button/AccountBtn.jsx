import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const AccountBtn = () => {
  return (
    <button className="rounded-full p-1 border-2 border-primary text-primary hover:bg-primary hover:text-white">
      <AiOutlineUser className="text-3xl" />
    </button>
  );
};

export default AccountBtn;
