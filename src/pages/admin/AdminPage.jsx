import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './../../components/header/AdminHeader';
import MainWrapper from './../../components/ui/MainWrapper';

const AdminPage = () => {
  return (
    <>
      <AdminHeader />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default AdminPage;
