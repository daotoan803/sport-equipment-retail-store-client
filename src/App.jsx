import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import auth from './apis/auth';
import { Route, Routes } from 'react-router-dom';
import LoginModal from './components/modal/LoginModal';
import SignupModal from './components/modal/SignupModal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  useEffect(() => {
    setIsLoggedIn(auth.isLoggedIn());
  }, []);

  const toggleLoginModal = () => setOpenLoginModal(!openLoginModal);
  const toggleSignupModal = () => setOpenSignupModal(!openSignupModal);

  const onLoginSuccess = () => {
    setIsLoggedIn(true);
    setOpenLoginModal(false);
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
        {openSignupModal && !isLoggedIn && (
          <SignupModal
            toggleSignupModal={toggleSignupModal}
            onLoginSuccess={onLoginSuccess}
          />
        )}
      </AnimatePresence>
      <Header
        isLoggedIn={isLoggedIn}
        toggleLoginModal={toggleLoginModal}
        toggleSignupModal={toggleSignupModal}
      />
      <Routes>
        <Route path={'/'} exact element={<h1>Hello world</h1>} />
      </Routes>
    </>
  );
}

export default App;
