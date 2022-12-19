import React from 'react';
import {Link} from '@react-navigation/native';
import styled from 'styled-components/native';

const StyledLink = ({to, label}) => {
  return (
    <>
      <Link to={to}>
        <StyledText>{label}</StyledText>
      </Link>
    </>
  );
};

const StyledText = styled.Text`
  color: #0066c0;
`;
export default StyledLink;
