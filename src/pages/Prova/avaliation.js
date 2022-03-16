import React, { useEffect,useContext, useState } from 'react';
import { View,Text,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container,TitleAvaliation } from './styles';
import CardAvaliation from '../../components/CardAvaliation';
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import Prova1 from '../../components/Prova1';
import Prova2 from '../../components/Prova2';
import Prova3 from '../../components/Prova3';
import Prova4 from '../../components/Prova4';
import Prova5 from '../../components/Prova5';
import Button from '../../components/Button'


const Avaliation = () => {
const { signed,signOut, user, signIn, loading } = useContext(AuthContext);
  const [prova, setProva] = useState(false)
  const [numberQuestion, setNumberQuestion] = useState(1)
  const [nomeCurso,setNomeCurso] = useState()


  useEffect(() => {

    async function getIdCurso() {
      const infosCurso = await AsyncStorage.getItem('@infoCurso')

      const cursoInfo = JSON.parse(infosCurso)
      setNomeCurso(cursoInfo)


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

  async function respostas() {

    const r1 = await AsyncStorage.getItem('@respostaCard1');
       const r11 = JSON.parse(r1)


    const r2 = await AsyncStorage.getItem('@respostaCard2');
       const r22 = JSON.parse(r2)

    const r3 = await AsyncStorage.getItem('@respostaCard3');
       const r33= JSON.parse(r3)

    const r4 = await AsyncStorage.getItem('@respostaCard4');
       const r44 = JSON.parse(r4)

    const r5 = await AsyncStorage.getItem('@respostaCard5');
      const r55 = JSON.parse(r5)

    console.log(nomeCurso.nome)

    const dados = {
nomecurso: `${nomeCurso.nome}`,
    idcurso:`${nomeCurso.idcurso}`,
    idaluno:"855459",
    resp1:r11,
    resp2:r22,
    resp3:r33,
      resp4: r44,
    resp5:r55
    }

    console.log(dados)
    const response = await axios.post('https://portalidea.com.br/api/corrigirProva.php', dados)

    console.log(response.data)


  }


  return (
    <ScrollView>
    <Container>
      <Text style={{fontSize:18,fontFamily:'Montserrat_500Medium'}}>Avaliação Final</Text>


        {

          prova && (

            <>
               <TitleAvaliation>
         {nomeCurso.nome}
      </TitleAvaliation>
              <Prova1
                numeroQuestao="1"
                key={prova[0].pergunta}
                pergunta={prova[0].pergunta}
                respostaUm={prova[0].resposta1}
                respostaDois={prova[0].resposta2}
                respostaTres={prova[0].resposta3}
                respostaQuatro={prova[0].resposta4}
              />
              <Prova2
                numeroQuestao="2"

                key={prova[1].pergunta}
                pergunta={prova[1].pergunta}
                respostaUm={prova[1].resposta1}
                respostaDois={prova[1].resposta2}
                respostaTres={prova[1].resposta3}
                respostaQuatro={prova[1].resposta4}
            />
              <Prova3
                numeroQuestao="3"

                key={prova[2].pergunta}
                pergunta={prova[2].pergunta}
                respostaUm={prova[2].resposta1}
                respostaDois={prova[2].resposta2}
                respostaTres={prova[2].resposta3}
                respostaQuatro={prova[2].resposta4}
              />
              <Prova4
                numeroQuestao="4"

                key={prova[3].pergunta}
                pergunta={prova[3].pergunta}
                respostaUm={prova[3].resposta1}
                respostaDois={prova[3].resposta2}
                respostaTres={prova[3].resposta3}
                respostaQuatro={prova[3].resposta4}
              />
              <Prova5
                numeroQuestao="5"

                key={prova[4].pergunta}
                pergunta={prova[4].pergunta}
                respostaUm={prova[4].resposta1}
                respostaDois={prova[4].resposta2}
                respostaTres={prova[4].resposta3}
                respostaQuatro={prova[4].resposta4}
              />

              <Button type={'primary'} onPress={()=>respostas()} >ENVIAR PARA AVALIAÇÃO</Button>
            </>


          )
}





      </Container>
    </ScrollView>

  );
}

export default Avaliation;
