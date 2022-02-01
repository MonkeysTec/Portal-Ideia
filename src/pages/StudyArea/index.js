import React from 'react';
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



const StudyArea = () => {
  return (
    <ScrollView>
      <Container style={styles.safe}>


        <Thumbnail source={Tumb} />

        <View style={{width:'100%',marginLeft:'10%'}}>
          <TitleCourse>
            Administração Financeira
          </TitleCourse>

          <Hours />
          <CourseVideo/>
        </View>




      <Divider />
          <TitlesTopics>
            Apostilas para estudo
        </TitlesTopics>
        <CardApostilas title="Administração Financeira"/>
        <CardApostilas title="Análise da Geração de Lucros"/>
        <CardApostilas title="Análise do Ponto de Equilíbrio e Alavancagem"/>
        <CardApostilas title="Gestão"/>


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
