import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/header';
import NavBar from '../components/navbar';
import styled from 'styled-components/native';
import {Text, View, ScrollView} from 'react-native';
import Button from '../components/button';
import ProductCart from '../components/productCart';
import AlertApiError from '../components/alertApiError';
import getFormattedCost from '../utils/getFormattedCost';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const navigation = useNavigation();

  const numberOfArticles =
    products.length > 1
      ? `${products.length} articles`
      : `${products.length} article`;

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cartJSON = await AsyncStorage.getItem('cart');

        if (cartJSON) {
          const data = JSON.parse(cartJSON);
          setProducts(data);
          setTotalCost(
            data.reduce(
              (acc, product) => (acc += product.price * product.quantity),
              0,
            ),
          );
        }
      } catch (error) {
        console.log({error});
        AlertApiError('Erreur', 'Un problème est survenue.');
      }
    };
    getCartItems();
  }, []);

  const handlePayment = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      navigation.navigate('Payment', {amount: totalCost, email: token});
    }
  };

  const handleAddProduct = async id => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });

    setProducts([...updatedProducts]);
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedProducts));
      setTotalCost(
        updatedProducts.reduce(
          (acc, product) => (acc += product.price * product.quantity),
          0,
        ),
      );
      // console.log({updatedProducts});
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Un problème est survenue.');
    }
  };

  const handleSubProduct = async id => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        if (product.quantity - 1 >= 1) {
          product.quantity = product.quantity - 1;
        }
      }
      return product;
    });

    setProducts([...updatedProducts]);
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedProducts));
      setTotalCost(
        updatedProducts.reduce(
          (acc, product) => (acc += product.price * product.quantity),
          0,
        ),
      );
      // console.log({updatedProducts});
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Un problème est survenue.');
    }
  };

  const handleDeleteProduct = async id => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts([...updatedProducts]);
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedProducts));
      setTotalCost(
        updatedProducts.reduce(
          (acc, product) => (acc += product.price * product.quantity),
          0,
        ),
      );
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Un problème est survenue.');
    }
  };
  // console.log({totalCost, products});

  if (products.length === 0) {
    return (
      <>
        <StyledContainer>
          <Header />
          <ScrollView>
            <Text>Votre panier est vide</Text>
          </ScrollView>
          <NavBar />
        </StyledContainer>
      </>
    );
  }

  return (
    <>
      <StyledContainer>
        <Header />
        <ScrollView>
          <SubTotal>
            Sous-total{' '}
            <TotalCost> {getFormattedCost(totalCost.toString())}€</TotalCost>
          </SubTotal>

          <Button
            label={`Passer la commande (${numberOfArticles})`}
            onPress={handlePayment}
          />

          {products.map(product => (
            <ProductCart
              key={product.id}
              product={product}
              handleAddProduct={handleAddProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleSubProduct={handleSubProduct}
            />
          ))}
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

const SubTotal = styled.Text`
  font-size: 20px;
`;
const TotalCost = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export default CartScreen;
