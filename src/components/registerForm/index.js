import React, {useState} from 'react';
import InputText from '../inputText';
import Button from '../button';
import Title from '../title';
import StyledLink from '../styledLink';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [errorInputs, setErrorInputs] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const checkLastname = () => {
    if (inputs.lastname.length === 0) {
      setErrorInputs({...inputs, lastname: 'Saissisez votre nom'});
      return false;
    }
    setErrorInputs({...inputs, lastname: ''});

    return true;
  };

  const checkFirstname = () => {
    if (inputs.firstname.length === 0) {
      setErrorInputs({...inputs, firstname: 'Saissisez votre prénom'});
      return false;
    }
    setErrorInputs({...inputs, firstname: ''});

    return true;
  };

  const checkEmail = () => {
    if (inputs.email.length === 0) {
      setErrorInputs({...inputs, email: 'Saissisez votre adresse e-mail'});
      return false;
    }
    setErrorInputs({...inputs, email: ''});

    return true;
  };

  const checkPassword = () => {
    //check mot de passe assez long
    if (inputs.password.length === 0) {
      setErrorInputs({
        ...inputs,
        password: 'Le mot de passe est requis',
        passwordConfirm: '',
      });
      return false;
    } else if (inputs.password.length < 8) {
      setErrorInputs({
        ...inputs,
        password:
          'Le mot de passe est trop court! Il faut au moins 8 caractères.',
        passwordConfirm: '',
      });
      return false;
    } else if (
      inputs.password.toUpperCase() !== inputs.passwordConfirm.toUpperCase()
    ) {
      //check si les 2 entrées mot de passes sont identiques
      setErrorInputs({
        ...inputs,
        password: '',
        passwordConfirm: 'Le mot de passe entré est incorrect',
      });
      return false;
    }
    setErrorInputs({...inputs, password: '', passwordConfirm: ''});
    return true;
  };

  const checkInputs = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <StyledContainer>
        <Title title={'Créer un compte'} />
        <InputText
          label={'Nom'}
          placeholder={'Nom'}
          onChangeText={text => setInputs({...inputs, lastname: text})}
          errorMessage={errorInputs.lastname}
          value={inputs.lastname}
        />
        <InputText
          label={'Prénom'}
          placeholder={'Prénom'}
          onChangeText={text => setInputs({...inputs, firstname: text})}
          errorMessage={errorInputs.firstname}
          value={inputs.firstname}
        />
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
        <InputText
          label={'Saisir à nouveau le mot de passe'}
          onChangeText={text => setInputs({...inputs, passwordConfirm: text})}
          errorMessage={errorInputs.passwordConfirm}
          value={inputs.passwordConfirm}
          isPassword={true}
        />
        <Button label={'Continuer'} onPress={handleSubmit} />
        <StyledFormFooter>
          <Text>
            En créant un compte, vous acceptez les conditions générales de vente
            d'Amazon.
          </Text>
          <Text>
            Vous possédez déjà un compte ?{' '}
            <StyledLink to={{screen: 'Login'}} label={'Identifiez-vous'} />
          </Text>
        </StyledFormFooter>
      </StyledContainer>
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

export default RegisterForm;
