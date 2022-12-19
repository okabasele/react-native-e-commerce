import React from 'react';
import styled from 'styled-components/native';

const Title = ({title}) => {
  return (
    <>
      <StyledText>{title}</StyledText>
    </>
  );
};

const StyledText = styled.Text`
  font-weight: 400;
  font-size: 28px;
`;
export default Title;
