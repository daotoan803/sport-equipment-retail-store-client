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

  return (
    <header className="sticky z-10 top-0 w-screen bg-white py-2 px-2">
      <div className="gap-2 grid grid-cols-4 lg:grid-cols-12 grid-flow-row-dense container mx-auto">
        {/* LOGO */}
        <div className="col-span-2  justify-start gap-2 flex-center">
          <button
            onClick={toggleNavbar}
            className="rounded inline shadow-sm px-1 py-0 hover:ring ring-primary lg:hidden">
            <FcMenu className="text-3xl" />
          </button>
          <Logo className="text-2xl lg:text-3xl" />
        </div>
        {/* NavItems */}
        <AnimatePresence>
          {(openNavbar || !navbarIsCollapsed) && (
            <motion.div
              className="col-span-4 lg:col-span-8 lg:flex lg:justify-around gap-2 "
              {...animateProps}
              variants={openMenuVariants}
              onClick={closeNavbar}>
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="col-start-4 lg:col-start-12 flex-center gap-2">
          <AuthButtonsGroup showCartButton={showCartButton} />
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  showCartButton: PropTypes.bool,
};
