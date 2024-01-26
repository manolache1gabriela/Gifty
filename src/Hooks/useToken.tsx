import { useState, useEffect } from 'react';

export default function useToken() {
  const [token, setToken] = useState('');
  const setter = localStorage.getItem('token');
  useEffect(() => {
    setToken(setter);
  }, []);

  return token;
}
