import React, { useEffect, useState } from 'react';
import { View,Text, ScrollView } from 'react-native';
import axios from 'axios'
import { Container ,Title} from './styles';
import Cards from '../../components/Cards';

const Home = () => {
  const [courses,setCourses] = useState()
  useEffect(() => {

    async function requestCourses() {
      const { data } = await axios.get('https://portalidea.com.br/api/cursos.json')
     setCourses(data)
    }



    requestCourses();


  }, [])

  if (!courses) {
    return <Text>loading....</Text>
  }


  return (
    <ScrollView style={{ marginTop: 50 }} >
      <Title>
Cursos Populares
        </Title>
      <Container>

      {courses.slice(0,20).map(item => (
        <Cards title={item.nomeCurso} img={'https://portalidea.com.br/'+item.imagem} hours={item.cargaHoraria}/>
      ))}
      </Container>


    </ScrollView>
  );
}

export default Home;
