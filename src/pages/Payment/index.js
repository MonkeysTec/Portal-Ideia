import React,{useState} from 'react';
import { View,Picker,Text,  } from 'react-native';

 import { Container,Text1,TextDescripition,TextPicker,ViewPicker } from './styles';
import Button from '../../components/Button';
const Payment = () => {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <Container>
      <Text1>
Parabéns por mais essa
conquista em sua vida
profissional!

      </Text1>
      <TextDescripition>
        Como receber o seu certificado:
• Escolha um dos meios de pagamento abaixo
Efetue o pagamento•
Entre em contato via e-mail ou WhatsApp com o•
comprovante de pagamento para liberação do
certificado
O certificado não é liberado automaticamente•
Após seu contato nossa equipe pedagógica dará•
andamento ao processo de emissão e liberação de seu
certificado
      </TextDescripition>
      <TextPicker>Metodo de Pagamento</TextPicker>

        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Strype" value="strype" />
        <Picker.Item label="pix" value="pix" />
        <Picker.Item label="picpay" value="picpay" />
        <Picker.Item label="paypal" value="paypal" />
        <Picker.Item label="deposito" value="deposito" />
        <Picker.Item label="debito" value="debito" />
        <Picker.Item label="boleto" value="boleto" />
      </Picker>
      <Button type={'primary'} fullsize={true} style={{ marginTop: 100 }}>
        continuar
      </Button>

    </Container>
  );
}

export default Payment;
