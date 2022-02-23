import React from 'react';
import { View } from 'react-native';
import { Divider } from '../DetaisCourse/styles';

import { Container,Description,SubDescription,Title } from './styles';

const Suporte = () => {
  return (
    <Container>
      <Title>Entre em contato</Title>
      <Description>Escolha uma das opções, fale com um dos
nossos atendentes e relate o problema que
        prontamente iremos resolver.</Description>
      <Divider/>
      <SubDescription>Nossos canais de contato estão ativos das
09:00 as 18:00.</SubDescription>
    </Container>

  );
}

export default Suporte;
