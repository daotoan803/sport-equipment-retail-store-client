const infinityRotateVariant = {
  hidden: {},
  visible: {
    rotate: 360,
    transition: {
      duration: 0.7,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  exit: {},
};

export default infinityRotateVariant;
