import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../src/pages/Home";
import Aprovade from "../src/pages/Aprovade";
import NotAprovade from "../src/pages/NotAprovade";
import DetaisCourse from "../src/pages/DetaisCourse";
import Login from "../src/pages/Login";
import StudyArea from "../src/pages/StudyArea";
import SlideDois from "../src/pages/SlideDois";
import Welcome from "../src/pages/Welcome";
import NewAccount from "../src/pages/NewAccount";






const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aprovade" component={Aprovade} />
        <Stack.Screen name="NotAprovade" component={NotAprovade} />
        <Stack.Screen name="DetaisCourse" component={DetaisCourse} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="StudyArea" component={StudyArea} />
        <Stack.Screen name="SlideDois" component={SlideDois} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="NewAccount" component={NewAccount} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
