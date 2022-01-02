import React from 'react';
import Header from './ui/Header';
import SearchBox from './../form/SearchBox';
import NavLinks from './ui/NavLinks';
import NavLinkItem from './NavLinkItem';
import auth from './../../apis/auth';

const ShopHeader = ({
  isLoggedIn,
  toggleLoginModal,
  toggleSignupModal,
  logout,
  toggleCart,
  role,
}) => {
  return (
    <Header
      toggleLoginModal={toggleLoginModal}
      toggleSignupModal={toggleSignupModal}
      isLoggedIn={isLoggedIn}
      logout={logout}
      toggleCart={toggleCart}>
      <SearchBox />
      <NavLinks>
        {role === auth.availableRole.admin && (
          <NavLinkItem to="/admin" name="Quản lý" />
        )}
        <NavLinkItem to="/" name="Trang chủ" />
        <NavLinkItem to="/products" name="Sản phẩm" />
        <NavLinkItem to="/contact" name="Liên hệ" />
      </NavLinks>
    </Header>
  );
};

export default ShopHeader;
