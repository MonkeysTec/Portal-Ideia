import React, { useContext, useState }from 'react';
import { View ,KeyboardAvoidingView,Text,ActivityIndicator} from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import axios from 'axios';
import { Container,Title,PasswordRemeber,NewAccount,ScrollContainer,ErrorMessage } from './styles';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import { useNavigation } from '@react-navigation/native';
import colors from '../../utils/colors';

const Login = () => {
const { signed, user,signOut, signIn, loading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('alysson_silva@outlook.com');
  const [senha, setSenha] = useState('timonkeys');
  const [loadingLogin,setLoadingLogin] = useState(false)

  const { navigate} = useNavigation()

  async function Login() {
    setLoadingLogin(true)
     const { data } = await axios.post('https://portalidea.com.br/api/loginJson.php', {
      email_area_aluno:'alysson_silva@outlook.com',
      senha_area_aluno:'timonkeys',
    })

    if (data.erro === false) {
      signIn(data.usuario)
    }else{
      setError('Email ou senha invalidos');
      setTimeout(()=>setError(''),3000)
    }

    setLoadingLogin(true)
  }


  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
      <Container>
        <Title>Entrar e estudar </Title>
        <ErrorMessage>{error }</ErrorMessage>
      <Inputs placeholder="rodrigo@gmail.com"  value={email}
              onChangeText={email} />
      <Inputs placeholder="*******" secureTextEntry={true} onChangeText={setSenha} value={senha} />

        <Button onPress={() => Login()}>
          {loadingLogin?(<ActivityIndicator/>):'entrar'}

      </Button>
      <PasswordRemeber onClick={()=>navigate('Cadastro')}>
       <Text style={{marginTop: 20,color: colors.secundaryTitle,fontWeight:'800'}}> Esqueci minha senha</Text>
      </PasswordRemeber>
      <NewAccount>
        Ainda não tenho uma conta
      </NewAccount>
      </Container>
      </KeyboardAvoidingView>

  );
}

export default Login;
