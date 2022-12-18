import React from 'react';
import styled from 'styled-components/native';
import {Link} from '@react-navigation/native';

const LinkButton = ({to, label, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledLink to={to}>
        <StyledText>{label}</StyledText>
      </StyledLink>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  width: 320px;
  height: 32px;
  align-self: center;
  background-color: #e7e9ec;
  border-color: #a6a6a6a6;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const StyledText = styled.Text`
  line-height: 29px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  align-self: center;
`;

export default LinkButton;
