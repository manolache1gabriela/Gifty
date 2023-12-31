import { useState } from 'react';
import Hero from './Hero';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import More from './More';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wishlist from './Wishlist';
import SignIn from './SignIn';
import Forgot from './Forgot';
import Registration from './Registration';
import NotFound from './NotFound';
import Account from './Account';
import NewPassword from './NewPassword';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
    document.querySelector('body')?.classList.toggle('overflow-hidden');
  }

  const tokenLength = localStorage.getItem('token')?.length;
  const userLength = localStorage.getItem('user')?.length;
  const [signedIn, setSignedIn] = useState(false);
  function logIn() {
    if (
      tokenLength !== undefined &&
      tokenLength > 0 &&
      userLength !== undefined &&
      userLength > 0
    ) {
      const setter = true;
      setSignedIn(setter);
    }
  }

  function toggleAnimation() {
    const hero = document.querySelector('#hero');
    const more = document.querySelector('#more');

    hero?.classList.add('animate-slide_out');
    more?.classList.add('animate-slide_in');
  }

  function toggleSecondAnimation() {
    const hero = document.querySelector('#hero');
    const more = document.querySelector('#more');

    hero?.classList.remove('animate-slide_out');
    more?.classList.remove('animate-slide_in');
    hero?.classList.add('animate-slide_back_in');
    more?.classList.add('animate-slide_back_out');
  }

  function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setSignedIn(false);
  }
  return (
    <Router>
      <Navbar
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        signedIn={signedIn}
        logIn={logIn}
        logOut={logOut}
      />
      {showMenu && <Menu signedIn={signedIn} logIn={logIn} logOut={logOut} />}
      <Routes>
        <Route
          path='/'
          element={
            <div className='w-full relative h-[84vh] xl:h-[88.4vh] bg-[url("./assets/splash.jpg")] bg-cover flex'>
              <Hero toggleAnimation={toggleAnimation} />
              <More toggleSecondAnimation={toggleSecondAnimation} />
            </div>
          }
        />
        <Route path='/wishlist/:id' element={<Wishlist />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/account' element={<Account />} />
        <Route path='/new_password' element={<NewPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
