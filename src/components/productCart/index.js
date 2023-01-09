import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const ProductCart = ({
  product,
  handleAddProduct,
  handleSubProduct,
  handleDeleteProduct,
}) => {
  useEffect(() => {}, [product.quantity]);

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
            <StyledButton onPress={() => handleAddProduct(product.id)}>
              <Text>+</Text>
            </StyledButton>
            <Count>{product.quantity}</Count>
            <StyledButton onPress={() => handleSubProduct(product.id)}>
              <Text>-</Text>
            </StyledButton>
          </Counter>
        </Left>
        <About>
          <Text>{product.title}</Text>
          <Text>{product.price}€</Text>
          <DeleteButton onPress={() => handleDeleteProduct(product.id)}>
            <Text>Supprimer</Text>
          </DeleteButton>
        </About>
      </Container>
    </>
  );
};

const StyledImage = styled.Image`
  height: 150px;
  width: 150px;
`;
const Container = styled.View`
  margin-top: 20px;
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin: 0 5%;
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
  justify-content: center;
  align-items: center;
`;
const Left = styled.View`
  width: 150px;
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
const DeleteButton = styled.TouchableOpacity`
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
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #202020;
  margin: 0 6px;
`;
export default ProductCart;
