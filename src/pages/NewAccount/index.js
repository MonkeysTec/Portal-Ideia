import React,{useState} from 'react';
import { View ,KeyboardAvoidingView,Text} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import CheckBox from 'react-native-check-box';
import { Container,Title,LoginAccount,ViewCheck,TextCheck } from './styles';

const NewAccount = () => {
 const [checked, setChecked] = React.useState(false);
  return (
     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
      <Container>
      <Title>Criar nova conta</Title>
        <Inputs placeholder="rodrigo@gmail.com" label="Nome Completo" />
        <Inputs placeholder="rodrigo@gmail.com"  label="E-mail"/>
        <Inputs placeholder="*******" secureTextEntry={true} label="Senha" />
        <Inputs placeholder="(00)00000-0000" label="Telefone" />

        <ViewCheck>
          <CheckBox
            isChecked={true}
            leftText={"CheckBox"}
          />
        <TextCheck>Declaro que li e concordo com os
          Termos de Contrato.</TextCheck>

        </ViewCheck>


      <Button>
        Criar Conta
      </Button>
        <LoginAccount>
          Já tenho uma conta
        </LoginAccount>
      </Container>
      </KeyboardAvoidingView>

  );
}

export default NewAccount;
