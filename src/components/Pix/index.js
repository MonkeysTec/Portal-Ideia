import axios from 'axios';
import React ,{useEffect,useState} from 'react';
import { View,Linking,TextInput,Text} from 'react-native';
import { Divider } from '../../pages/DetaisCourse/styles';
import Button from'../Button'
 import { Container,Title,Cnpj,Name,Description,SubDescription,EmailLink } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons';
const Pix = () => {

  const [typedText, setTypedText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  async function Clip(){
    await Clipboard.setString('30363776000137');
    alert("Pix Copiado!");
  }


  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  }
  return (
    <>

    <Container>

      <Title>
        Pix
      </Title>
      <TouchableOpacity onPress={()=>Clip()} style={{flexDirection:'row'}}>
      <Cnpj>
      CNPJ: 30363776000137
    </Cnpj>
    <Feather name="clipboard" size={24} color="black" />
      </TouchableOpacity>

      <Name>
        Instituto de Desenvolvimento e{ `\n`}
Aprendizagem
      </Name>
      <Divider/>
      <Description>

        Envie o comprovante de depósito para nosso e-mail:
        <EmailLink  >
       contato@portalidea.com.br

        </EmailLink>

      </Description>
      <SubDescription>
           Ou entre me contato através do nosso
        Whatsapp clicando no botão abaixo.
      </SubDescription>



    </Container>
     <View style={{flex:1,alignContent:'center',alignItems:'center'}}>
      <Button type='primary'>
        Whatsapp
      </Button>
      </View>
      </>
  );
}

export default Pix;
