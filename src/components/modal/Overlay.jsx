import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const Overlay = ({ children, onClick, customVariants=null }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={customVariants || variants}
      onClick={() => onClick()}
      className="fixed bg-gray-600/70  top-0 left-0 w-screen h-screen z-20 flex justify-center items-center">
      {children}
    </motion.div>
  );
};

export default Overlay;
