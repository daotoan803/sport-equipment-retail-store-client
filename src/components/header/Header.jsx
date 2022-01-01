import { FcMenu } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import SearchBox from './../form/SearchBox';
import NavLinks from './NavLinks';
import Logo from './../Logo';
import AuthButtonsGroup from './AuthButtonsGroup';
import { motion, AnimatePresence } from 'framer-motion';

const openMenuVariants = {
  hidden: { height: 0 },
  visible: { height: 'auto' },
  exit: { height: 0, overflow: 'hidden' },
};

const Header = ({ isLoggedIn, toggleLoginModal, toggleSignupModal }) => {
  const [navbarIsCollapsed, setNavbarIsCollapsed] = useState(true);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  });

  const resize = () => {
    setNavbarIsCollapsed(window.innerWidth <= 1024);
  };

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <header className="sticky z-10 top-0 left-0 w-screen bg-white lg:flex justify-between items-center shadow-lg md:px-0 lg:px-20">
      <div className="flex justify-between px-3 py-4 lg:px-0  ">
        <Logo />
        {navbarIsCollapsed && (
          <div className="flex gap-2">
            <AuthButtonsGroup
              isLoggedIn={isLoggedIn}
              toggleLoginModal={toggleLoginModal}
              toggleSignupModal={toggleSignupModal}
            />
            <button
              onClick={toggleNavbar}
              className="rounded shadow-sm px-1 py-0 hover:ring ring-primary lg:hidden">
              <FcMenu className="text-3xl" />
            </button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {(openNavbar || !navbarIsCollapsed) && (
          <motion.div
            className="lg:flex justify-betweens"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={openMenuVariants}>
            <SearchBox />
            <NavLinks
              toggleLoginModal={toggleLoginModal}
              toggleSignupModal={toggleSignupModal}
              navbarIsCollapsed={navbarIsCollapsed}
              isLoggedIn={isLoggedIn}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
