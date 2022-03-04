import React from 'react';
import { View,Image } from 'react-native';
import { Divider } from '../DetaisCourse/styles';
import imgWhats from '../../assets/whatsapp.png'
import imgEmail from '../../assets/mail.png'

import { Container,Description,SubDescription,Title,TextContato,ViewIcon,ImgIcon } from './styles';

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

      <ViewIcon>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight:10
        }}>
          <ImgIcon source={imgEmail} />

        </View>
        <TextContato>contato@portalidea.com.br</TextContato>
      </ViewIcon>
      <Divider/>

      <ViewIcon>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight:10
        }}>
          <ImgIcon source={imgWhats} />

        </View>
        <TextContato>Whatsapp</TextContato>
      </ViewIcon>




    </Container>

  );
}

export default Suporte;
