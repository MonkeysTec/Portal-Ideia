import React, { useEffect, useState,useContext } from 'react';
import { StyleSheet,Platform,ScrollView,View,Text, Alert} from 'react-native';
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
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';



const DetaisCourse = ({ route }) => {
const { signed,signOut, user, signIn, loading } = useContext(AuthContext);
const [matriculados,setMatriculados] = useState(false)
  const navigation = useNavigation()
  const { item, img } = route.params;

  console.log(item)


  const [image, setImage] = useState()


  useEffect(() => {
      async function verificarMatricula(){
          const { data } = await axios.post('https://portalidea.com.br/api/cursosAndamento.php', {
            idaluno:user.usuario[0].idS_aluno
          })
        //console.log(data.cursosAndamento)

        function verificarCurso(value) {

          if (item.idCurso === value.idCurso) {

            return setMatriculados(true)
          }
        }

        const curso = data.cursosAndamento.filter(verificarCurso)

      }


    verificarMatricula()
  }, []);



  async function matricularCurso() {

    try {
      const response = await axios.post('https://portalidea.com.br/api/matricularNovoCurso.php', {
        idaluno: user.usuario[0].idS_aluno,
        idcurso:item.idCurso
      })

      navigation.navigate('StudyArea',item)


      Alert.alert('Matriculado com sucesso')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ScrollView >
      <Container style={styles.safe}>


     <Thumbnail source={{
    uri: img,
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

          {
            matriculados?(<View style={{width:'90%'}}>
          <Button type="primary" fullsize={true} onPress={()=> navigation.navigate('StudyArea',{item})}>
             Area de estudo


          </Button>
        </View>):(<View style={{width:'90%'}}>
          <Button type="primary" fullsize={true} onPress={()=> matricularCurso()}>
                Estudar Agora

          </Button>
        </View>)
          }


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
        paddingTop: Platform.OS === 'ios' ? 10 : 0
  },

});
export default DetaisCourse;
