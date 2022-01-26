import React from 'react';
import { View ,KeyboardAvoidingView} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';

import { Container,Title,PasswordRemeber,NewAccount,ScrollContainer } from './styles';

const Login = () => {
  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
      <Container>
      <Title>Entrar e estudar </Title>
      <Inputs placeholder="rodrigo@gmail.com" />
      <Inputs placeholder="*******" secureTextEntry={true} />

      <Button>
        entrar
      </Button>
      <PasswordRemeber>
        Esqueci minha senha
      </PasswordRemeber>
      <NewAccount>
        Ainda não tenho um conta
      </NewAccount>
      </Container>
      </KeyboardAvoidingView>

  );
}

export default Login;
