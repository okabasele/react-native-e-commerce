import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const config = {
  screens: {
    login: {
      path: '/',
    },
    register: {
      path: '/register',
    },
    home: {
      path: '/home',
    },
  },
};

const linking = {
  prefixes: ['https://localhost:8081'],
  config,
};

const Routes = props => {
  return (
    <NavigationContainer linking={linking} fallback={<SplashScreen />}>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/*
         <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} /> 
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
