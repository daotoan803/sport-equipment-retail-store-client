import React, { useContext } from 'react';
import auth from './apis/auth';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/ShopPage';
import AdminPage from './pages/admin/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import ManageProductPage from './pages/admin/ManageProductPage';
import AddProduct from './pages/admin/product/AddProduct';
import AuthContext from './contexts/AuthContext';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Shop />}>
          <Route path={'/'} exact element={<h1>Hello world</h1>} />
          <Route
            path={'/products'}
            exact
            element={<h1>Đây là trang sản phẩm</h1>}
          />
          <Route
            path={'/contact'}
            exact
            element={<h1>Đây là trang liên hệ</h1>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {authCtx.isLoggedIn && authCtx.role === auth.availableRole.admin && (
          <Route path={'/admin'} element={<AdminPage />}>
            <Route path="products" element={<ManageProductPage />}>
              <Route path="" exact element={<></>} />
              <Route path="new" element={<AddProduct />} />
              <Route
                path="category-and-brand"
                element={<h1>Brand and category</h1>}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
