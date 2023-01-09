import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    console.log('search bar submitting');
    console.log({input});
    try {
      const productsJSON = await AsyncStorage.getItem('products');
      const data = JSON.parse(productsJSON);
      const products = data.filter(({title}) =>
        title.toLowerCase().startsWith(input.toLowerCase()),
      );
      // console.log({productsJSON, data, products});

      navigation.navigate('Search', {products: products});
    } catch (error) {
      console.log({error});
    }
    setInput('');
  };

  return (
    <>
      <SearchContainer>
        <StyledTextInput
          placeholder={'Rechercher sur Amazon.fr'}
          onChangeText={text => setInput({text})}
          defaultValue={input}
        />
        <StyledButton onPress={handleSubmit}>
          <StyledImage
            source={{
              uri: 'https://cdn1.iconfinder.com/data/icons/web-essentials-6/24/search-512.png',
            }}
          />
        </StyledButton>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  float: right;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.TouchableOpacity`
  align-self: center;
  background-color: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  border: none;
  cursor: pointer;
  float: right;
  padding: 6px 10px;
  font-size: 17px;
`;
const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StyledTextInput = styled.TextInput`
  width: 300px;
  float: right;
  padding: 6px;
  border: none;
  font-size: 17px;
  background-color: #fff;
`;
export default SearchBar;
