import React from 'react';
import SecondaryButton from './../../components/button/SecondaryButton';
import { Outlet } from 'react-router-dom';
import AsideNavItem from './../../components/ui/AsideNavItem';

const ManageProductPage = () => {
  return (
    <>
      <nav className="flex">
        {/* <SecondaryButton>Tất cả sản phẩm</SecondaryButton>
        <SecondaryButton>Thêm sản phẩm</SecondaryButton>
        <SecondaryButton>Danh mục và nhãn hiệu</SecondaryButton> */}
        <AsideNavItem to="/admin/products/">Tất cả sản phẩm</AsideNavItem>
        <AsideNavItem to="/admin/products/new">Thêm sản phẩm</AsideNavItem>
        <AsideNavItem to="/admin/products/category-and-brand">
          Danh mục và nhãn hiệu
        </AsideNavItem>
        <div className="flex-grow bg-slate-200 border-b-2 border-black"></div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ManageProductPage;
