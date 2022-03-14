
// fazer mascara nos campos de CPF,Rg,Telefone,CEP

import React from 'react';
import { View } from 'react-native';
import { Container,Input,Label,InputView,ViewNewInput } from './styles';

const Inputs = ({placeholder,secureTextEntry,label,...rest}) => {
  return (
    <Container {...rest}>

      <InputView>
      <Label>
        { label}
      </Label>

      </InputView>
      <ViewNewInput>
        <Input  {...rest}  placeholder={placeholder} secureTextEntry={secureTextEntry}/>

      </ViewNewInput>



    </Container>
  ) ;
}

export default Inputs;
