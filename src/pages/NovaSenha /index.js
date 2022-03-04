import React from 'react';
import { View,KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from "react-hook-form";

import { Container,Title } from './styles'
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import { Divider } from '../DetaisCourse/styles';

const NovaSenha = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      senhaAtual: '',
        novaSenha: '',
      confirmar:''
    }
  });
  const onSubmit = data => console.log(data);
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
      {errors.email && <Text>This is required.</Text>}
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

      <Button type="primary" onPress={handleSubmit(onSubmit)}>
          Atualizar Senha
      </Button>
    </Container>
    </KeyboardAvoidingView>
  );
}

export default NovaSenha ;
