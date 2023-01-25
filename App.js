/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import mobileAds from 'react-native-google-mobile-ads';
import {STRIPE_KEY} from '@env';
import Routes from './src/config/routes';

const App = () => {
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        // Initialization complete!
      });
  }, []);

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
