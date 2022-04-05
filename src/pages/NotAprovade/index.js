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
import { useNavigation } from '@react-navigation/native';


const NotAprovade = ({route}) => {
  const navigation = useNavigation()
  console.log(route.params);
  return (
    <Container>
      <ImageAproved source={graduateImg}/>
      <Title>

        Infelizmente sua nota não{ `\n`}
foi o suficiente

      </Title>
      <YourNote>
        <Text style={{fontSize:20,textAlign:'center'}}>Sua nota é de:</Text>
        <CardNote>
          <TextPoints>{route.params.nota} pontos</TextPoints>

        </CardNote>
      </YourNote>
      <Divider/>
      <DescriptionsAproved>
        <TextDescription>
          A sua nota precisa acima de 60 pontos para ser aprovado,
mas não desanime, você pode tentar novamente!{`\n`}
          <View style={{height:40} }/>

        Continue estudando e após estar mais confiante nos seus
conhecimentos, tente novamente.
O Portal IDEA permite até 3 tentativas para realizar sua
avaliação final.



        </TextDescription>
      <Button type="primary" fullsize onPress={()=>navigation.navigate('prova')}>
        tentar novamente
        </Button>
      </DescriptionsAproved>

  </Container>
  );
}

export default NotAprovade;
