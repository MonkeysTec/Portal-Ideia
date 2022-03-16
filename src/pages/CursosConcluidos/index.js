import React from 'react';
import { View,Text } from 'react-native';
import img from '../../assets/teste.webp'
import Button from '../../components/Button';

import { Container,Img,Title,Tag,Card} from './styles';

const CursosConcluidos = () => {
  return (
    <Container>
      <Card>
        <Img source={ img}/>
        <Title>Administração Financeira</Title>
        <Tag style={{ borderRadius: 8 }}>Nota Final: 100 Pontos</Tag>
        <Tag style={{ borderRadius: 8 }}>Concluído em: 12/01/2020</Tag>



        <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}>
          <Button type={'primary'}>
            SOLICITAR CERTIFICADO</Button>
          <Button type={'transparent'}>
      MATERIAL DE ESTUDOS</Button>
        </View>


      </Card>

    </Container>
  );
}

export default CursosConcluidos;
