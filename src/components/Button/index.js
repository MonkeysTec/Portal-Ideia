import React from 'react';
import { View,Text } from 'react-native';

 import {Container,TextButton} from './styles';
 import { useNavigation } from '@react-navigation/native';

const Button = ({ children, type, fullsize,route,params,img }) => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate(route, {
      item: params,
      img
    })} type={type} fullsize={fullsize}>
      <TextButton type={type}>

          {children}

    </TextButton>
  </Container>
  )
}

export default Button;
