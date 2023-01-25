import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';
import {API_URL} from '@env';
import styled from 'styled-components';
import axios from 'axios';
import AlertApiError from '../components/alertApiError';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentScreen = ({navigation, route}) => {
  const {confirmPayment, loading} = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/create-payment-intent`,
        {
          amount: route.params.amount,
        },
      );
      const data = await response.data;
      return data.clientSecret;
    } catch (error) {
      console.log({error});
    }
  };

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: route.params.email,
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
      paymentMethodData: {billingDetails},
    });

    if (error || !paymentIntent) {
      return AlertApiError('Erreur', "Le paiement n'a pas abouti.");
    }
    await AsyncStorage.removeItem('cart');
    navigation.navigate('Home');
  };

  return (
    <View>
      <StyledCardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};

const StyledCardField = styled(CardField)`
  height: 50px;
  width: 100%;
`;

export default PaymentScreen;
