import React from 'react';
import { StyleSheet,Platform,ScrollView,View} from 'react-native';
import Button from '../../components/Button';
import Tumb from '../../assets/testeTumb.jpeg'

import {
  Container,
  Thumbnail,
  TitleCourse,
  HoursCourse,
  Description,
  Content,
  Certificate,
  Divider,
  TitlesTopics,
  Icon,
  IconVideoView,
  TextVideo
} from './styles';
import clock from '../../assets/clock.png'
import video from '../../assets/video.png'



const DetaisCourse = () => {
  return (
    <ScrollView>
      <Container style={styles.safe}>


        <Thumbnail source={Tumb} />

        <View style={{width:'100%',marginLeft:'10%'}}>
          <TitleCourse>
        Administração Financeira
          </TitleCourse>

          <View style={{flexDirection:'row'}}>
            <Icon source={clock}/>

            <HoursCourse>
              de 08 à 280 horas
            </HoursCourse>
          </View>


        <IconVideoView>
          <Icon source={video}/>
          <TextVideo>
            Curso com Vídeo
          </TextVideo>
        </IconVideoView>
        <View style={{width:'90%'}}>
          <Button type="primary" fullsize={true}>
              Estudar Agora
          </Button>
        </View>
        </View>




      <Divider />
        <Description >
          <TitlesTopics>
            Descrição
          </TitlesTopics>{ `\n`}
        O curso de administração financeira trata dos assuntos
        relacionados à administração das finanças de empresas e
        organizações. Trata-se de um ramo privativo à
        Administração e é uma formação muito requisitada no
        mercado de trabalho.
        Assim, o curso de nível avançado fornece o conteúdo
        necessário para você aprimorar os conhecimentos em
        excel, usando fórmulas absolutas, múltiplas planilhas,
        funções de procura (PROCH e PROCV), banco de dados,
        função condicional (SE), tabela dinâmica, macros e funções
        financeiras.
        O curso de administração financeira do Portal Idea é
        online, gratuito e está disponível para início imediato.
        Confira!
        </Description>
      <Divider />

        <Content>
           <TitlesTopics>
              Conteúdo Programático
          </TitlesTopics>{ `\n`}
        • Introdução a gestão financeira;{ `\n`}
        • Diferença de gestão financeira e planejamento Financeiro;{ `\n`}
          • A importância do planejamento financeiro;{ `\n`}
          • Estratégia empresarial;{ `\n`}
          • Função financeira na empresa;{ `\n`}
          • Capital de giro;{ `\n`}
          • Análise da geração de lucros;{ `\n`}
          • Análise do ponto de equilíbrio e alavancagem;{ `\n`}
          • Mensuração dos resultados;{ `\n`}
          • Como fazer um bom planejamento financeiro;{ `\n`}
        </Content>
      <Divider />

        <Certificate>
          <TitlesTopics>
            Certificado

          </TitlesTopics>{ `\n`}

          Os certificados emitidos pelo Portal Idea são válidos em
          todo território nacional e emitidos em conformidade com o
          Lei nº 9.394/96; Decreto nº 5.154/04; Deliberação CEE 14/97
          (Indicação CEE 14/97), com validade para:
          • Educação continuada;{ `\n`}
          • Extensão universitária (horas extracurriculares);{ `\n`}
          • Titularidade para professores;{ `\n`}
          • Complementação de conhecimento;{ `\n`}
          • Ascensão de carreira ou cargo;{ `\n`}
          • Contagem de carga horária para estágio;{ `\n`}
          • Comprovação de Prova de Título;{ `\n`}
          • Enriquecimento de currículo;{ `\n`}
          • Concursos públicos;{ `\n`}
          • Avaliações para promoções{ `\n`}
      </Certificate>










    </Container>
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
        paddingTop: Platform.OS === 'ios' ? 100 : 0
  },

});
export default DetaisCourse;
