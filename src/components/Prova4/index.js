import React, { useState,useEffect } from 'react';
import { View,Text,Platform, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';
import colors from '../../utils/colors';
import { Divider } from '../../pages/DetaisCourse/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

 import { Container,NumberQuestion,TitleQuestion ,ViewTitle,ViewCheck,TextQuestion} from './styles';

const Prova4 = ({
  pergunta,
  respostaUm,
  respostaDois,
  respostaTres,
  respostaQuatro,
  numeroQuestao }) => {
 const [checked, setChecked] = React.useState('first');




   useEffect(() => {
     async function guardarResposta() {
        await AsyncStorage.setItem('@respostaCard4',JSON.stringify(checked));


     }
    guardarResposta()
  },[checked])
  return (

    <>
      <Container>
      <ViewTitle>
          <NumberQuestion >{numeroQuestao}</NumberQuestion>
          <TitleQuestion>{ pergunta}</TitleQuestion>
      </ViewTitle>
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={ setChecked('1')} status={checked==='1'? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox testID='teste' onPress={(e) => {
       setChecked('1');
        }} status={checked==='1'  ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
          )}

        <TextQuestion>

       {respostaUm}
        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {setChecked1(false)
        setChecked('2');
        }} status={checked==='2' ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked('2');
        }} status={checked==='2' ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

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
        setChecked('3') ;
        }} status={checked==='3' ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked('3') ;
        }} status={checked=='3' ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

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
        setChecked('4') ;
        }} status={checked==='4' ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked('4');
        }} status={checked==='4' ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

              {respostaQuatro}

        </TextQuestion>
        </ViewCheck>





    </Container>

    </>
  )
}

export default Prova4;
