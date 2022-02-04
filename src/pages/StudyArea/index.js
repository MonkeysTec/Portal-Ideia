import React,{useState,useEffect} from 'react';
import { StyleSheet,Platform,ScrollView,View} from 'react-native';
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
import CardApostilas from '../../components/CardApostilas';


const StudyArea = ({route}) => {
 const [image, setImage] = useState()

  const { item } = route.params;
  console.log(item)
  useEffect(() => {
  setImage('https://portalidea.com.br/' + item.imagem);




  }, []);



  return (
    <ScrollView>
      <Container style={styles.safe}>



     <Thumbnail source={{
    uri:image ,
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
        </View>




      <Divider />
          <TitlesTopics>
            Apostilas para estudo
        </TitlesTopics>
        <CardApostilas title="Introduçao teste" />
        <CardApostilas title="Introduçao teste"/>
        <CardApostilas title="Introduçao teste"/>
        <CardApostilas title="Introduçao teste"/>




        <Divider />
         <TitlesTopics>
            Vídeos para estudo
        </TitlesTopics>
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
export default StudyArea;
