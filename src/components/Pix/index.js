import React from 'react';
import { View,Linking } from 'react-native';
import { Divider } from '../../pages/DetaisCourse/styles';
import Button from'../Button'
 import { Container,Title,Cnpj,Name,Description,SubDescription,EmailLink } from './styles';

const Pix = () => {
  return (
    <>
    <Container>
      <Title>
        Pix
      </Title>
      <Cnpj>
        CNPJ: 30.363.776/0001-37
      </Cnpj>
      <Name>
        Instituto de Desenvolvimento e{ `\n`}
Aprendizagem
      </Name>
      <Divider/>
      <Description>

        Envie o comprovante de depósito para nosso e-mail:
        <EmailLink  >
       contato@portalidea.com.br

        </EmailLink>

      </Description>
      <SubDescription>
           Ou entre me contato através do nosso
        Whatsapp clicando no botão abaixo.
      </SubDescription>



    </Container>
     <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
      <Button type='primary'>
        Whatsapp
      </Button>
      </View>
      </>
  );
}

export default Pix;
