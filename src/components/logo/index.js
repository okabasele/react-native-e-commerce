import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const Logo = () => {
  const url =
    'https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-10.png';
  return (
    <StyledView>
      <StyledImage
        source={{
          uri: url,
        }}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 30px;
`;

export default Logo;
