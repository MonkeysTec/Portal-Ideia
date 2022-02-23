import React,{useState} from 'react';
import { View ,Picker,Text,ScrollView, Platform} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import CheckBox from 'react-native-check-box';
import {
  Container,
  Title,
  LoginAccount,
  ViewCheck,
  TextCheck,
  HalfView,
  ViewEstado,
  DataAndroid
} from './styles';
import { Label } from '../../components/Inputs/styles';

const NewAccount = () => {
  const [checked, setChecked] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("java");

  const [estados, setEstados] = useState(
    ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
      'PB', 'PR', 'PE', 'PI', 'RJ', 'RN','RS','RO','RR','SC','SP','SE','TO']
  )
  return (
    <ScrollView style={{marginTop:40}}>


      <Container>
      <Title>Dados Pessoais</Title>
        <Inputs placeholder="rodrigo@gmail.com" label="Nome Completo" />
        <Inputs placeholder="rodrigo@gmail.com"  label="E-mail"/>
        <Inputs placeholder="999.999.999-99"  label="CPF"/>
        <Inputs placeholder="99999999" label="RG" />
        <Inputs placeholder="(00)00000-0000" label="Telefone" />

        <Title>Endereço</Title>
        <Text style={{ width: '90%', fontFamily: 'Montserrat_600SemiBold', textAlign: 'left' }}>ATENÇÃO: O endereço
              abaixo será o
              endereço de envio do seu certificado caso
          solicite o ENVIO FÍSICO
        </Text>
        <Inputs placeholder="12 das flores" label="RG" />
        <HalfView>
          <ViewEstado>
            <Inputs placeholder="000" label="N°" />
          </ViewEstado>
          <View style={{width:'67%'}}>
            <Inputs placeholder="Edificio Magno" label="Cidade" />

          </View>

        </HalfView>
        <Inputs placeholder="Edificio Magno" label="Complemento" />
        <Inputs placeholder="999999-99" label="Complemento" />


        {Platform.OS === 'ios' ? (
          <View style={{width:'100%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>

            <Inputs placeholder="Edificio Magno" label="Cidade" />

             <Picker
              selectedValue={selectedValue}
              style={{width:'90%',marginTop:-50}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
              {
                estados.map((item => (
                  <Picker.Item label={item} value={item} />

                )))
              }

            </Picker>


        </View>


        ) : (
            <>
          <View style={{width:'100%',marginBottom:30}}>
                <Inputs placeholder="Edificio Magno" label="Cidade" />

              </View>
              <View style={{ flex:1 }}>
                <Text style={{ textAlign:'left',marginLeft:'-40%',color:'#65389E',fontFamily:'Montserrat_600SemiBold'}}>Estado</Text>
              </View>

          <DataAndroid >
             <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: '100%',paddingTop:-20}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                  {estados.map((item => (
                    <Picker.Item label={item} value={item} />

                  )))}

            </Picker>


              </DataAndroid>
              </>
        )}









        <ViewCheck>
          <CheckBox
            isChecked={true}
            leftText={"CheckBox"}
          />
        <TextCheck>Declaro que li e concordo com os
              Termos de Contrato.
        </TextCheck>
        </ViewCheck>
      <Button type="primary">
        Atualizar dados
      </Button>

      </Container>
       </ScrollView>

  );
}

export default NewAccount;
