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
  ViewEstado
} from './styles';

const NewAccount = () => {
  const [checked, setChecked] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("java");
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
        <Text style={{width:'90%',fontFamily:'Montserrat_600SemiBold',textAlign:'left' }}>ATENÇÃO: O endereço abaixo será o
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
              <Picker.Item label="SP" value="sp" />
              <Picker.Item label="MG" value="mg" />
              <Picker.Item label="MG" value="mg" />
              <Picker.Item label="MG" value="mg" />
              <Picker.Item label="MG" value="mg" />
              <Picker.Item label="MG" value="mg" />

            </Picker>


        </View>


        ) : (
          <HalfView>

          <View style={{width:'67%',marginLeft:12}}>
            <Inputs placeholder="Edificio Magno" label="Cidade" />
          </View>

             <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>


        </HalfView>
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
