import React,{useContext, useState} from 'react';
import { View } from 'react-native';
import Button from '../Button';
import Hours from '../../components/Hours';
import CourseVideo from '../../components/CourseVideo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

import { Container,Thumbnail,Title,ViewDescription } from './styles';
 import test from '../../assets/teste.webp'
 import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const CardsCurso = ({ title, hours, img, chidren,item }) => {
    const navigation = useNavigation();
    const [removed,setRemoved]=useState();
    const { signed,signOut, user, signIn, loading,removeMatricular } = useContext(AuthContext);
console.log(item)
async function removerMatricula(){

  try {
    const dados = {
      idcurso:item.idCurso,
      idaluno:user.usuario[0].idS_aluno
    }

    const { data } = await axios.post('https://portalidea.com.br/api/removerMatricula.php', dados)

          //console.log(data)


  } catch (error) {
    console.log(error)

  }
    removeMatricular();



}

  async function prova(idcurso,nome) {
    await AsyncStorage.setItem('@infoCurso', JSON.stringify({idcurso, nome}));
      const idCurso = await AsyncStorage.getItem('@infoCurso')


   navigation.navigate('avaliation')

  }


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
        <Button fullsize type="primary" onPress={()=>navigation.navigate('StudyArea',{item})} params={item} >
          Estudar
        </Button>
         <Button fullsize type="primary" onPress={()=>prova(item.idCurso,item.nomeCurso,)} params={item} >
          prova
        </Button>
         <Button fullsize type="transparent" onPress={()=>removerMatricula(item.idCurso)} params={item} >
          remover Matricula
        </Button>
      </View>

{chidren}
    </Container>
  ) ;
}

export default CardsCurso;
