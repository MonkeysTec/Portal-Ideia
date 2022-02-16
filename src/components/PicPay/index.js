import React, { useContext } from "react";
import { Text, View, TextInput, Alert,KeyboardAvoidingView,Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button";
import Inputs from '../../components/Inputs'
import { Container,Title } from './styles'
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import AppIntroSlider from "react-native-app-intro-slider";
import axios from "axios";


export default function PicPay() {
  const { signed, user,signIn } = useContext(AuthContext);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nome: '',
      sobreNome: '',
      email: '',
      cpf: '',


    }
  });
  const onSubmit = data => console.log(data);


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <Container>
      <Title>PicPay</Title>
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
            label="Nome"

          />
        )}
        name="nome"
      />
      {errors.nome && <Text>This is required.</Text>}
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
            label="Sobrenome"

          />
        )}
        name="sobreNome"
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
            label="email"
          />
        )}
        name="email"
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
            label="cpf"
          />
        )}
        name="cpf"
      />
      <Button type="primary" onPress={handleSubmit(onSubmit)}>
          Pagar com PicPay
      </Button>
    </Container>
    </KeyboardAvoidingView>
  );
}
