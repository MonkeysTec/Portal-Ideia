import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Login from '../pages/Login';
import NewAccount from '../pages/NewAccount';

const Auth = createStackNavigator();


const AuthRoutes = ()=>{
    return(
        <Auth.Navigator  screenOptions={{
        headerStyle: { height: 100, backgroundColor: '#5D34A0', },
        headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      }}>

        <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Cadastro" component={NewAccount} />




        </Auth.Navigator>
    );
}

export default AuthRoutes;
