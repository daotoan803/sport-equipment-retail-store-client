import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: {
    y: '-100vw',
  },
  visible: {
    y: 0,
  },
  exit: { y: 1000 },
};

const Overlay = ({ children, onClick }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      onClick={() => onClick()}
      className="fixed bg-gray-600/70  top-0 left-0 w-screen h-screen z-20 flex justify-center items-center">
      {children}
    </motion.div>
  );
};

export default Overlay;
