import React from 'react';
import styled from 'styled-components/native';

const Footer = () => {
  return (
    <StyledView>
      <StyledLinks>
        <StyledFakeLink>Conditions d'utilisation</StyledFakeLink>
        <StyledFakeLink>
          Protection de vos informations personnelles
        </StyledFakeLink>
        <StyledFakeLink>Aide</StyledFakeLink>
        <StyledFakeLink>Cookies</StyledFakeLink>
        <StyledFakeLink>
          Annonces basées sur vos centres d'intérêt{' '}
        </StyledFakeLink>
      </StyledLinks>

      <StyledCert>© 1996-2022, Amazon.com Inc. ou ses affiliés</StyledCert>
    </StyledView>
  );
};

const StyledView = styled.View`
  margin-top: 20px;
`;

const StyledLinks = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 11px;
  line-height: 1px;
  margin-bottom: 10px;
`;

const StyledFakeLink = styled.Text`
  color: #0066c0;
  margin-left: 20px;
  text-align: center;
`;

const StyledCert = styled.Text`
  text-align: center;
`;

export default Footer;
