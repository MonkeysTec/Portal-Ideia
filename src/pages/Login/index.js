import React, { useContext } from "react";
import { Text, View, TextInput, Alert,KeyboardAvoidingView,Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button";
import Inputs from '../../components/Inputs'
import { Container,Title } from './styles'
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import AppIntroSlider from "react-native-app-intro-slider";
import axios from "axios";
export default function App() {
  const { signed, user,signIn } = useContext(AuthContext);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: 'rodrigo1612fm@gmail.com',
      senha: 'rodri1234'
    }
  });
  const onSubmit = data => onSsubmit(data);

  async function onSsubmit(dados) {
     const { data } = await axios.post('https://portalidea.com.br/api/loginJson.php', {
      email_area_aluno:dados.email,
      senha_area_aluno:dados.senha
     })
    signIn(data)
    console.log(data)
   }
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <Container>
      <Title>Entrar e estudar</Title>
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
            label="E-mail"

          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

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
            label="senha"
          />
        )}
        name="senha"
      />

      <Button type="primary" onPress={handleSubmit(onSubmit)}>
          Login
      </Button>
    </Container>
    </KeyboardAvoidingView>
  );
}
