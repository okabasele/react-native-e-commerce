import React from 'react';
import {Link} from '@react-navigation/native';
import styled from 'styled-components/native';

const SearchBar = ({to, label}) => {
  return (
    <>
      <SearchContainer>
        <StyledTextInput placeholder={'Rechercher sur Amazon.fr'} />
        <StyledButton>
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
