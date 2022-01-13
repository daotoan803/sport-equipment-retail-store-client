import React from 'react';
import Header from './ui/Header';
import NavLinks from './ui/NavLinks';
import NavLinkItem from './NavLinkItem';

const AdminHeader = () => {
  return (
    <Header showCartButton={false}>
      <NavLinks>
        <NavLinkItem to="/admin/iexport" name="Xuất nhập kho" />
        <NavLinkItem to="/admin/products/" name="Quản lý sản phẩm" />
        <NavLinkItem to="/admin/orders" name="Quản lý đơn hàng" />
        <NavLinkItem to="/admin/chat" name="Tư vấn khách hàng" />
        <NavLinkItem to="/admin/warranty" name="Yêu cầu bảo hành" />
      </NavLinks>
    </Header>
  );
};

export default AdminHeader;
