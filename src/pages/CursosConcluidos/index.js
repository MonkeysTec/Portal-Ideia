import axios from 'axios';
import React,{useContext,useEffect, useState} from 'react';
import { View,Text } from 'react-native';
import img from '../../assets/teste.webp'
import Button from '../../components/Button';

import { Container,Img,Title,Tag,Card} from './styles';
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const CursosConcluidos = () => {
  const navigation = useNavigation()
  const { signed,signOut, user, signIn, loading } = useContext(AuthContext);
  const [cursosConcluidos,setCursosConcluidos] = useState()

  useEffect(() => {

    async function requestCursos(){
      const {data} = await axios.post('https://portalidea.com.br/api/cursosConcluidos.php',{
        idaluno:user.usuario[0].idS_aluno
      })
    setCursosConcluidos(data.cursosConcluidos)

    }

    requestCursos()


  }, []);
  return (
    <Container>


    {cursosConcluidos?.map(item=>(
      <Card key={item.idCurso}>
      <Img  source={{
        uri: item.imagem,
        method: 'POST',
        headers: {
          Pragma: 'no-cache'
        },
        body: 'Your Body goes here'
      }} />
      <Title>{item.nomeCurso}</Title>
      <Tag style={{ borderRadius: 8 }}>Nota Final: {item.nota} Pontos</Tag>
      <Tag style={{ borderRadius: 8 }}>Concluído em: {item.dataConclusao}</Tag>



      <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}>
        <Button type={'primary'} onPress={()=>navigation.navigate('solicitarCertificado',{item})}>
          SOLICITAR CERTIFICADO</Button>
        <Button type={'transparent'} onPress={()=>navigation.navigate('DetaisCourse',{item,img:item.imagem})}>
    MATERIAL DE ESTUDOS</Button>
      </View>


    </Card>
    ))}


    </Container>
  );
}

export default CursosConcluidos;
