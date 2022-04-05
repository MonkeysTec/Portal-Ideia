import React,{useState,useEffect} from 'react';
import { StyleSheet,Platform,ScrollView,View} from 'react-native';
import Button from '../../components/Button';
import Tumb from '../../assets/testeTumb.jpeg'
import { WebView } from 'react-native-webview';

import CourseVideo from '../../components/CourseVideo'
import {
  Container,
  Thumbnail,
  TitleCourse,
  Description,
  Content,
  Certificate,
  Divider,
  TitlesTopics,
} from './styles';
import clock from '../../assets/clock.png'
import video from '../../assets/video.png'
import Hours from '../../components/Hours';
import CardApostilas from '../../components/CardApostilas';
import axios from 'axios';


const StudyArea = ({route}) => {
 const [image, setImage] = useState()
 const [conteudo,setConteudo] = useState([])
 const [url1,setUrl1] = useState(null)
 const [url2,setUrl2] = useState(null)
 const [url3,setUrl3] = useState(null)
 const [url4,setUrl4] = useState(null)
 const [url5,setUrl5] = useState(null)


const {item} = route.params;
console.log('IFRAMA',conteudo)


  useEffect(() => {


    const img = item.imagem.replace('https://portalidea.com.br/', '')
    //console.log('ITEM', conteudo.urlVideoAula1)



    setImage('https://portalidea.com.br/'+img)


    async function videosAula(){
      const {data} = await axios.post('https://portalidea.com.br/api/materialEstudos.php',{
        idcurso:item.idCurso
      })

      console.log(item.idCurso)

      setConteudo(data.materialCurso[0])
      setUrl1(data.materialCurso[0].urlVideoAula1.split(" "))
      setUrl2(data.materialCurso[0].urlVideoAula2.split(" "))
      setUrl3(data.materialCurso[0].urlVideoAula3.split(" "))
      setUrl4(data.materialCurso[0].urlVideoAula4.split(" "))
      setUrl5(data.materialCurso[0].urlVideoAula5.split(" "))





    }
    videosAula();












  }, []);



  if(conteudo===[]){
    return null
  }



  return (
    <ScrollView>
      <Container style={styles.safe}>



     <Thumbnail source={{
    uri:image ,
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }} />

        <View style={{width:'100%',marginLeft:'10%'}}>
          <TitleCourse>
           {item.nomeCurso}
          </TitleCourse>

          <Hours hours={item.descricaoCH} />
          <CourseVideo/>
        </View>




      <Divider />
          <TitlesTopics>
            Apostilas para estudo
        </TitlesTopics>
        <CardApostilas title="Introduçao teste" />
        <CardApostilas title="Introduçao teste"/>
        <CardApostilas title="Introduçao teste"/>
        <CardApostilas title="Introduçao teste"/>




        <Divider />
         <TitlesTopics>
            Vídeos para estudo
        </TitlesTopics>

{
  conteudo.urlVideoAula1&& url1 &&(
    <WebView
    source={{ html:`<iframe width="1000" height="555" ${url1[3]}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
    style={{ marginTop: 20,width:350,height:200 }}
  />
  )


}
{
  conteudo.urlVideoAula2&& url2 &&(
    <WebView
    source={{ html:`<iframe width="1000" height="555" ${url2[3]}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
    style={{ marginTop: 20,width:350,height:200 }}
  />
  )
}
{
  conteudo.urlVideoAula3&& url3?(
    <WebView
    source={{ html:`<iframe width="1000" height="555" ${url3[3]}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
    style={{ marginTop: 20,width:350,height:200 }}
  />
  ):(<></>)
}
{
  conteudo.urlVideoAula4&& url4?(
    <WebView
    source={{ html:`<iframe width="1000" height="555" ${url4[3]}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
    style={{ marginTop: 20,width:350,height:200 }}
  />
  ):(<></>)
}
{
  conteudo.urlVideoAula5&& url5?(
    <WebView
    source={{ html:`<iframe width="1000" height="555" ${url5[3]}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
    style={{ marginTop: 20,width:350,height:200 }}
  />
  ):(<></>)
}
        </Container>
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
        paddingTop: Platform.OS === 'ios' ? 10 : 0
  },

});
export default StudyArea;
