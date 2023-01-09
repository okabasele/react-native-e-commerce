import React from 'react';
import {Alert} from 'react-native';
const AlertApiError = (title, message) =>
  Alert.alert(title, message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
export default AlertApiError;
