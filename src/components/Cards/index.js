import React from 'react';
import { View } from 'react-native';
import Button from '../Button';
import Hours from '../../components/Hours';
import CourseVideo from '../../components/CourseVideo';


import { Container,Thumbnail,Title,ViewDescription } from './styles';
 import test from '../../assets/teste.webp'
 import { useNavigation } from '@react-navigation/native';


const Cards = ({ title, hours, img, chidren,item }) => {
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



      <View style={{width:'90%'}}>
        <Button fullsize type="primary" onPress={()=>navigation.navigate('DetaisCourse',{item})} params={item} >
          Acessar curso
        </Button>
      </View>

{chidren}
    </Container>
  ) ;
}

export default Cards;
