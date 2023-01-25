import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputText from '../inputText';
import Button from '../button';
import LinkButton from '../linkButton';
import Title from '../title';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AlertApiError from '../alertApiError';

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errorInputs, setErrorInputs] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();
  const router = useRoute();
  const checkInputs = () => {};

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('userToken', inputs.email);
      navigation.navigate('Home');
    } catch (error) {
      console.log({error});
      AlertApiError('Erreur', 'Une erreur est survenue lors de la connexion.');
    }
    setInputs({email: '', password: ''});
  };

  useEffect(() => {
    const asyncGetToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        navigation.navigate('Home');
      }
    };
    const asyncRemoveToken = async () => {
      await AsyncStorage.removeItem('userToken');
    };

    if (!router.params?.logout) {
      asyncGetToken();
    } else {
      asyncRemoveToken();
    }
  }, [navigation]);

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
          <Button label={'Continuer'} onPress={handleSubmit} />
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

export default LoginForm;
