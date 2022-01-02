import React from 'react';
import { motion } from 'framer-motion';
import flyInFromTopVariants from '../animation/flyInFromTopVariant';
import animateProps from '../animation/animateProps';

const Alert = ({ message }) => {
  return (
    <motion.div
      {...animateProps}
      exit={{ y: -1000 }}
      variants={flyInFromTopVariants}
      className="w-full flex-center z-[1000] h-auto fixed top-6 left-0">
      <div className="rounded-2xl bg-green-400 px-5 py-3">
        <p className="text-xl font-bold">{message}</p>
      </div>
    </motion.div>
  );
};

export default Alert;
