import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, set__isAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    set__isAuthenticating(true);
    await createUser(email, password);
    set__isAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user ...' />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
