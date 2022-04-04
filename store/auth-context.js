import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, set__authToken] = useState();

  function authenticate(token) {
    AsyncStorage.setItem('token', token);
    set__authToken(token);
  }

  function logout() {
    set__authToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
