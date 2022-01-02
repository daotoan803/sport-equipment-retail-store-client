import { useState, useEffect } from 'react';
import auth from './apis/auth';
import LoginModal from './components/modal/LoginModal';
import SignupModal from './components/modal/SignupModal';
import Alert from './components/alert/Alert';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/ShopPage';
import AdminPage from './pages/admin/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    setIsLoggedIn(auth.isLoggedIn());
    setRole(auth.getRole());
  }, []);

  const toggleLoginModal = () => setOpenLoginModal(!openLoginModal);
  const toggleSignupModal = () => setOpenSignupModal(!openSignupModal);

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 1600);
  };

  const onLoginSuccess = (role = '') => {
    if (role) {
      setRole(role);
    }
    setIsLoggedIn(true);
    setOpenLoginModal(false);
    setOpenSignupModal(false);
    showAlert('Login successful 🎉');
  };

  const logout = () => {
    auth.logout();
    setIsLoggedIn(false);
    setRole('');
  };

  const headerProps = {
    isLoggedIn: isLoggedIn,
    toggleLoginModal: toggleLoginModal,
    toggleSignupModal: toggleSignupModal,
    logout: logout,
    role: role,
  };
  return (
    <>
      <LoginModal
        isOpen={openLoginModal}
        toggleLoginModal={toggleLoginModal}
        onLoginSuccess={onLoginSuccess}
      />
      <SignupModal
        isOpen={openSignupModal}
        toggleSignupModal={toggleSignupModal}
        onLoginSuccess={onLoginSuccess}
      />
      <Alert message={alertMessage} />
      <Routes>
        <Route path="/" exact element={<Shop {...headerProps} />}>
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
          <Route path="*" element={<NotFoundPage {...headerProps} />} />
        </Route>

        {isLoggedIn && role === auth.availableRole.admin && (
          <Route path={'/admin'} element={<AdminPage {...headerProps} />}>
            <Route path="product" element={<h1>This is admin product</h1>} />
            <Route path="*" element={<NotFoundPage {...headerProps} />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
