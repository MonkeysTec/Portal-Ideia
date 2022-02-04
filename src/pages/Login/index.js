import React, { useContext }from 'react';
import { View ,KeyboardAvoidingView} from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import axios from 'axios';
import { Container,Title,PasswordRemeber,NewAccount,ScrollContainer } from './styles';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
const Login = () => {
const { signed, user, signIn, loading } = useContext(AuthContext);

useEffect(() => {
  async function request() {
    const { data } = await axios.post('https://portalidea.com.br/api/loginJson.php', {
      email_area_aluno:'alysson_silva@outlook.com',
      senha_area_aluno:'timonkeys',
    })

    console.log(data)
  }
  request()
}, []);


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
