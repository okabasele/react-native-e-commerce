import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/header';
import NavBar from '../components/navbar';
import CategoryCard from '../components/categoryCard';
import HighlightProduct from '../components/highlightProduct';
import styled from 'styled-components/native';
import {View, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import {Link} from '@react-navigation/native';
import ProductCard from '../components/productCard';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const url = 'https://fakestoreapi.com/products';
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(url);
        await AsyncStorage.setItem('products', JSON.stringify(response.data));
        setProducts(response.data);
      } catch (error) {
        console.log({error});
      }
    };
    getProducts();
  }, []);
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
        <ScrollView>
          <View>
            <StyledImage
              source={{
                uri: 'https://www.buzzwebzine.fr/wp-content/uploads/2018/12/noel-idees-cadeaux-ventes-flash-amazon.jpg',
              }}
            />
            <CategoryContainer>
              <CategoryCard
                title={'Ventes Flash Cuisine'}
                imgPath={
                  'https://m.media-amazon.com/images/I/41gRghyb1QL._AC_SY460_.jpg'
                }
              />
              <CategoryCard
                title={'La Boutique de Noel'}
                imgPath={
                  'https://images-eu.ssl-images-amazon.com/images/G/08/Events/2022/Xmas/Homepage/XCM_CUTTLE_1488320_2673739_758x608_2X_fr_FR._SY608_CB607958179_.jpg'
                }
              />
              <CategoryCard
                title={'Ventes Flash de Noel'}
                imgPath={
                  'https://images-eu.ssl-images-amazon.com/images/G/08/Babel/38a8a3b1-40cb-4e78-be23-63f09006539d/FR_Gateway-Homepage_DayOf_Desktop/desktop-mso-grid_0_SingleImageCard1CompetingDefault_HighResolutionImage_fr_FR_6605b8fe1bca42539f9b29171cddf837._SY608_CB620136536_.png'
                }
              />
            </CategoryContainer>
          </View>
          <HighlightProduct
            imgPath={
              'https://m.media-amazon.com/images/I/51dK9TLtoaL._AC_SY460_.png'
            }
          />
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
        </ScrollView>
        <NavBar />
      </StyledContainer>
    </>
  );
};
const StyledImage = styled.Image`
  height: 220px;
`;
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
const CategoryContainer = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export default HomeScreen;
