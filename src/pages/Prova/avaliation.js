import React from 'react';
import { View,Text,ScrollView } from 'react-native';

import { Container,TitleAvaliation } from './styles';
import CardAvaliation from '../../components/CardAvaliation';
const Avaliation = () => {
  return (
    <ScrollView>
    <Container>
      <Text style={{fontSize:18,fontFamily:'Montserrat_500Medium'}}>Avaliação Final</Text>
      <TitleAvaliation>
        Administração{`\n`}
        Finanaceira
      </TitleAvaliation>
      <CardAvaliation />
      <CardAvaliation/>

      </Container>
    </ScrollView>

  );
}

export default Avaliation;
