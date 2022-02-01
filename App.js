import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pages/Welcome';
import SlideDois from './src/pages/SlideDois';
import Login from './src/pages/Login';
import NewAccount from './src/pages/NewAccount';
import DetaisCourse from './src/pages/DetaisCourse';
import { useFonts, Montserrat_600SemiBold,Montserrat_500Medium,Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat';
import Home from './src/pages/Home';
import Aprovade from './src/pages/Aprovade';
import NotAprovade from './src/pages/NotAprovade';
import StudyArea from './src/pages/StudyArea';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';



export default function App() {

  const [loaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_800ExtraBold
  });

  if (!loaded) {
    return null;
  }
  return (
    <Routes/>
  );
}


