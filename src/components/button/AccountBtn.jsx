import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const dropDownVariants = {
  hidden: { scale: 0, y: -70 },
  visible: { scale: 1, y: 0 },
  exit: { y: -70, scale: 0 },
};

const AccountBtn = ({ logout }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className="rounded-full p-1 border-2 border-primary text-primary hover:bg-primary hover:text-white">
          <AiOutlineUser className="text-3xl" />
        </button>
        <AnimatePresence>
          {openDropdown && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropDownVariants}
              className="absolute overflow-hidden rounded-2xl py-1 -bottom-20 -left-16 z-10 bg-primary min-w-[180px] flex flex-col items-center">
              <Link to="/user" className="dropdown-item">
                Tài khoản
              </Link>
              <button onClick={logout} className="dropdown-item">
                Đăng xuất
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AccountBtn;
