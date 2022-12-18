import React, {useState} from 'react';
import InputText from '../inputText';
import Button from '../button';
import LinkButton from '../linkButton';
import Title from '../title';
import StyledLink from '../styledLink';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [errorInputs, setErrorInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const checkInputs = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <View>
        <StyledContainer>
          <Title title={"S'identifier"} />
          <InputText
            label={'Adresse e-mail'}
            placeholder={'exemple@exemple.com'}
            onChangeText={text => setInputs({...inputs, email: text})}
            errorMessage={errorInputs.email}
            value={inputs.email}
          />
          <InputText
            label={'Mot de passe'}
            onChangeText={text => setInputs({...inputs, password: text})}
            errorMessage={errorInputs.password}
            value={inputs.password}
            isPassword={true}
          />
          <Button title={'Continuer'} onPress={handleSubmit} />
          <StyledFormFooter>
            <Text>
              En passant votre commande, vous acceptez les conditions générales
              de vente d'Amazon.
            </Text>
          </StyledFormFooter>
        </StyledContainer>
        <CenterView>
          <CenterText>Nouveau chez Amazon?</CenterText>
          <LinkButton
            to={{screen: 'Register'}}
            label={'Créer votre compte Amazon'}
          />
        </CenterView>
      </View>
    </>
  );
};

const StyledContainer = styled.View`
  align-self: center;
  width: 340px;
  padding: 10px;
  border: 1px solid #a6a6a6a6;
`;

const StyledFormFooter = styled.View`
  margin-top: 20px;
`;
const CenterText = styled.Text`
  text-align: center;
`;

const CenterView = styled.View`
  margin-top: 40px;
  align-self: center;
  width: 340px;
  padding: 10px;
`;

export default RegisterForm;
