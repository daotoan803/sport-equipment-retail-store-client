import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import auth from './apis/auth';
import { Route, Routes } from 'react-router-dom';
import LoginModal from './components/modal/LoginModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  useEffect(() => {
    setIsLoggedIn(auth.isLoggedIn());
  }, []);

  const toggleLoginModal = () => {
    console.log('active');
    setOpenLoginModal(!openLoginModal);
  };

  return (
    <>
      {openLoginModal && <LoginModal toggleLoginModal={toggleLoginModal} />}
      <Header isLoggedIn={isLoggedIn} toggleLoginModal={toggleLoginModal} />
      <Routes>
        <Route path={'/'} exact element={<h1>Hello world</h1>} />
      </Routes>
    </>
  );
}

export default App;
