import React, { useState } from 'react';
import { View,Text,Platform } from 'react-native';
import { Checkbox } from 'react-native-paper';
import colors from '../../utils/colors';
import { Divider } from '../../pages/DetaisCourse/styles';

 import { Container,NumberQuestion,TitleQuestion ,ViewTitle,ViewCheck,TextQuestion} from './styles';

const CardAvaliation = ({
  pergunta,
  respostaUm,
  respostaDois,
  respostaTres,
  respostaQuatro}) => {

  const [checked, setChecked] = useState({
    question1: false,
    question2:false,
    question3:false,
    question4:false,
    question5:false,

  })

  console.log(checked)

  const numero = pergunta.split('.')
  function marcarCheck(e) {
    console.log(e.testeID)
}
  return (

    <>
      <Container>
      <ViewTitle>
          <NumberQuestion >{ numero[0]}</NumberQuestion>
          <TitleQuestion>{ numero[1]}</TitleQuestion>
      </ViewTitle>
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() =>[...checked,!checked.question1]} status={checked.question1? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox testID='teste' onPress={(e) => {
       marcarCheck(e);
        }} status={checked.question1 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
          )}

        <TextQuestion>

       {respostaUm}
        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked.question2);
        }} status={checked.question2 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked.question2);
        }} status={checked.question2 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

             {respostaDois}

        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked.question3);
        }} status={checked.question3 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked.question3);
        }} status={checked.question3 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

       {respostaTres}

        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked.question4);
        }} status={checked.question4 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked.question4);
        }} status={checked.question4 ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

              {respostaQuatro}

        </TextQuestion>
        </ViewCheck>





    </Container>

    </>
  )
}

export default CardAvaliation;
