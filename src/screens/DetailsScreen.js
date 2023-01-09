import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import styled from 'styled-components/native';
import Header from '../components/header';
import NavBar from '../components/navbar';
import Button from '../components/button';
import Rating from '../components/rating';
import AlertApiError from '../components/alertApiError';
const DetailsScreen = ({navigation, route}) => {
  const [product, setProduct] = useState({});
  const url = `https://fakestoreapi.com/products/${route.params.id}`;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(url);
        setProduct(response.data);
      } catch (error) {
        console.log({error});
      }
    };
    getProduct();
  }, [url]);

  const addToCart = async () => {
    try {
      const cartJSON = await AsyncStorage.getItem('cart');

      if (cartJSON && JSON.parse(cartJSON).length > 0) {
        const data = JSON.parse(cartJSON);
        const newProduct = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        if (
          !data.find(productToCompare => productToCompare.id === product.id)
        ) {
          data.push(newProduct);
          try {
            await AsyncStorage.setItem('cart', JSON.stringify(data));
          } catch (error) {
            console.log({error});
            AlertApiError('Erreur', 'Veuillez réessayer.');
          }
        }
      } else {
        const data = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        try {
          await AsyncStorage.setItem('cart', JSON.stringify([data]));
        } catch (error) {
          console.log({error});
          AlertApiError('Erreur', 'Veuillez réessayer.');
        }
      }
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Veuillez réessayer.');
    }
  };

  if (!product && !product.rating) {
    return <Text>Chargement en cours.</Text>;
  }

  return (
    <>
      <StyledContainer>
        <Header />
        <ScrollView>
          {/* <Rating rate={product.rating?.rate} count={product.rating?.count} /> */}
          <View>
            <Text>{product.title}</Text>
            <ImageContainer>
              <StyledImage
                source={{
                  uri: product.image,
                }}
              />
            </ImageContainer>
          </View>
          <View>
            <Text>{product.price}€</Text>
            <Button label={'Ajouter au panier'} onPress={addToCart} />
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
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.View`
  width: 100%;
  height: 300px;
`;

export default DetailsScreen;
