import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './../../components/header/AdminHeader';

const AdminPage = ({ isLoggedIn, logout }) => {
  return (
    <>
      <AdminHeader isLoggedIn={isLoggedIn} logout={logout} />
      <Outlet />
    </>
  );
};

export default AdminPage;
