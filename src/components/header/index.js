import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
const Header = () => {
  return (
    <>
      <View>
        <StyledGradiant>
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

const StyledTextInput = styled.TextInput`
  width: 300px;
  float: right;
  padding: 6px;
  border: none;
  font-size: 17px;
  background-color: #fff;
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

const SearchContainer = styled.View`
  margin-top: 10px;
  align-self: center;
  float: right;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const StyledFakeLinks = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Header;
