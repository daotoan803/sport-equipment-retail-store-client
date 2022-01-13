import { FcMenu } from 'react-icons/fc';
import React, { useState, useEffect } from 'react';
import Logo from '../../Logo';
import AuthButtonsGroup from '../AuthButtonsGroup';
import { motion, AnimatePresence } from 'framer-motion';
import animateProps from '../../animation/animateProps';
import PropTypes from 'prop-types';

const openMenuVariants = {
  hidden: { height: 0 },
  visible: { height: 'auto' },
  exit: { height: 0, overflow: 'hidden' },
};
const Header = ({ children, showCartButton = true }) => {
  const [navbarIsCollapsed, setNavbarIsCollapsed] = useState(true);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const resize = () => {
    setNavbarIsCollapsed(window.innerWidth <= 1024);
  };

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const closeNavbar = (e) => {
    if (!e.target.href && !e.target.parentElement.href) return;
    setOpenNavbar(!openNavbar);
  };

  const authButtonGroupProps = {
    showCartButton: showCartButton,
  };

  return (
    <header className="sticky z-10 top-0 left-0 w-screen bg-white lg:flex justify-between items-center shadow-lg md:px-0 lg:px-20">
      <div className="flex justify-between px-3 py-4 lg:px-0  ">
        {navbarIsCollapsed && (
          <button
            onClick={toggleNavbar}
            className="rounded shadow-sm px-1 py-0 hover:ring ring-primary lg:hidden">
            <FcMenu className="text-3xl" />
          </button>
        )}
        <Logo />
        {navbarIsCollapsed && (
          <div className="flex gap-2">
            <AuthButtonsGroup {...authButtonGroupProps} />
          </div>
        )}
      </div>
      <AnimatePresence>
        {(openNavbar || !navbarIsCollapsed) && (
          <motion.div
            className="lg:flex justify-betweens gap-10"
            {...animateProps}
            variants={openMenuVariants}
            onClick={closeNavbar}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {!navbarIsCollapsed && <AuthButtonsGroup {...authButtonGroupProps} />}
    </header>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  showCartButton: PropTypes.bool,
};
