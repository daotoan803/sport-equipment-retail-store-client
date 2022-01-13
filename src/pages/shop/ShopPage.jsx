import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopHeader from '../../components/header/ShopHeader';
import MainWrapper from './../../components/ui/MainWrapper';

const ShopPage = () => {
  return (
    <>
      <ShopHeader />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default ShopPage;

ShopPage.propTypes = {};
