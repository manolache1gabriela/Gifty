import { useState, useEffect } from 'react';

export default function useIsAuthenticated() {
  const [isAuth, setIsAuth] = useState(false);
  const setter =
    localStorage.getItem('token') !== null &&
    localStorage.getItem('user') !== null;
  useEffect(() => {
    setIsAuth(setter);
  }, []);

  return isAuth;
}
