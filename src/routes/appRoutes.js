import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home'
import DetaisCourse from '../pages/DetaisCourse'
import Aprovade from '../pages/Aprovade'
import SlideDois from '../pages/SlideDois'
import Welcome from '../pages/Welcome'



import colors from '../utils/colors';

const TabBottom = createBottomTabNavigator();
const TabStack = createStackNavigator();

const TabNavigator = () => (
  <TabBottom.Navigator  screenOptions={{
    headerShown: false
  }}>
    <TabBottom.Screen name="Home" component={Home} />
    <TabBottom.Screen name="Cursos Matriculados" component={Aprovade} />
    <TabBottom.Screen name="Cursos Concluidos" component={SlideDois} />
    <TabBottom.Screen name="Certificados" component={Home} />


  </TabBottom.Navigator>
);

const Tab = () => {
  return (
    <TabStack.Navigator  screenOptions={{
            title:'',
            headerStyle:{
                backgroundColor:colors.fontColor
            }
        }}>
      <TabStack.Screen name="TabStack" options={{ title: '' }} component={TabNavigator} />
      <TabStack.Screen name="DetaisCourse" options={{title:''}} component={DetaisCourse} />

    </TabStack.Navigator>
  );
};

export default Tab;
