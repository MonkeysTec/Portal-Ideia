import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import img from '../../assets/teste.webp'
import { Container,Img,Title,Rastreio,Card} from './styles';

const MeusCertificados = () => {
  return (
    <Container>
      <Card>
        <Img source={ img}/>
        <Title>Administração Financeira</Title>
        <Rastreio style={{borderRadius:8}}>Código de Rastreio: AB123456CD</Rastreio>

        <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}>
          <Button type={'primary'}>
      emitir certificado</Button>
        </View>

      </Card>

    </Container>
  );
}

export default MeusCertificados;
