import { useState, useEffect } from 'react';
import auth from './apis/auth';
import LoginModal from './components/modal/LoginModal';
import SignupModal from './components/modal/SignupModal';
import { AnimatePresence } from 'framer-motion';
import Alert from './components/alert/Alert';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/ShopPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    setIsLoggedIn(auth.isLoggedIn());
    setRole(auth.getRole());
  }, []);

  const toggleLoginModal = () => setOpenLoginModal(!openLoginModal);
  const toggleSignupModal = () => setOpenSignupModal(!openSignupModal);

  const showAlert = (message) => {
    setIsShowingAlert(true);
    setAlertMessage(message);
    setTimeout(() => {
      setIsShowingAlert(false);
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
  return (
    <>
      <AnimatePresence>
        {openLoginModal && !isLoggedIn && (
          <LoginModal
            toggleLoginModal={toggleLoginModal}
            onLoginSuccess={onLoginSuccess}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openSignupModal && !isLoggedIn && (
          <SignupModal
            toggleSignupModal={toggleSignupModal}
            onLoginSuccess={onLoginSuccess}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isShowingAlert && <Alert message={alertMessage} />}
      </AnimatePresence>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Shop
              isLoggedIn={isLoggedIn}
              toggleLoginModal={toggleLoginModal}
              toggleSignupModal={toggleSignupModal}
              logout={logout}
              role={role}
            />
          }
        />

        <Route
          path={'admin'}
          element={
            isLoggedIn && role === auth.availableRole.admin && <AdminPage />
          }
        />

        <Route
          path="*"
          element={
            <NotFoundPage
              isLoggedIn={isLoggedIn}
              toggleLoginModal={toggleLoginModal}
              toggleSignupModal={toggleSignupModal}
              logout={logout}
              role={role}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
