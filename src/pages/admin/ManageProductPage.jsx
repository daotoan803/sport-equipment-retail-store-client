import React from 'react';
import { Outlet } from 'react-router-dom';
import AsideNavItem from './../../components/ui/AsideNavItem';

const ManageProductPage = () => {
  return (
    <>
      <nav className="flex">
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
