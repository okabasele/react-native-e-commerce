import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import truncate from '../../utils/truncate';

const ProductCard = ({product}) => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <StyledImage
          source={{
            uri: product.image,
          }}
        />
        <TextContainer>
          <StyledText>{truncate(product.title)}</StyledText>
          <StyledText>{product.price}€</StyledText>
        </TextContainer>
      </Container>
    </>
  );
};

const StyledText = styled.Text`
  flex-wrap: wrap;
  font-size: 14px;
`;

const TextContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled.Image`
  width: 100%;
  height: 70%;
`;
const Container = styled.View`
  width: 110px;
  height: 120px;
  margin: 10px;
  background-color: #ffffff;
  overflow: hidden;
`;
export default ProductCard;
