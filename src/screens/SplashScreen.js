import React from 'react';
import styled, {keyframes} from 'styled-components';

const SplashScreen = () => {
  return (
    <>
      <StyledContainer>
        <StyledBox>
          <StyledContent>
            <StyledFirstCircle />
            <StyledCircle />
            <StyledCircle />
            <StyledLastCircle />
          </StyledContent>
        </StyledBox>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #fff;
`;
const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(90deg, #339, #f0c);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
`;
const StyledContent = styled.div`
  height: 15px;
  width: 105px;
  display: flex;
  position: relative;
`;
const StyledCircle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
  animation: ${move} 500ms linear 0ms infinite;
  margin-right: 30px;
`;
const StyledFirstCircle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
  animation: ${move} 500ms linear 0ms infinite;
  margin-right: 30px;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${grow} 500ms linear 0ms infinite;
`;
const StyledLastCircle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
  animation: ${move} 500ms linear 0ms infinite;
  margin-right: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0;
  animation: ${grow} 500ms linear 0s infinite reverse;
`;

const grow = keyframes`
    from {
        transform: scale(0, 0);
        opacity: 0;
   }
    to {
        transform: scale(1, 1);
        opacity: 1;
   }
`;
const move = keyframes`
    from {
        transform: translateX(0px);
   }
    to {
        transform: translateX(45px);
   }
`;

export default SplashScreen;
