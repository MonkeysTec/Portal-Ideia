import React,{useEffect,useContext,useState} from 'react';
import { View,ActivityIndicator } from 'react-native';

import { Container,Card,TitleCard,NumberCard,TextCard } from './styles';
import axios from 'axios';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';

const ResumoConta = () => {
  const { signed, user, signIn } = useContext(AuthContext);
  const [detalhes,setDetalhes] = useState()

  useEffect(() => {
    async function requestDadosAluno() {
      const { data } = await axios.post('https://portalidea.com.br/api/resumoAluno.php', {
        idaluno:user.usuario[0].idS_aluno
      })

      //console.log(data.resumo[0].concluidos)
      setDetalhes(data.resumo[0])
    }

    requestDadosAluno()

    console.log(detalhes)



  }, []);

  if (!detalhes) {
    return <View style={{ justifyContent: 'center', alignContent: 'center', alignItems:'center',flex:1}}>
      <ActivityIndicator style={{width:150,height:150}} />
    </View>

  }

  return (
    <Container>
      <Card>
        <TitleCard>
          Se matriculou em
        </TitleCard>
        <NumberCard>
          {detalhes.matriculados}
        </NumberCard>
        <TextCard>
          Cursos
        </TextCard>
      </Card>
      <Card>
        <TitleCard>
         Concluiu
        </TitleCard>
        <NumberCard>
          {detalhes.concluidos}
        </NumberCard>
        <TextCard>
          Cursos
        </TextCard>
      </Card><Card>
        <TitleCard>
          Solicitou
        </TitleCard>
        <NumberCard>
          {detalhes.solicitados}
        </NumberCard>
        <TextCard>
          Certificados
        </TextCard>
      </Card>
    </Container>
  );
}

export default ResumoConta;
