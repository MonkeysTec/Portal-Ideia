import React,{useContext} from 'react';
import { View,KeyboardAvoidingView, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";

import { Container,Title } from './styles'
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import { Divider } from '../DetaisCourse/styles';
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

const NovaSenha = () => {
  const { signed, user, signIn } = useContext(AuthContext);
    const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      senhaAtual: '',
        novaSenha: '',
      confirmar:''
    }
    });

  async function novaSenha(data) {
    if (data.novaSenha === data.confirmar) {
       const response = await axios.post('https://portalidea.com.br/api/novaSenha.php', {
      idaluno: user.usuario[0].idS_aluno,
      novaSenha:data.novaSenha
       })
    console.log(response.data)

    } else {
      Alert.alert('Senha não são iguais ')
    }


  }
  const onSubmit = data => novaSenha(data);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <Container>
      <Title>Redefinir Senha</Title>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Senha Atual"

          />
        )}
        name="senhaAtual"
      />
      {errors.senhaAtual && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}

        <Divider/>

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Nova senha"
          />
        )}
        name="novaSenha"
        />
        {errors.novaSenha && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}

         <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Confirmar Nova Senha"
          />
        )}
        name="confirmar"
        />
        {errors.confirmar && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}


      <Button type="primary" onPress={handleSubmit(onSubmit)}>
          Atualizar Senha
      </Button>
    </Container>
    </KeyboardAvoidingView>
  );
}

export default NovaSenha ;
