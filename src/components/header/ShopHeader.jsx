import React, { useContext } from 'react';
import Header from './ui/Header';
import SearchBox from './../form/SearchBox';
import NavItems from './ui/NavItems';
import NavItem from './NavItem';
import auth from './../../apis/auth';
import AuthContext from './../../contexts/AuthContext';

const ShopHeader = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Header>
      <SearchBox />
      <NavItems>
        {authCtx.role === auth.availableRole.admin && (
          <NavItem to="/admin" name="Quản lý" />
        )}
        <NavItem to="/" name="Trang chủ" />
        <NavItem to="/products" name="Sản phẩm" />
        <NavItem to="/contact" name="Liên hệ" />
      </NavItems>
    </Header>
  );
};

export default ShopHeader;

ShopHeader.propTypes = {};
