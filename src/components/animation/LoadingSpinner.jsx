import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import animateProps from './animateProps';
import infinityRotateVariant from './variants/infinityRotateVariant';

const LoadingSpinner = () => {
  return (
    <motion.div {...animateProps} variants={infinityRotateVariant}>
      <AiOutlineLoading3Quarters className="text-2xl" />
    </motion.div>
  );
};

export default LoadingSpinner;
