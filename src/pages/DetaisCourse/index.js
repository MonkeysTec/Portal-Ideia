import React, { useEffect, useState } from 'react';
import { StyleSheet,Platform,ScrollView,View,Text} from 'react-native';
import Button from '../../components/Button';
import Tumb from '../../assets/testeTumb.jpeg'
import CourseVideo from '../../components/CourseVideo'
import {
  Container,
  Thumbnail,
  TitleCourse,
  Description,
  Content,
  Certificate,
  Divider,
  TitlesTopics,
} from './styles';
import clock from '../../assets/clock.png'
import video from '../../assets/video.png'
import Hours from '../../components/Hours';
 import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import teste from '../../assets/teste.webp'



const DetaisCourse = ({  route }) => {
  const navigation = useNavigation()
  const { item, img } = route.params;
  //console.log(item.nomeCurso)
  const [image, setImage] = useState()
  useEffect(() => {
  setImage('https://portalidea.com.br/' + item.imagem);




  }, []);




  return (
    <ScrollView style={{marginTop:10}}>
      <Container style={styles.safe}>


     <Thumbnail source={{
    uri: image,
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }} />

        <View style={{width:'100%',marginLeft:'10%'}}>
          <TitleCourse>
          {item.nomeCurso}
          </TitleCourse>

          <Hours hours={item.descricaoCH} />
          <CourseVideo/>



        <View style={{width:'90%'}}>
          <Button type="primary" fullsize={true} onPress={()=> navigation.navigate('AreaEstudante',{item})}>
              Estudar Agora
          </Button>
        </View>
        </View>




      <Divider />
        <Description >
          <TitlesTopics>
            Descrição
          </TitlesTopics>{ `\n`}
        {item.descricao}
        </Description>
      <Divider />
    </Container>
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
        paddingTop: Platform.OS === 'ios' ? 100 : 0
  },

});
export default DetaisCourse;
