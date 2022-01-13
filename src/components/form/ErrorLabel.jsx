import React from 'react';
import { motion } from 'framer-motion';
import shakingVariant from '../animation/variants/shakingVariant';
import animateProps from './../animation/animateProps';
import PropTypes from 'prop-types';

ErrorLabel.propTypes = {
  message: PropTypes.string.isRequired,
};

const ErrorLabel = ({ message }) => {
  return (
    <>
      {message && (
        <motion.p
          {...animateProps}
          variants={shakingVariant}
          className="font-bold text-red-500">
          {message}
        </motion.p>
      )}
    </>
  );
};

export default ErrorLabel;
