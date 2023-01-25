/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import Routes from './src/config/routes';
import {STRIPE_KEY} from '@env';

const App = () => {
  return (
    <StripeProvider
      publishableKey={STRIPE_KEY}
      merchantIdentifier="merchant.com.reactnativeamazon" // required for Apple Pay
      >
        <Routes />
    </StripeProvider>
  );
};

export default App;
