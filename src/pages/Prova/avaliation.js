import React, { useEffect,useContext, useState } from 'react';
import { View,Text,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container,TitleAvaliation } from './styles';
import CardAvaliation from '../../components/CardAvaliation';
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

const Avaliation = () => {
const { signed,signOut, user, signIn, loading } = useContext(AuthContext);
  const [prova, setProva] = useState(false)
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
  }, [])


  return (
    <ScrollView>
    <Container>
      <Text style={{fontSize:18,fontFamily:'Montserrat_500Medium'}}>Avaliação Final</Text>
      <TitleAvaliation>
        Administração{`\n`}
        Finanaceira
      </TitleAvaliation>

        {
          prova && (
            <>
              <CardAvaliation
                numeroQuestao="1"
                key={prova[0].pergunta}
                pergunta={prova[0].pergunta}
                respostaUm={prova[0].resposta1}
                respostaDois={prova[0].resposta2}
                respostaTres={prova[0].resposta3}
                respostaQuatro={prova[0].resposta4}
              />
              <CardAvaliation
                numeroQuestao="2"

                key={prova[1].pergunta}
                pergunta={prova[1].pergunta}
                respostaUm={prova[1].resposta1}
                respostaDois={prova[1].resposta2}
                respostaTres={prova[1].resposta3}
                respostaQuatro={prova[1].resposta4}
            />
              <CardAvaliation
                numeroQuestao="3"

                key={prova[2].pergunta}
                pergunta={prova[2].pergunta}
                respostaUm={prova[2].resposta1}
                respostaDois={prova[2].resposta2}
                respostaTres={prova[2].resposta3}
                respostaQuatro={prova[2].resposta4}
              />
              <CardAvaliation
                numeroQuestao="4"

                key={prova[3].pergunta}
                pergunta={prova[3].pergunta}
                respostaUm={prova[3].resposta1}
                respostaDois={prova[3].resposta2}
                respostaTres={prova[3].resposta3}
                respostaQuatro={prova[3].resposta4}
              />
              <CardAvaliation
                numeroQuestao="5"

                key={prova[4].pergunta}
                pergunta={prova[4].pergunta}
                respostaUm={prova[4].resposta1}
                respostaDois={prova[4].resposta2}
                respostaTres={prova[4].resposta3}
                respostaQuatro={prova[4].resposta4}
            />
            </>


          )
}





      </Container>
    </ScrollView>

  );
}

export default Avaliation;
