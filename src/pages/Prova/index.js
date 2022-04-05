import React, { useEffect,useContext, useState } from 'react';
import { View,Text,ScrollView,ActivityIndicator } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';



const Prova = () => {
  const navigation = useNavigation()
const { signed,signOut, user, signIn } = useContext(AuthContext);
  const [prova, setProva] = useState(false)
  const [numberQuestion, setNumberQuestion] = useState(1)
  const [nomeCurso,setNomeCurso] = useState()
  const [loading,setLoading] = useState(true)




  useEffect(() => {
      async function getProva(){
        const infosCurso = await AsyncStorage.getItem('@infoCurso')

      const cursoInfo = JSON.parse(infosCurso)
      setNomeCurso(cursoInfo)


      try {
        const { data } = await axios.post('https://portalidea.com.br/api/prova.php', {
          "idaluno":user.usuario[0].idS_aluno,
          "idcurso":cursoInfo.idcurso,
          "nomecurso":infosCurso.nome
      })
      setProva(data);
      console.log('-----prova-------',data.prova)



      } catch (error) {
        console.log(error)
      }



      }

      getProva()
    setLoading(false)



  }, []);



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

    if(response.data.correcaoProva[0].nota>50){
      navigation.navigate('aprovado',{nota:response.data.correcaoProva[0].nota})
    }else{
      navigation.navigate('naoaprovado',{nota:response.data.correcaoProva[0].nota})
    }


  }

  if (loading) {
    return <View style={{ justifyContent: 'center', alignContent: 'center', alignItems:'center',flex:1}}>
      <ActivityIndicator style={{width:450,height:450}} />
    </View>
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
                pergunta={prova.prova[0].pergunta}
                respostaUm={prova.prova[0].resposta1}
                respostaDois={prova.prova[0].resposta2}
                respostaTres={prova.prova[0].resposta3}
                respostaQuatro={prova.prova[0].resposta4}
              />
              <Prova2
                numeroQuestao="2"

                pergunta={prova.prova[1].pergunta}
                respostaUm={prova.prova[1].resposta1}
                respostaDois={prova.prova[1].resposta2}
                respostaTres={prova.prova[1].resposta3}
                respostaQuatro={prova.prova[1].resposta4}
            />
              <Prova3
                numeroQuestao="3"

                pergunta={prova.prova[2].pergunta}
                respostaUm={prova.prova[2].resposta1}
                respostaDois={prova.prova[2].resposta2}
                respostaTres={prova.prova[2].resposta3}
                respostaQuatro={prova.prova[2].resposta4}
              />
              <Prova4
                numeroQuestao="4"

                pergunta={prova.prova[3].pergunta}
                respostaUm={prova.prova[3].resposta1}
                respostaDois={prova.prova[3].resposta2}
                respostaTres={prova.prova[3].resposta3}
                respostaQuatro={prova.prova[3].resposta4}
              />
              <Prova5
                numeroQuestao="5"

                pergunta={prova.prova[4].pergunta}
                respostaUm={prova.prova[4].resposta1}
                respostaDois={prova.prova[4].resposta2}
                respostaTres={prova.prova[4].resposta3}
                respostaQuatro={prova.prova[4].resposta4}
              />

              <Button type={'primary'} onPress={()=>respostas()} >ENVIAR PARA AVALIAÇÃO</Button>
            </>


          )
}





      </Container>
    </ScrollView>

  );
}

export default Prova;
