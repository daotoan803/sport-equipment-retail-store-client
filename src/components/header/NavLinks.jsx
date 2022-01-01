import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthButtonsGroup from './AuthButtonsGroup';

const NavLinks = ({
  navbarIsCollapsed,
  isLoggedIn,
  toggleLoginModal,
  toggleSignupModal,
  logout,
  toggleCart
}) => {
  return (
    <div className="lg:flex gap-2">
      <NavLinkItem to="/" name="Trang chủ" />
      <NavLinkItem to="/products" name="Sản phẩm" />
      <NavLinkItem to="/contact" name="Liên hệ" />
      {!navbarIsCollapsed && (
        <AuthButtonsGroup
          isLoggedIn={isLoggedIn}
          toggleLoginModal={toggleLoginModal}
          toggleSignupModal={toggleSignupModal}
          logout={logout}
          toggleCart={toggleCart}
        />
      )}
    </div>
  );
};

export default NavLinks;

const NavLinkItem = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'text-primary font-bold' : '')}>
      <p className="w-screen py-2  text-center text-lg border-b border-slate-300 hover:bg-slate-300 lg:border-0 lg:px-4 lg:w-auto lg:rounded-xl">
        {name}
      </p>
    </NavLink>
  );
};
