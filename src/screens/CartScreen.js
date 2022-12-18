import React from 'react';
import Header from '../components/header';
import NavBar from '../components/navbar';
import styled from 'styled-components/native';
import {Text, View, ScrollView} from 'react-native';
const CartScreen = () => {
  return (
    <>
      <StyledContainer>
        <Header />
        <ScrollView>
          <View>
            <Text>Votre panier est vide</Text>
          </View>
        </ScrollView>
        <NavBar />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export default CartScreen;
