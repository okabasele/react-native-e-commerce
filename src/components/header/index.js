import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import SearchBar from '../searchBar';
const Header = () => {
  return (
    <>
      <View>
        <StyledGradiant>
          <SearchBar />
          <StyledFakeLinks>
            <Text>Listes Alexa</Text>
            <Text>Prime</Text>
            <Text>Vidéo</Text>
            <Text>Musique</Text>
          </StyledFakeLinks>
        </StyledGradiant>
        <StyledAddress>
          <StyledImage
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/web-essentials-6/24/location-512.png',
            }}
          />
          <StyledText>Livrer à Nanterre 92000</StyledText>
        </StyledAddress>
      </View>
    </>
  );
};

const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StyledText = styled.Text`
  margin-top: 5px;
`;

const StyledAddress = styled.View`
  background-color: #cbece6;
  display: flex;
  flex-direction: row;
`;

const StyledGradiant = styled.View`
  background-color: #96d5e0;
  width: 100%;
  height: 100px;
`;

const StyledFakeLinks = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Header;
