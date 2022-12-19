import React from 'react';
import styled from 'styled-components/native';
import {Link} from '@react-navigation/native';
import {View} from 'react-native';
const NavBar = () => {
  return (
    <>
      <StyledView>
        <StyledLink to={{screen: 'Home'}}>
          <StyledImage
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/web-essentials-6/24/home-512.png',
            }}
          />
        </StyledLink>
        <View>
          <StyledImage
            source={{
              uri: 'https://cdn1.iconfinder.com/data/icons/web-essentials-6/24/user-512.png',
            }}
          />
        </View>

        <StyledLink to={{screen: 'Cart'}}>
          <StyledImage
            source={{
              uri: 'https://cdn1.iconfinder.com/data/icons/web-essentials-6/24/basket-512.png',
            }}
          />
        </StyledLink>

        <View>
          <StyledImage
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/web-essentials-6/24/hamburger_menu-512.png',
            }}
          />
        </View>
      </StyledView>
    </>
  );
};
const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;
const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  border: 1px solid #a6a6a6a6;
  background-color: #fff;
`;

const StyledLink = styled(Link)`
  width: 30px;
  height: 30px;
  align-self: center;
`;

export default NavBar;
