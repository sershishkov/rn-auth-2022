import { useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, set__isAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    set__isAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in.Please check your credentials or try again later'
      );
    }

    set__isAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging you in ...' />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
