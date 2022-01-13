import React, { useContext } from 'react';
import Header from './ui/Header';
import SearchBox from './../form/SearchBox';
import NavLinks from './ui/NavLinks';
import NavLinkItem from './NavLinkItem';
import auth from './../../apis/auth';
import AuthContext from './../../contexts/AuthContext';

const ShopHeader = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Header>
      <SearchBox />
      <NavLinks>
        {authCtx.role === auth.availableRole.admin && (
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

ShopHeader.propTypes = {};
