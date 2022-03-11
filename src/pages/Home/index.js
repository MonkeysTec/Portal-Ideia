import React, { useEffect, useState,useContext } from 'react';
import { View,Text, ScrollView,ActivityIndicator } from 'react-native';
import axios from 'axios'
import { Container ,Title} from './styles';
import Cards from '../../components/Cards';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

const Home = ({ navigation }) => {
const { signed,signOut, user, signIn, loading } = useContext(AuthContext);

  const [courses, setCourses] = useState()

  useEffect(() => {

    //signOut()

    async function requestCourses() {
      const { data } = await axios.get('https://portalidea.com.br/api/cursosJson.php')
     // console.log(data)
      setCourses(data)
    }



    requestCourses();


  }, [])

  if (!courses) {
    return <View style={{ justifyContent: 'center', alignContent: 'center', alignItems:'center',flex:1}}>
      <ActivityIndicator style={{width:150,height:150}} />
    </View>
  }


  return (
    <ScrollView style={{ marginTop: 10, }} >
      <Title>
Cursos Populares
        </Title>
      <Container>

      {courses.slice(0,20).map(item => (
        <Cards key={item.nomeCurso}title={item.nomeCurso} img={'https://portalidea.com.br/'+item.imagem}  item={item} hours={item.descricaoCH}/>
      ))}
      </Container>


    </ScrollView>
  );
}

export default Home;
