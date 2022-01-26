import React from 'react';
import Button from '../../components/Button';

import { Container, Text, TextButton, Title, Img } from './styles';
import Svg, { SvgXml  } from 'react-native-svg';
import logo from '../../assets/logo.png';
const Welcome = () => {
  return (
    <Container>
      <Img source={logo}  />
      <Title>
        Seja bem vindo {"\n"}
        Portal IDEA!
      </Title>
      <Button>
        CONTINUAR
      </Button>


  </Container>
  )

}

export default Welcome;
