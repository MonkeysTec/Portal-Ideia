import React, { useEffect,useContext, useState } from 'react';
import { View,Text,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container,TitleAvaliation } from './styles';
import CardAvaliation from '../../components/CardAvaliation';
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

const Avaliation = () => {
const { signed,signOut, user, signIn, loading } = useContext(AuthContext);
  const [prova, setProva] = useState([])
const [numberQuestion,setNumberQuestion] = useState(1)

  useEffect(() => {

    async function getIdCurso() {
      const infosCurso = await AsyncStorage.getItem('@infoCurso')

      const cursoInfo = JSON.parse(infosCurso)
try {
  const { data } = await axios.post('https://portalidea.com.br/api/prova.php', {
          "idaluno":user.usuario[0].idS_aluno,
        	"idcurso":cursoInfo.idcurso,
	        "nomecurso":infosCurso.nome
  })
  setProva(data.prova)



} catch (error) {
  console.log(error)
}




    }

    getIdCurso()
  },[])

  return (
    <ScrollView>
    <Container>
      <Text style={{fontSize:18,fontFamily:'Montserrat_500Medium'}}>Avaliação Final</Text>
      <TitleAvaliation>
        Administração{`\n`}
        Finanaceira
      </TitleAvaliation>

        {
          prova.map(item => {

            return(
              <CardAvaliation
                key={item.pergunta}
                pergunta={item.pergunta}
                respostaUm={item.resposta1}
                respostaDois={item.resposta2}
                respostaTres={item.resposta3}
                respostaQuatro={item.resposta4}
              />

            )
          })
        }


      </Container>
    </ScrollView>

  );
}

export default Avaliation;
