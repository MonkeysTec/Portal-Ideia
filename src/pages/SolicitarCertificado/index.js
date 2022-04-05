import React, { useState,useContext,useEffect } from 'react';
import { View,Text,Picker, Alert } from 'react-native';
import colors from '../../utils/colors';

 import { Container,Title,DataAndroid,Obs,DivRegras,ViewCheck ,TextQuestion,DivTaxa,TextValor,TextTaxa} from './styles';
 import { Checkbox } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Divider } from '../DetaisCourse/styles';
import Button from '../../components/Button'
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import { useNavigation } from '@react-navigation/native';

const SolicitarCertificado = ({route}) => {
const { signed,signOut, user, signIn } = useContext(AuthContext);
const navigation  = useNavigation()
  const [selectedValue, setSelectedValue] = useState('digital');
  const [checked, setChecked] = React.useState(false);
  const [valor,setValor] = useState('39,90');
  const[certificado,setCertificado]=useState(['digital','fisico']);




  const [loading,setLoading] = useState(false);

  const {item} = route.params;
  console.log(item)

 /*  [idcurso]
  [tipocertificado 0 / 1 {0 = digital / 1 = fisico}]
  [dataSolicitacao {AAAA-MM-DD}]
  [declaracao]
  [nomecurso]  */

  async function solicitarCertificado(){

    if(checked){

      try {
        const {data} = await axios.post('https://portalidea.com.br/api/solicitarCertificado.php',{
          idcurso:item.idCurso,
          tipocertificado:selectedValue==='digital'?'0':'1',
          dataSolicitacao:"2022-03-22",
          declaracao:"aceita",
          nomecurso:item.nomeCurso,
          cargahoraria:"0",
          idaluno:user.usuario[0].idS_aluno

        });


        Alert.alert("Solicitado com sucesso")

        navigation.navigate('pagamento',selectedValue)

      } catch (error) {
        console.log(error)
      }

    }else{
      Alert.alert('Aceitar Termos ')
    }


  }

  return(
    <ScrollView>
<Container>
    <Title>Dados do Certificado</Title>
    <DataAndroid>

    <Picker
              selectedValue={selectedValue}
              style={{width:'90%'}}
              onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
              >
              {
                certificado.map((item => (
                  <Picker.Item label={item} value={item} />

                )))
              }

            </Picker>
    </DataAndroid>

    <Obs>
    ATENÇÃO: Após a liberação do certificado
não será possível a alteração da carga
horária, portanto é de responsabilidade do
aluno declarar a carga horária desejada no
ato da solicitação para que seu certificado
seja emitido sem falhas.
</Obs>
<Text style={{color:colors.fontColor,fontSize:16,marginTop:10,fontFamily:'Montserrat_600SemiBold'}}>Declaração de conhecimentos prévios</Text>

<DivRegras>

Eu Enã M. Lins Bezerra, aluno(a)
devidamente matriculado(a) no
WWW.PORTALIDEA.COM.BR, declaro
para os devidos fins que estudei na
plataforma de estudos online da
Instituição Portal IDEA e possuo
conhecimentos educacionais prévios
sobre todos os assuntos estudados no
Curso de HTML 5 e CSS 3 e que já vinha
estudando offline no método EAD o
conteúdo do referido curso pelo
período necessário para emissão do
meu certificado conforme a carga
horária por mim solicitado. Declaro
ainda que realizei com aprovação todas
as avaliações finais do curso e assim
estar apto(a) a receber meu certificado.
Por este motivo venho através desta
solicitar meu Certificado de Conclusão
de Curso com uma Carga Horária
específica informada acima finalizado
também na data informada acima
junto com meus dados e a quantidade
de dias que estudei. Assim, por ser
verdade a presente Declaração,
confirmo a veracidade dos conteúdos
existentes neste documento.
  </DivRegras>


            <ViewCheck>
            {Platform.OS === 'ios' ? (
              <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8,marginBottom:100}}>

                <Checkbox onPress={() => {setChecked(!checked);
                }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
              </View>

            ) : (
                <Checkbox onPress={() => {
                  setChecked(!checked);
                }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

            )}

<TextQuestion>

Li e concordo com os termos acima,
ciente de que dar informação ou
declaração falsa acarretará ao
declarante às penas da lei, conforme
o artigo 299 do decreto lei No 2.848 de
07 de Dezembro de 1940.

</TextQuestion>
</ViewCheck>
<Divider/>

<DivTaxa>
<TextTaxa>
  TAXA DE EMISSÃO
  </TextTaxa>
  <TextValor>
R$ {selectedValue==='digital'?'39,90':'59,90'}
  </TextValor>
</DivTaxa>
<Button type={'primary'} fullsize={true} style={{marginBottom:30}} onPress={()=>solicitarCertificado()}>SOLICITAR CERTIFICADO</Button>


</Container>
</ScrollView>
  );
}


export default SolicitarCertificado;
