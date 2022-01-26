import React from 'react';
import { View,Text } from 'react-native';

 import {Container,TextButton} from './styles';

const Button = ({children,type,fullsize}) => {
  return (
    <Container type={type} fullsize={fullsize}>
      <TextButton type={type}>

          {children}

    </TextButton>
  </Container>
  )
}

export default Button;
