import React from 'react';
import styled from 'styled-components/native';

const Button = ({title, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  width: 320px;
  height: 32px;
  align-self: center;
  background-color: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const StyledText = styled.Text`
  line-height: 29px;
  text-align: center;
`;

export default Button;
