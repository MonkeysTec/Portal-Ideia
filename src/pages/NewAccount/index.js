import React,{useState} from 'react';
import { View ,Picker,Text,ScrollView, Platform} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import CheckBox from 'react-native-check-box';
import { useForm, Controller } from "react-hook-form";

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
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: 'rodrigo1612fm@gmail.com',
      senha: 'rodri1234',
      nome: '',
      cpf: '',
      rg: '',
      telefone: '',
      endereco: '',
      numero: '',
      cidade: '',
      complemento: '',
      cep: '',
      cidade:''

    }
  });
  const onSubmit = data => console.log(data);
  const [estados, setEstados] = useState(
    ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
      'PB', 'PR', 'PE', 'PI', 'RJ', 'RN','RS','RO','RR','SC','SP','SE','TO']
  )
  return (
    <ScrollView style={{marginTop:40}}>


      <Container>
        <Title>Dados Pessoais</Title>


        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="E-mail"

          />
        )}
        name="email"
        />
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Nome Completo"

          />
        )}
        name="nome"
        />

        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Cpf"

          />
        )}
        name="cpf"
        />

        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Rg"
            placeholder="00.000000"

          />
        )}
        name="rg"
        />


         <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Telefone"
            placeholder="(00)00000000"

          />
        )}
        name="telefone"
      />



        <Title>Endereço</Title>
        <Text style={{ width: '90%', fontFamily: 'Montserrat_600SemiBold', textAlign: 'left' }}>ATENÇÃO: O endereço
              abaixo será o
              endereço de envio do seu certificado caso
          solicite o ENVIO FÍSICO
        </Text>



        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Endereco"
            placeholder="R. das Flores"

          />
        )}
        name="endereco"
        />



        <HalfView>
          <ViewEstado>
            <Inputs placeholder="000" label="N°" />
          </ViewEstado>
          <View style={{width:'67%'}}>
            <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Cidade"
            placeholder="Espirito Santo"

          />
        )}
        name="cidade"
      />

          </View>

        </HalfView>

         <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Complemento"
            placeholder="Casa"

          />
        )}
        name="complemento"
        />
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Cep"
            placeholder="9999-99"

          />
        )}
        name="cep"
      />


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
      <Button type="primary" onPress={handleSubmit(onSubmit)}>

        Atualizar dados
      </Button>

      </Container>
       </ScrollView>

  );
}

export default NewAccount;
