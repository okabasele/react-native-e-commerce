import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/header';
import NavBar from '../components/navbar';
import styled from 'styled-components/native';
import {Text, View, ScrollView} from 'react-native';
import Button from '../components/button';
import ProductCart from '../components/productCart';
import AlertApiError from '../components/alertApiError';

const CartScreen = () => {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

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
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Un problème est survenue.');
    }
  };

  const handleSubProduct = async id => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        if (product.quantity - 1 >= 0) {
          product.quantity = product.quantity - 1;
        }
      }
      return product;
    });

    setProducts([...updatedProducts]);
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedProducts));
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
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Un problème est survenue.');
    }
  };
  console.log({totalCost, products});
  return (
    <>
      <StyledContainer>
        <Header />
        <ScrollView>
          <Checkout>
            <Text>Sous-total {totalCost}€</Text>
            <Button
              label={`Passer la commande (${products.length} articles)`}
            />
          </Checkout>
          <StyledView>
            {products.length === 0 ? (
              <Text>Votre panier est vide</Text>
            ) : (
              products.map(product => (
                <ProductCart
                  key={product.id}
                  product={product}
                  handleAddProduct={handleAddProduct}
                  handleDeleteProduct={handleDeleteProduct}
                  handleSubProduct={handleSubProduct}
                />
              ))
            )}
          </StyledView>
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
const Checkout = styled.View`
  width: 100%;
  height: 20%;
  margin-bottom: 20px;
`;
const StyledView = styled.View`
  width: 100%;
  height: 100%;
`;
export default CartScreen;
