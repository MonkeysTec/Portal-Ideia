import React,{useEffect,useState,useContext} from 'react';
import { View ,ActivityIndicator,ScrollView} from 'react-native';

 import { Container } from './styles';
import CardsCurso from '../../components/CardsCurso'
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

const CursosMatriculados = () => {
   const [courses, setCourses] = useState([])
const { signed,signOut, user, signIn, loading } = useContext(AuthContext);

  useEffect(() => {

    //signOut()

    async function requestCourses() {
      const { data } = await axios.post('https://portalidea.com.br/api/cursosAndamento.php', {
        idaluno:user.usuario[0].idS_aluno
      })
     setCourses(data)
    }



    requestCourses();


  }, [])
   if (!courses) {
    return <View style={{ justifyContent: 'center', alignContent: 'center', alignItems:'center',flex:1}}>
      <ActivityIndicator style={{width:150,height:150}} />
    </View>
   }
  if (courses===[]) {
     <View style={{ justifyContent: 'center', alignContent: 'center', alignItems:'center',flex:1}}>
      <Text>Nao tem cursos ainda</Text>
    </View>
  }

  return (
    <ScrollView>
     <Container>
       {courses.slice(0,20).map(item => (
        <CardsCurso key={item.nomeCurso} title={item.nomeCurso} img={'https://portalidea.com.br/'+item.imagem}  item={item} hours={item.descricaoCH}/>
      ))}




    </Container>
    </ScrollView>

  );
}

export default CursosMatriculados;
