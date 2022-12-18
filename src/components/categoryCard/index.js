import React from 'react';
import styled from 'styled-components/native';

const CategoryCard = ({title, imgPath}) => {
  return (
    <>
      <Container>
        <StyledImage
          source={{
            uri: imgPath,
          }}
        />
        <TextContainer>
          <StyledText>{title}</StyledText>
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
  margin-bottom: 20px;
  background-color: #ffffff;
  overflow: hidden;
`;
export default CategoryCard;
