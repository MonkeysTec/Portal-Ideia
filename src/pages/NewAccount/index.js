import React,{useState} from 'react';
import { View ,Picker,Text,ScrollView, Platform, Alert} from 'react-native';
import Button from '../../components/Button';
import Inputs from '../../components/Inputs';
import CheckBox from 'react-native-check-box';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import {cpfMask} from '../../utils/mask'
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
  const [selectedValue, setSelectedValue] = useState();
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
      bairro: '',
      complemento: '',
      cep: '',
      cidade:''

    }
  });


  async function cadastrar(data) {
    const responseCadastro = await axios.post('https://portalidea.com.br/api/registrar-alunoJson.php', {
      email_cadastrar: data.email,
      nome_cadastrar: data.nome,
      senha_cadastrar: data.senha,
      telefone_cadastrar:data.telefone
    })

    if (responseCadastro.data.erro === false) {
     const responseAtualizar = await axios.post('https://portalidea.com.br/api/atualizaDadosPessoais.php', {
      idaluno: data.idS_aluno,
      cpf: data.cpf,
      rg: data.rg,
      tel: data.telefone,
      endereco: data.endereco,
      bairro: data.bairro,
      numero: data.numero,
      cidade: data.cidade,
      cep: data.cep,
      complemento: data.complemento,
      uf:selectedValue
     })
       const respostas = {
      respostaCadastro: responseCadastro.data,
      respostaAtualiza:responseAtualizar.data


       }
      console.log(respostas)
    } else {
      Alert.alert('Usuário já cadastrado')
   }






  }

  function formatCpf(value) {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
  }
  const onSubmit = data => cadastrar(data);
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
        {errors.email && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}
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
        {errors.nome && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}

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
            label="Senha"

          />
        )}
        name="senha"
        />
        {errors.senha && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}


        <Controller
        control={control}
        rules={{
         required: true,
        }}
        mask="999.999.999-99"

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
        {errors.cpf && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}


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
        {errors.rg && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}



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
        {errors.telefone && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}




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
        {errors.endereco && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}

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
            label="Bairro"

          />
        )}
        name="bairro"
        />
        {errors.bairro && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}



        <HalfView>
          <ViewEstado>
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
            label="N°"
            placeholder="123"

          />
        )}
        name="numero"
            />
        {errors.numero && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}
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
        {errors.cidade && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}


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
        {errors.complemento && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}

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
        {errors.cep && <Text style={{color:'red'}}>Campo Obrigatorio</Text>}



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
                    Cadastrar
      </Button>

      </Container>
       </ScrollView>

  );
}

export default NewAccount;
