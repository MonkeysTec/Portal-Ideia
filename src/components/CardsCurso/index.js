import React from 'react';
import { View } from 'react-native';
import Button from '../Button';
import Hours from '../../components/Hours';
import CourseVideo from '../../components/CourseVideo';


import { Container,Thumbnail,Title,ViewDescription } from './styles';
 import test from '../../assets/teste.webp'
 import { useNavigation } from '@react-navigation/native';


const CardsCurso = ({ title, hours, img, chidren,item }) => {
    const navigation = useNavigation();


  return (
    <Container>
      <Thumbnail source={{
    uri: img,
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }} />

      <ViewDescription>
         <Title>
          {title}
         </Title>
      <Hours hours={hours} />
      <CourseVideo />
      </ViewDescription>



      <View style={{width:'90%',alignItems:'center',}}>
        <Button fullsize type="primary" onPress={()=>navigation.navigate('DetaisCourse',{item})} params={item} >
          Estudar
        </Button>
         <Button fullsize type="primary" onPress={()=>navigation.navigate('DetaisCourse',{item})} params={item} >
          prova
        </Button>
         <Button fullsize type="transparent" onPress={()=>navigation.navigate('DetaisCourse',{item})} params={item} >
          remover Matricula
        </Button>
      </View>

{chidren}
    </Container>
  ) ;
}

export default CardsCurso;
