import React,{useState} from 'react';
import { View,Picker,Text,Platform  } from 'react-native';

 import { Container,Text1,TextDescripition,TextPicker,ViewPicker } from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
const Payment = ({route}) => {
  const tipoCer = route.params;
  const navigation =  useNavigation()
  const [selectedValue, setSelectedValue] = useState();
  function renderComponent() {
    switch (selectedValue) {
      case 'strype':
        console.log('strype')
        break;
      case 'pix':
        console.log('pix')
        navigation.navigate('pix')

        break;
      case 'picpay':
        console.log('picpay')
        navigation.navigate('picpay',tipoCer)

        break;
      case 'deposito':
        console.log('deposito')
        navigation.navigate('deposito')

        break;
      case 'paypal':
        console.log('paypal')
        navigation.navigate('paypal')

        break;
      case 'debito':
        console.log('debito')
        navigation.navigate('debito')

        break;
       case 'boleto':
        console.log('boleto')
        navigation.navigate('boleto',tipoCer)

      break;
    }

  }
  console.log(selectedValue)
  return (
    <Container>
      <Text1>
Parabéns por mais essa
conquista em sua vida
profissional!

      </Text1>
      <TextDescripition>
        Como receber o seu certificado:
        • Escolha um dos meios de pagamento abaixo { `\n`}
Efetue o pagamento{ `\n`}
        •Entre em contato via e-mail ou WhatsApp com o{ `\n`}
        •comprovante de pagamento para liberação do
certificado{ `\n`}
•O certificado não é liberado automaticamente{ `\n`}
•Após seu contato nossa equipe pedagógica dará{ `\n`}
andamento ao processo de emissão e liberação de seu
certificado
      </TextDescripition>
      <TextPicker>Metodo de Pagamento</TextPicker>

        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="STRYPE" value="strype" />
        <Picker.Item label="PIX" value="pix" />
        <Picker.Item label="PICPAY" value="picpay" />
        <Picker.Item label="DEPOSITO" value="deposito" />
        <Picker.Item label="PAYPAL" value="paypal" />
        <Picker.Item label="DEBITO" value="debito" />
        <Picker.Item label="BOLETO" value="boleto" />
      </Picker>
      <Button type={'primary'} onPress={()=>renderComponent()} fullsize={true} style={Platform.OS==='ios'?{marginTop:130}:{marginTop:20}}>
        continuar
      </Button>

    </Container>
  );
}

export default Payment;
