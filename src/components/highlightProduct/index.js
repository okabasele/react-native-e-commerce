import React from 'react';
import styled from 'styled-components/native';

const HighlightProduct = ({imgPath}) => {
  return (
    <>
      <Container>
        <TextContainer>
          <StyledText>Offre star</StyledText>
        </TextContainer>
        <StyledImage
          source={{
            uri: imgPath,
          }}
        />
      </Container>
    </>
  );
};

const StyledText = styled.Text`
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 16px;
`;

const TextContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const Container = styled.View`
  width: 100%;
  height: 270px;
  margin-bottom: 20px;
  background-color: #ffffff;
  overflow: hidden;
`;
export default HighlightProduct;
