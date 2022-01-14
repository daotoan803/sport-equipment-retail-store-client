import React from 'react';
import Header from './ui/Header';
import NavItems from './ui/NavItems';
import NavItem from './NavItem';

const AdminHeader = () => {
  return (
    <Header showCartButton={false}>
      <NavItems>
        <NavItem to="/admin/iexport" name="Xuất nhập kho" />
        <NavItem to="/admin/products/" name="Quản lý sản phẩm" />
        <NavItem to="/admin/orders" name="Quản lý đơn hàng" />
        <NavItem to="/admin/chat" name="Tư vấn khách hàng" />
        <NavItem to="/admin/warranty" name="Yêu cầu bảo hành" />
      </NavItems>
    </Header>
  );
};

export default AdminHeader;
