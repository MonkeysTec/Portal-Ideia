import React from 'react';
import { View } from 'react-native';
import { Divider } from '../DetaisCourse/styles';
import resumo from '../../assets/iconsConfig/options.png'
import dados from '../../assets/iconsConfig/person.png'
import termos from '../../assets/iconsConfig/document.png'
import senha from '../../assets/iconsConfig/key(1).png'
import chat from '../../assets/iconsConfig/chatbubble-ellipses.png'
import logout from '../../assets/iconsConfig/log-out-outline(1).png'
import information from '../../assets/iconsConfig/information-circle.png'
import { Container,TitleMenu,DivCardsConfig,ImgIcon ,ViewIcon} from './styles';
  import { useNavigation } from '@react-navigation/native';


const Config = () => {
    const navigation = useNavigation();

  return (
    <Container>
       <ViewIcon onPress={()=>navigation.navigate('resumoconta')}>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={information} />

        </View>
         <TitleMenu>
            Resumo da Conta
        </TitleMenu>
      </ViewIcon>


      <Divider />
       <ViewIcon onPress={()=>navigation.navigate('resumoconta')} >
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={dados} />

        </View>
         <TitleMenu>
          Dados Pessoais
          </TitleMenu>
      </ViewIcon>
      <Divider/>
 <ViewIcon onPress={()=>navigation.navigate('termos')}>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={termos} />

        </View>
         <TitleMenu>
            Termos de Contrato
        </TitleMenu>
      </ViewIcon>
      <Divider />
       <ViewIcon onPress={()=>navigation.navigate('suporte')}>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={chat} />

        </View>
         <TitleMenu>
            Suporte
        </TitleMenu>
      </ViewIcon>
      <Divider />

       <ViewIcon onPress={()=>navigation.navigate('novaSenha')}>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={senha} />

        </View>
         <TitleMenu>
           Redefinir Senha
        </TitleMenu>
      </ViewIcon>
      <Divider />
      <ViewIcon onPress={()=>navigation.navigate('resumoconta')}>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={resumo} />

        </View>
         <TitleMenu>
           Preferencias do App
        </TitleMenu>
      </ViewIcon>
      <Divider />
      <ViewIcon onPress={()=>navigation.navigate('resumoconta')}>
        <View style={{
          backgroundColor: '#DEDDEE', width: 50, height: 50, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          marginRight: 10,
        }}>
          <ImgIcon source={logout} />

        </View>
         <TitleMenu>
          Desconectar
        </TitleMenu>
      </ViewIcon>


    </Container>
  );
}

export default Config;
