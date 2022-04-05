import React, { useContext,useState,useEffect } from "react";
import { Text, View, TextInput, Alert,KeyboardAvoidingView,Platform ,Picker,ScrollView,ActivityIndicator,Linking} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button";
import Inputs from '../../components/Inputs'
import { Container,Title,ViewDate,Label ,DataAndroid,SelectIos,ImprimirBoleto,} from './styles'
import AuthContext, { AuthProvider } from '../../Context/AuthProvider/LoginContext';
import AppIntroSlider from "react-native-app-intro-slider";
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';
import generatedBoleto from "./PaymentFunctoins";

export default function Boleto() {
  const { signed,signOut, user, signIn } = useContext(AuthContext);

  const [date, setDate] = useState(new Date(1598051730000));
  const [dateFormater, setDateFormater] = useState('20/02/2021');
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValueIos, setSelectedValueIos] = useState();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [moreInfo, setMoreInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [boleto, setBoleto] = useState(false);









  useEffect(() => {

    var data = date,
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
    setDateFormater(diaF + "/" + mesF + "/" + anoF);


    async function requestUserDados() {
      const { data } = await axios.post('https://portalidea.com.br/api/dadosPessoais.php', {
          "idaluno":user.usuario[0].idS_aluno
      })

      setMoreInfo(data)
    }



    requestUserDados()

  }, [date]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nome: '',

      email: '',
      cpf: '',
      telefone: ''



    }

  });
  const onSubmit = async  data => {

    setLoading(true)
    const infoBoleto = await generatedBoleto(data,moreInfo)

    setBoleto(infoBoleto)
console.log("BOLETO INFO------------------------------------------------",boleto.links[0].href)

    setLoading(false)
  };



  return (
    <ScrollView >
    <Container>
        <Title>Boleto</Title>


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
      {errors.nome && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="email"
          />
        )}
        name="email"
        />

 <Controller
        control={control}
        rules={{
         maxLength: 100,
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
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputs
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Telefone"
          />
        )}
        name="telefone"
        />

        <ViewDate>

          {Platform.OS === 'android' && (
            <>
              <Label>Data nascimento</Label>
             <DataAndroid
              label="Data Nacimento"
              placeholder="20/02/2001"
              onPress={()=>setShow(!show)}
            >
              <Text style={{fontFamily:'Montserrat_500Medium'}}>{dateFormater}</Text>
            </DataAndroid>
            </>

          )}

          {show && Platform.OS ==='android'&& (
             <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
                onChange={onChange}
                style={{width:100}}
        />
          )}

          {Platform.OS === 'ios' && (
            <>
              <Label>
            Data de nascimento
          </Label>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
                onChange={onChange}
                style={{width:100}}
        />
            </>

      )}
        </ViewDate>


<Button type={'primary'} fullsize={true} style={{marginBottom:30}} onPress={handleSubmit(onSubmit)}>gerar boleto</Button>



{!loading&&boleto&&<ImprimirBoleto onPress={()=>Linking.openURL(boleto.links[0].href)}>
<Text>Acessar boleto</Text>
</ImprimirBoleto>}

    </Container>
    </ScrollView>
  );
}
