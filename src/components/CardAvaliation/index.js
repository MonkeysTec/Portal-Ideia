import React, { useState } from 'react';
import { View,Text,Platform } from 'react-native';
import { Checkbox } from 'react-native-paper';
import colors from '../../utils/colors';
import { Divider } from '../../pages/DetaisCourse/styles';

 import { Container,NumberQuestion,TitleQuestion ,ViewTitle,ViewCheck,TextQuestion} from './styles';

const CardAvaliation = () => {

  const [checked,setChecked] = useState()
  return (

    <>
      <Container>
      <ViewTitle>
        <NumberQuestion >1</NumberQuestion>
        <TitleQuestion>Uma parte crucial da administração financeira inclui</TitleQuestion>
      </ViewTitle>
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

        Concepção e assessoria para pessoas,
        empresas ou governos, criação de
        softwares;
        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

        Concepção e assessoria para pessoas,
        empresas ou governos, criação de
        softwares;
        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

        Concepção e assessoria para pessoas,
        empresas ou governos, criação de
        softwares;
        </TextQuestion>
        </ViewCheck>
        <Divider />
        <ViewCheck>
          {Platform.OS === 'ios' ? (
            <View style={{borderColor:colors.greyMax,borderWidth:2,marginLeft:10,borderRadius:8}}>

            <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />
            </View>

          ) : (
              <Checkbox onPress={() => {
        setChecked(!checked);
        }} status={checked ? 'checked' : 'unchecked'} color={colors.fontColor} style={{ borderRadius: 8 }} />

          )}

        <TextQuestion>

        Concepção e assessoria para pessoas,
        empresas ou governos, criação de
        softwares;
        </TextQuestion>
        </ViewCheck>





    </Container>

    </>
  )
}

export default CardAvaliation;
