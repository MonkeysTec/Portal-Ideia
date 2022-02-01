import React from 'react';
import { View,Text } from 'react-native';
import {
  Container,
  ImageAproved,
  Title,
  YourNote,
  CardNote,
  DescriptionsAproved,
  TextPoints,
  TextDescription
} from './styles';
import Button from '../../components/Button';
import graduateImg from '../../assets/graduated-characters.png'
import { Divider } from '../DetaisCourse/styles';


const Aprovade = () => {
  return (
    <Container>
      <ImageAproved source={graduateImg}/>
      <Title>
        Parabéns!{ `\n`}
        Você foi aprovado
      </Title>
      <YourNote>
        <Text style={{fontSize:20,textAlign:'center'}}>Sua nota é de:</Text>
        <CardNote>
          <TextPoints>100 pontos</TextPoints>

        </CardNote>
      </YourNote>
      <Divider/>
      <DescriptionsAproved>
        <TextDescription>
          Nos dias de hoje, o conhecimento se faz necessário para
          atuar nas mais diversas áreas, e também se tornou um
          diferencial competitivo para qualquer profissional.{`\n`}
          <View style={{height:40} }/>

          Por isso, fazer cursos com certificado traz muitas
          vantagens.{`\n`}
          <View style={{height:40} }/>


          Por exemplo, ele pode ser o destaque em determinada
          área de atuação, servir de qualificação específica para
          determinado segmento, proporcionar maiores
          oportunidades de aumento de renda e comprovar a
          qualificação profissional de uma pessoa.
        </TextDescription>
      <Button type="primary" fullsize>
        Solicitar certificado
        </Button>
      </DescriptionsAproved>

  </Container>
  );
}

export default Aprovade;
