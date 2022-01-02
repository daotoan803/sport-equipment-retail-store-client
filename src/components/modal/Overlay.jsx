import React from 'react';
import { motion } from 'framer-motion';
import animateProps from '../animation/animateProps';
import opacityVariant from '../animation/opacityVariant';

const Overlay = ({ children, onClick, customVariants = null }) => {
  return (
    <motion.div
      {...animateProps}
      variants={customVariants || opacityVariant}
      onClick={() => onClick()}
      className="fixed bg-gray-600/70 top-0 left-0 w-screen h-screen z-20 flex-center">
      {children}
    </motion.div>
  );
};

export default Overlay;
