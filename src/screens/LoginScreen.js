import React, {useEffect} from 'react';
import axios from 'axios';
import Logo from '../components/logo';
import LoginForm from '../components/loginForm';
import Footer from '../components/footer';
const LoginScreen = () => {

  return (
    <>
      <Logo />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginScreen;
