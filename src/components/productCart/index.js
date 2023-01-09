import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const ProductCart = ({product, handleAddProduct, handleSubProduct}) => {
  return (
    <>
      <Container>
        <Left>
          <StyledImage
            source={{
              uri: product.image,
            }}
          />
          <Counter>
            <StyledButton onPress={handleAddProduct}>
              <Text>+</Text>
            </StyledButton>
            <Count>{product.quantity}</Count>
            <StyledButton onPress={handleSubProduct}>
              <Text>-</Text>
            </StyledButton>
          </Counter>
        </Left>
        <About>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
        </About>
      </Container>
    </>
  );
};

const StyledImage = styled.Image`
  height: 60px;
  width: 60px;
`;
const Container = styled.View`
  width: 100px;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;
const About = styled.View`
  width: 50%;
  height: 100%;
`;
const Counter = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Left = styled.View`
  width: 50%;
  height: 100%;
`;
const StyledButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 900;
  color: #202020;
  cursor: pointer;
`;
const Count = styled.Text`
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #202020;
  margin: 0 1px;
`;
const Title = styled.Text`
  padding-top: 20px;
  font-size: 26px;
  font-family: 'Open Sans';
  font-weight: 800;
  color: #202020;
`;
const Price = styled.Text`
  padding-top: 10px;
  line-height: 10px;
  font-size: 32px;
  font-family: 'Open Sans';
  font-weight: 800;
  color: #202020;
`;
export default ProductCart;
