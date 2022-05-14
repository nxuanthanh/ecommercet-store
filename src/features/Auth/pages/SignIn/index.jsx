import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import './sign-in.scss';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

function SignIn(props) {
  return (
    <div className="sign-in">
      <h2>Login Form</h2>

      <p>or login with socials account</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
