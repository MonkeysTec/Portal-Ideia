import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View,Image } from 'react-native';
import Home from '../pages/Home';
import DetaisCourse from '../pages/DetaisCourse';

import StudyArea from '../pages/StudyArea'







const App = createStackNavigator();

const AppRoutes = ()=>{


    return (
      <App.Navigator screenOptions={{
        headerStyle: { height: 100, backgroundColor: '#5D34A0', },
        headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      }}>
        <App.Screen name="Home" component={Home} />
            <App.Screen name="DetaisCourse" component={DetaisCourse}/>
            <App.Screen name="Area Estudante" component={StudyArea}/>




            </App.Navigator>




    );
}

export default AppRoutes;
