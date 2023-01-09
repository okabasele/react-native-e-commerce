import React, {useEffect, useState} from 'react';
import Header from '../components/header';
import NavBar from '../components/navbar';
import CategoryCard from '../components/categoryCard';
import HighlightProduct from '../components/highlightProduct';
import styled from 'styled-components/native';
import {View, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import {Link} from '@react-navigation/native';
import ProductCard from '../components/productCard';

const SearchScreen = ({route}) => {
  const [products, setProducts] = useState(route.params.products);
  console.log({products, route});

  const renderItem = ({item}) => {
    return (
      <Link to={{screen: 'Details', params: {id: item.id}}}>
        <ProductContainer>
          <ProductCard product={item} />
        </ProductContainer>
      </Link>
    );
  };

  return (
    <>
      <StyledContainer>
        <Header />
        <CenterView>
          <FlatList
            data={products}
            renderItem={renderItem}
            horizontal={false}
            numColumns={3}
            keyExtractor={product => product.id}
            onEndReachedThreshold={0.4}
          />
        </CenterView>
        <NavBar />
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const CenterView = styled.View`
  justify-content: center;
  align-items: center;
`;

const ProductContainer = styled.View`
  flex: 1;
  flex-direction: column;
  /* margin-left: 10px; */
`;
export default SearchScreen;
