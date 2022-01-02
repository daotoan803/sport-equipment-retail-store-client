const variants = {
  hidden: {
    y: '-100vw',
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
    },
  },
  exit: { y: 1000 },
};

export default variants;
