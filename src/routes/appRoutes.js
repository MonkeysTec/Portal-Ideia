import React from 'react';
import { Image,ProgressViewIOSBase,Text } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home'
import DetaisCourse from '../pages/DetaisCourse'
import Aprovade from '../pages/Aprovade'
import SlideDois from '../pages/SlideDois'
import Welcome from '../pages/Welcome'
import iconConfig from '../assets/iconsMenu/configuracoes.png'
import  iconMatriculados from '../assets/iconsMenu/cursos-matriculados(1).png'
import iconNewCurso from '../assets/iconsMenu/matricular-novo-curso_1.png'
import iconConcluidos from '../assets/iconsMenu/cursos-concluidos.png'
import iconCertificados from '../assets/iconsMenu/meus-certificados.png'
import FormPayments from '../pages/FormPayments';
import StudyArea from '../pages/StudyArea'
import Pdf from '../pages/Pdf';




import colors from '../utils/colors';
import Payment from '../pages/Payment';
import Config from '../pages/Config';
import ResumoConta from '../pages/ResumoConta';
import Boleto from '../components/Boleto';
import TermosContrato from '../pages/TermosContrato';
import Suporte from '../pages/Suporte';
import Prova from '../pages/Prova';
import CursosMatriculados from '../pages/CursosMatriculados';
import NovaSenha from '../pages/NovaSenha ';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import MeusCertificados from '../pages/MeusCertificados';
import CursosConcluidos from '../pages/CursosConcluidos';
const TabBottom = createBottomTabNavigator();
const TabStack = createStackNavigator();

const TabNavigator = () => (
  <TabBottom.Navigator

    screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <Image source={iconNewCurso} style={{width:30,height:30}}/>
            } else if (route.name === 'Cursos Matriculados') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
             return <Image source={iconMatriculados} style={{width:30,height:30}}/>
            }else if(route.name==='Cursos Concluidos'){
               iconName = focused ? 'ios-list-box' : 'ios-list';
              return <Image source={iconConcluidos} style={{width:30,height:30}}/>

            }else if(route.name==='Configuracoes'){
               iconName = focused ? 'ios-list-box' : 'ios-list';
                return <Image source={iconConfig} style={{width:30,height:30}}/>
            }else if(route.name==='Certificados'){
               iconName = focused ? 'ios-list-box' : 'ios-list';
                return <Image source={iconCertificados} style={{width:30,height:30}}/>
            }


          },
        })}
        tabBarOptions={{
          activeTintColor: '#9C27B0',
          inactiveTintColor: '#777',


        }}
      >
    <TabBottom.Screen name="Home"  component={Home} />
    <TabBottom.Screen name="Cursos Matriculados" component={CursosMatriculados} />
    <TabBottom.Screen name="Cursos Concluidos" component={CursosConcluidos} />
    <TabBottom.Screen name="Certificados" component={Pdf} />


    <TabBottom.Screen name="Configuracoes" options={{title:'Configuracoes'}} component={Config} />



  </TabBottom.Navigator>
);

const Tab = () => {
  return (
    <TabStack.Navigator  screenOptions={{
            headerStyle:{
                backgroundColor:colors.fontColor
            }
        }}>
      <TabStack.Screen name="TabStack" options={{ title: '' }} component={TabNavigator} />
      <TabStack.Screen name="DetaisCourse" options={{ title: '' }} component={DetaisCourse} />
      <TabStack.Screen name="StudyArea" options={{ title: '' }} component={StudyArea} />
      <TabStack.Screen name="suporte" options={{ title: '' }} component={Suporte} />
      <TabStack.Screen name="novaSenha" options={{title:''}} component={NovaSenha} />
      <TabStack.Screen name="termos" options={{ title: '' }} component={TermosContrato} />
      <TabStack.Screen name="prova" options={{title:''}} component={Prova} />




    </TabStack.Navigator>
  );
};

export default Tab;
