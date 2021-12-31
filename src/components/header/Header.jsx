import { FcMenu } from 'react-icons/fc';
// import { MdOutlineAccountCircle } from 'react-icons/md';
import { useState, useEffect } from 'react';
import SearchBox from './../form/SearchBox';
import NavLinks from './NavLinks';
import AccountBtn from '../button/AccountBtn';
import CartBtn from './../button/CartBtn';
import Logo from './../Logo';

const Header = () => {
  const [collapseNavbar, setCollapseNavbar] = useState(true);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  });

  const resize = () => {
    setCollapseNavbar(window.innerWidth <= 1024);
  };

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <header className="sticky top-0 left-0 w-screen lg:flex justify-between items-center shadow-lg md:px-0 lg:px-20">
      <div className="flex justify-between px-3 py-4 lg:px-0  ">
        <Logo />
        {collapseNavbar && (
          <div className="flex gap-2">
            <div className="flex gap-3">
              <AccountBtn />
              <CartBtn />
            </div>
            <button
              onClick={toggleNavbar}
              className="rounded shadow-sm px-1 py-0 hover:ring ring-primary lg:hidden">
              <FcMenu className="text-3xl" />
            </button>
          </div>
        )}
      </div>
      {(openNavbar || !collapseNavbar) && (
        <>
          <SearchBox />
          <NavLinks collapseNavbar={collapseNavbar} />
        </>
      )}
    </header>
  );
};

export default Header;
