import React from 'react';
import { View } from 'react-native';
import { Divider } from '../DetaisCourse/styles';

import { Container,TitleMenu,DivCardsConfig } from './styles';

const Config = () => {
  return (
    <Container>
         <TitleMenu>
            Resumo da Conta
        </TitleMenu>
      <Divider />
       <TitleMenu>
            Dados Pessoais
        </TitleMenu>
      <Divider/>
 <TitleMenu>
            Termos de Contrato
        </TitleMenu>
      <Divider />
       <TitleMenu>
            Suporte
        </TitleMenu>
      <Divider />
       <TitleMenu>
           Preferencias do APP
        </TitleMenu>
      <Divider/>


    </Container>
  );
}

export default Config;
